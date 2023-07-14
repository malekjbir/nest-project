import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';
import { CompanyModule } from './company/company.module';

@Module({
  imports: [PostModule,PostModule, CompanyModule],
  controllers: [AppController,PostController],
  providers: [AppService,PostService],
})
export class AppModule {}
