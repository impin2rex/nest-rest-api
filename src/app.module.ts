import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import config from './config/keys';

@Module({
  imports: [MongooseModule.forRoot(config.mongoURI), CatsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
