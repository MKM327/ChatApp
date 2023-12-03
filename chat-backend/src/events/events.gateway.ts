import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { profile } from 'console';
import { Server, Socket } from 'socket.io';
import { ProfileService } from 'src/profile/profile.service';
import { Client } from './client.entity';
import { EventMessage } from './event.payload';
import { MessageService } from 'src/message/message.service';
@WebSocketGateway({ namespace: '/chat', cors: { origin: "http://localhost:3000", methods: ["GET", "POST"] } })
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
    socket.broadcast.emit('test', data);
    return data;
  }
  @SubscribeMessage('clear')
  handleClear(@ConnectedSocket() socket: Socket, @MessageBody() data: string) {
    console.log("clearing");
    this.server.disconnectSockets();
    this.connectedUsers = [];
  }
  @SubscribeMessage('connectToServer')
  handleJoin(@ConnectedSocket() socket: Socket, @MessageBody() data: string) {
    console.log("joining", data);
    if (data == null) {
      console.log(data, "is null");
      return;
    }
    let client = new Client();
    client.id = parseInt(data);
    client.socket = socket;
    this.connectedUsers.push(client);
    this.profileService.handleConnection(parseInt(data));
  }
  @SubscribeMessage('createRoom')
  handleCreateRoom(@ConnectedSocket() socket: Socket, @MessageBody() data: string) {
    console.log("creating room", data);
    socket.join(data);
  }

  @SubscribeMessage("sendMessage")
  handleSendMessage(@ConnectedSocket() socket: Socket, @MessageBody() data: any) {
    console.log("sending message", data);
  }
  handleConnection(client: Socket) {
    console.log("connected", client.id);
  }

  handleDisconnect(socket: Socket) {
    console.log("disconnected", socket.id);
    const client = this.connectedUsers.find((user) => user.socket.id === socket.id);
    if (client) {
      this.profileService.handleDisconnection(client.id);
      this.connectedUsers = this.connectedUsers.filter((user) => user.socket.id !== socket.id);
    }
  }
}
