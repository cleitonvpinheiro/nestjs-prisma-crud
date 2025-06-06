import { Controller, Get, Post, Put, Delete, Param, Body, ParseIntPipe  } from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('products')

export class ProductController {
    constructor(private readonly productService: ProductService) { }

    @Post()
    create(@Body() data: { name: string, price: number, companyId: number }) {
        return this.productService.create(data);
    }

    @Get()
    findAll() {
        
        return this.productService.findAll();
    }


    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.productService.findOne(id);
    }

    @Put(':id')
    update(@Param('id', ParseIntPipe) id: number, @Body() data: { name: string, price: number, companyId: number }) {
        return this.productService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id', ParseIntPipe) id: number) {
        return this.productService.remove(id);
    }
}