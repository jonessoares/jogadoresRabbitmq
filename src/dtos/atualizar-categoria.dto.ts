import { IsNotEmpty, IsString, IsArray, ArrayMinSize, IsOptional } from 'class-validator';
import {Evento} from '../dtos/interfaces/evento.interface';


export class AtualizarCategoriaDto{

 @IsString()
 @IsOptional()
  descricao: String;

  @IsArray()
  @ArrayMinSize(1)
  @IsOptional()  //realizar teste ....
  eventos: Array<Evento>;
}