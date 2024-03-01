import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import { Logger } from '@nestjs/common';


async function bootstrap() {
  //const logger = new Logger('Main');
  const logger = new Logger('Main');

  const app = await NestFactory.createMicroservice(AppModule, {
  //  transport: Transport.RMQ,
    options: {
   //    urls: ['amqp://user@senha_server@ip:5672/smartranking'], //Corrigir qnd criar
     //  queue: 'admin-backend'
    },
  });

 //await app.listen(() => { this.logger.log(`Microservices in Service`)} );

  app.listen()
  .then(
    _ => { logger.log(`Microservices in Service`)}
  );

}

bootstrap();


 /*await app.listen(async function(): Promise<void> {
    this.logger.log(`Microservices in Service`)
  }); */
