import { NestFactory } from "@nestjs/core";
import { HelloModule } from "./hello.module";

//NestJS를 시작시키는 함수
async function bootstrap() {
    //NestFactory를 사용해서 NestApplication 객체 생성
    const app = await NestFactory.create(HelloModule);
    await app.listen(3000, ()=>{console.log("Hello NestJS : Server run by Bun!")}
)};

bootstrap();