import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class ProductService {
    constructor(private prisma: PrismaClient) {}

    create(data: {name: string, price: number, companyId: number}) {
        return this.prisma.product.create({data});
    }

    findAll() {
        return this.prisma.product.findMany({ include: { company: true } });
    }

    findOne(id: number) {
        return this.prisma.product.findUnique({ where: { id }, include: { company: true } });
    }

    update(id: number, data: {name: string, price: number, companyId: number}) {
        return this.prisma.product.update({ where: { id }, data });
    }

    remove(id: number) {
        return this.prisma.product.delete({ where: { id } });
    }
}

