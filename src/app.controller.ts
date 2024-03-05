import { Body, Controller, Get, Logger, Post, UsePipes, ValidationPipe } from '@nestjs/common';
//import { AppService } from './app.service';
import  { ClientProxy, ClientProxyFactory, Transport } from '@nestjs/microservices';
import { CriarCategoriaDto } from './dtos/criar-categoria.dto';

@Controller('/api/v1')
export class AppController {

  private logger = new Logger(AppController.name);
  private clientAdminBackend: ClientProxy;

  constructor(){
    //ACk informando q entregou na fila / transporter    
    this.clientAdminBackend = ClientProxyFactory.create({
     transport: Transport.RMQ,
      options: {
        urls: ['amqp://user:senha_RabbitMQ@IP_instancia_Aws:5672/smartranking'],  //porta console
        queue: 'admin-backend'
      }
    })
  }

  @Post('categorias')
  @UsePipes(ValidationPipe)
  async criarCategoria(
       @Body() criarCategoriaDto: CriarCategoriaDto){
         return await this.clientAdminBackend.emit('criar-categoria', criarCategoriaDto)
       }
}
