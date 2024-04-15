//데코레이터 함수 임포트
import { Controller, Param, Body, Delete, Get, Post, Put} from '@nestjs/common';

@Controller('blog') //클래스에 붙이는 Controller 데코레이터
export class BlogController {
    @Get()
    getAllPosts(){
        console.log('모든 게시글 가져오기');
    }

    @Post()
    CreatePost(@Body() post: any){ //HTTP 요청의 body 내용을 post 에 할당
        console.log('게시글 작성');
        console.log(post);
    }

    @Delete('/:id')
    deletePost(){
        console.log('게시글 삭제');
    }
    
    @Put('/:id')
    updatePost(@Param('id') id, @Body() post: any){
        console.log(`[${id} 게시글 업데이트]`);
        console.log(post);
    }
}

