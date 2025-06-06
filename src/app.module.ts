import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { CompanyModule } from './company/company.module';
import { ProductModule } from './product/product.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    CompanyModule,
    ProductModule,
  ],
})

export class AppModule {}