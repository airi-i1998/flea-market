import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './items.model';

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
  create(
    @Body('id') id: string,
    @Body('name') name: string,
    @Body('price') price: number,
    @Body('description') description: string,
  ): Item {
    const item: Item = {
      id,
      name,
      price,
      description,
      status: 'ON_SALE',
    };
    return this.itemsService.create(item);
  }

  @Put(':id')
  updateStatue(@Param('id') id: string) {
    return this.itemsService.updateStatus(id);
  }
}
