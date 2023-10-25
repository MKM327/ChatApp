import { Injectable } from '@nestjs/common';
import { Pool } from 'pg';
import { Server, Socket } from 'socket.io';
@Injectable()
export class PostgresAdapterService {
  private readonly pool: Pool;

  constructor() {
    this.pool = new Pool({
      user: process.env.DB_USERNAME,
      host: 'localhost',
      database: process.env.DB_NAME,
      password: process.env.DB_PASSWORD,
      port: parseInt(process.env.DB_PORT),
    });

    this.pool.connect();
    this.setupPostgresListener();
  }

  private setupPostgresListener() {
    const client = this.pool;
    client.query('LISTEN new_message');
  }
}