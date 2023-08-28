import { PartialType } from '@nestjs/swagger';
import { CreateArticleDto } from './create-article.dto';

export class UpdateArticleDto extends PartialType(CreateArticleDto) {}
//this partial type from Nest allows this data transfer object to have all the same properties as the passed in DTO, aka the create article dto previously defined
