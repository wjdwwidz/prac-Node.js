//메모리에 저장하는 블로그 서비스 클래스
import { PostDto } from './blog.model';

export class BlogService {
    posts = []; // 게시글을 배열의 형태로 메모리에 담기 위해서 posts 배열 선언

    getAllPosts(){
        return this.posts;
    } //컨트롤러의 함수와 이름을 동일하게 한 서비스 계층의 함수, posts 를 그대로 반환
    
    createPost(postDto: PostDto){
        const id = this.posts.length + 1;
        this.posts.push({ id : id.toString(), ...postDto, createdDt: new Date() });
    }

    getPost(id){
    const post = this.posts.find((post)=>{
        return post.id === id;
    });
    console.log(post);
    return post;
    }
    delete(id){
        const filteredPosts = this.posts.filter((post)=> post.id !== id);
        this.posts = [...filteredPosts];
    }

    updatePost (id, postDto : PostDto){
        let updateIndex = this.posts.findIndex((post)=> post.id === id);
        const updatePost= {id, ...postDto, updatedDt : new Date()};
        this.posts[updateIndex] = updatePost;
        return updatePost;
    }
}

