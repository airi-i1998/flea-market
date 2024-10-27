import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './items.model';
import { CreateItemDto } from './dto/create-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll(): Item[] {
    return this.itemsService.findAll();
  }

  @Get(':id') // item/id
  findById(@Param('id') id: string): Item {
    return this.itemsService.findById(id);
  }

  @Post()
  /*
  @Body('引数') : リクエストのボディで含まれたデータを取得
  変数名: 型 ： ボディから取得したデータを変数に代入
  */
  create(@Body() createItemDto: CreateItemDto): Item {
    return this.itemsService.create(createItemDto);
  }

  @Put(':id')
  updateStatue(@Param('id') id: string) {
    return this.itemsService.updateStatus(id);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    this.itemsService.delete(id);
  }
}
