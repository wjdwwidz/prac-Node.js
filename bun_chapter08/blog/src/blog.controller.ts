//데코레이터 함수 임포트
import { Controller, Param, Body, Delete, Get, Post, Put} from '@nestjs/common';
import { BlogService } from './blog.service';
@Controller('blog') //클래스에 붙이는 Controller 데코레이터
export class BlogController {
    blogService : BlogService;
    constructor(){
        this.blogService = new BlogService();
    }

    @Get()
    getAllPosts(){
        console.log('모든 게시글 가져오기');
        return this.blogService.getAllPosts();
    }

    @Post()
    CreatePost(@Body() postDto){ //HTTP 요청의 body 내용을 post 에 할당
        console.log('게시글 작성');
        this.blogService.createPost(postDto);
        return 'success';
    }

    @Get('/:id')
    getPost(@Param('id') id:String){
        console.log('게시글 하나 가져오기');
        this.blogService.getPost(id);
    }

    @Delete('/:id')
    deletePost(){
        console.log('게시글 삭제');
        this.blogService.delete(id);
        return 'success';
    }
    
    @Put('/:id')
    updatePost(@Param('id') id, @Body() postDto){
        console.log('게시글 업데이트', postDto);
        return this.blogService.updatePost(id, postDto);

    }
}

