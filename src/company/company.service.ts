import { Injectable } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class CompanyService {
    constructor(private prisma: PrismaClient) {}

    create(data: {name: string}) {
        return this.prisma.company.create({data});
    }

    findAll() {
        return this.prisma.company.findMany({ include: { products: true } });
    }

    findOne(id: number) {
        return this.prisma.company.findUnique({ where: { id }, include: { products: true } });
    }

    update(id: number, data: {name: string}) {
        return this.prisma.company.update({ where: { id }, data });
    }

    remove(id: number) {
        return this.prisma.company.delete({ where: { id } });
    }
}