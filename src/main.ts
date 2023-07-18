import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { json } from 'stream/consumers';
const fs = require("fs");
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
  .setTitle('tekab-pfa-api')
  .setDescription('this description')
  .setVersion('1.0')
  .addTag('cats')
  .build();
const document = SwaggerModule.createDocument(app, config);
SwaggerModule.setup('api', app, document);
app.enableCors(); 
// sn3na ficher esmo swagger.json fih les api 
fs.writeFileSync('swagger.json', JSON.stringify(document));
await app.listen(3000);
}
bootstrap();
