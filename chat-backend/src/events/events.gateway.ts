import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { profile } from 'console';
import { Server, Socket } from 'socket.io';
import { ProfileService } from 'src/profile/profile.service';
import { Client } from './client.entity';
import { EventMessage } from './event.payload';
import { MessageService } from 'src/message/message.service';
@WebSocketGateway({ namespace: '/chat' })
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {

  constructor(private profileService: ProfileService, private messageService: MessageService) { }
  @WebSocketServer()
  server: Server;
  private connectedUsers: Client[] = [];
  @SubscribeMessage('message')
  handleMessage(@ConnectedSocket() client: Socket, @MessageBody() payload: EventMessage) {
    let receiver = this.connectedUsers.find((user) => user.id === payload.receiver);
    if (receiver) {
      receiver.socket.emit('message', payload);
    }
  }
  @SubscribeMessage('test')
  handleEvent(@ConnectedSocket() socket: Socket, @MessageBody() data: string): string {
    console.log("WOW ITS HERE\n");
    console.log("here" + data);
    socket.broadcast.emit('test', data);
    return data;
  }
  @SubscribeMessage('clear')
  handleClear(@ConnectedSocket() socket: Socket, @MessageBody() data: string) {
    console.log("clearing");
    this.server.disconnectSockets();
    this.connectedUsers = [];
  }
  handleConnection(client: Socket) {
    const newClient = new Client();
    newClient.socket = client;
    if (Array.isArray(client.handshake.query.id)) {
      newClient.id = parseInt(client.handshake.query.id[0]);
    }
    else {
      newClient.id = parseInt(client.handshake.query.id);
    }
    if (this.connectedUsers.find((user) => user.id === newClient.id)) {
      client.disconnect();
      return;
    }
    console.log("new client id: " + newClient.id);
    this.connectedUsers.push(newClient);
    this.profileService.handleConnection(newClient.id);
  }

  handleDisconnect(client: Socket) {
    const index = this.connectedUsers.findIndex((user) => user.socket.id === client.id);
    const user = this.connectedUsers[index];
    this.connectedUsers.splice(index, 1);
    this.profileService.handleDisconnection(user.id);
  }
}
