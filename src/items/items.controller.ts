import { Body, Controller, Get, Post } from '@nestjs/common';
import { ItemsService } from './items.service';
import { Item } from './items.model';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}
  @Get()
  findAll() {
    return this.itemsService.findAll();
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
    @Body('description') description: string
  ): Item {
    const item: Item = {
      id,
      name,
      price,
      description,
      status: 'ON_SALE'
    }
    return this.itemsService.create(item);
  }
}
