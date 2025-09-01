import { usePostsStore } from "./usePostsStore";
import { Post } from "../../../interfaces/Posts";
import axios from "axios";
import Swal from "sweetalert2";

export interface UsePosts {
  data: Post[];
  create: (post: Post) => Promise<Post>;
  get: () => Promise<void>;
  update: (post: Post) => Promise<void>;
  remove: (postId: string) => Promise<void>;
}

export default function usePosts(): UsePosts {
  const { data, setPosts, addPost, updatePost, removePost } = usePostsStore();

  // Post API functions
  const postPost = async (post: Post): Promise<Post> => {
    const response = await axios.post("/posts", post);
    return response.data;
  };

  const getPosts = async (): Promise<Post[]> => {
    const response = await axios.get("/posts");
    return response.data;
  };

  const updatePostAPI = async (post: Post): Promise<Post> => {
    await axios.patch("/posts", post);
    return post;
  };

  const deletePostAPI = async (postId: string): Promise<void> => {
    await axios.delete(`/posts/${postId}`);
  };

  // Post operations
  async function createPost(post: Post): Promise<Post> {
    try {
      const newPost = await postPost(post);
      addPost(newPost);
      Swal.fire("Created", "Successfully created post", "success");
      return newPost;
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Error to create the post, try later", "error");
      throw error;
    }
  }

  async function getAllPosts(): Promise<void> {
    try {
      const posts = await getPosts();
      setPosts(posts);
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Error to get the posts, try later", "error");
      throw error;
    }
  }

  async function updatePostById(post: Post): Promise<void> {
    try {
      await updatePostAPI(post);
      updatePost(post);
      Swal.fire("Updated", "Successfully updated post", "success");
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Error to update the post, try later", "error");
      throw error;
    }
  }

  async function removePostById(postId: string): Promise<void> {
    try {
      await deletePostAPI(postId);
      removePost(postId);
      Swal.fire("Deleted", "Successfully deleted post", "success");
    } catch (error) {
      console.error(error);
      Swal.fire("Error", "Error to delete the post, try later", "error");
      throw error;
    }
  }

  return {
    data,
    create: createPost,
    get: getAllPosts,
    update: updatePostById,
    remove: removePostById,
  };
}
