import { Controller, Get, Post, Put, Delete, Param, Body } from '@nestjs/common';
import { CompanyService } from './company.service';

@Controller('companies')

export class CompanyController {
    constructor(private readonly companyService: CompanyService) {}

    @Post()
    create(@Body() data: {name: string}) {
        return this.companyService.create(data);
    }

    @Get()
    findAll() {
        return this.companyService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.companyService.findOne(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() data: {name: string}) {
        return this.companyService.update(id, data);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.companyService.remove(id);
    }
}