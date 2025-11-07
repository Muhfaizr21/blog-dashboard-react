import PostForm from "../components/PostForm";
import { createPost } from "../api/posts";
import { useNavigate } from "react-router-dom";

export default function NewPost() {
  const nav = useNavigate();

  const handleCreate = async (data) => {
    const payload = { ...data, createdAt: new Date().toISOString() };
    const created = await createPost(payload);
    nav(`/posts/${created.id}`);
  };

  return (
    <div>
      <h2>New Post</h2>
      <PostForm onSubmit={handleCreate} submitLabel="Create"/>
    </div>
  );
}
