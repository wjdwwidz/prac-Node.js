import {readFile, writeFile } from 'fs/promises';
import { PostDto } from './blog.model';

//블로그 리포지토리 인터페이스 정의
export interface BlogRepository {
    getAllPost() : Promise<PostDto[]>;
    createPost(postDto)

}