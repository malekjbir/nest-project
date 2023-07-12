import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { PostController } from './post/post.controller';
import { PostService } from './post/post.service';

@Module({
  imports: [PostModule,PostModule],
  controllers: [AppController,PostController],
  providers: [AppService,PostService],
})
export class AppModule {}
