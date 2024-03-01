
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { JogadorSchema } from './interfaces/jogadores/jogador.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoriaSchema } from './interfaces/categorias/categoria.schema';

let url = `mongodb+srv://admin_sr:xe4p12ZdRT3FSCOU@cluster0.ypdbtw3.mongodb.net/Novo_db(sradmbackend)?retryWrites=true&w=majority`;
//corrigir url
@Module({
  imports: [MongooseModule.forRoot(url),
  //{useNewUrlParser: true, useCreateIndex: true, useUnifieldTopology: true}),
   MongooseModule.forFeature([
    {name:'Jogador', schema: JogadorSchema},
    {name:'Categoria', schema: CategoriaSchema}
   ]),
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}