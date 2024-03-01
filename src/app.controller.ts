import { Controller, Get, Logger } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, Payload } from '@nestjs/microservices';
import { Categoria } from './interfaces/categorias/categoria.interface';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

   private logger = new Logger(AppController.name);

   // Se registra
   @EventPattern('criar-categoria')
   async criarCategoria(@Payload() categoria: Categoria){
       this.logger.log(`Categoria adicionada: ${JSON.stringify(categoria)}`)   
       
       this.appService.criarCategoria(categoria)
   }

}
