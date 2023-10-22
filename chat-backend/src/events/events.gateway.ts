import { WebSocketGateway, WebSocketServer, SubscribeMessage, OnGatewayConnection, OnGatewayDisconnect, MessageBody, ConnectedSocket } from '@nestjs/websockets';
import { profile } from 'console';
import { Server, Socket } from 'socket.io';
import { ProfileService } from 'src/profile/profile.service';

@WebSocketGateway({ namespace: '/chat' })
export class EventsGateway implements OnGatewayConnection, OnGatewayDisconnect {
  
  constructor(private profileService: ProfileService){}
  @WebSocketServer()
  server: Server;
  @SubscribeMessage('message')
  handleMessage(@ConnectedSocket() client: Socket, @MessageBody() payload: any): string {
    client.emit("message", payload);
    return 'Hello world!';
  }
  @SubscribeMessage('events')
  handleEvent(@MessageBody() data: string): string {
    return data;
  }
  handleConnection(client: Socket) {
    console.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket) {
    console.log(`Client disconnected: ${client.id}`);
  }
}
