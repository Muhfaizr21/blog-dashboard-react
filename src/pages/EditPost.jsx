import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getPost, updatePost } from "../api/posts";
import PostForm from "../components/PostForm";

export default function EditPost() {
  const { id } = useParams();
  const nav = useNavigate();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(id).then(setPost).catch(() => alert('Not found'));
  }, [id]);

  const handleUpdate = async (data) => {
    await updatePost(id, { ...post, ...data });
    nav(`/posts/${id}`);
  };

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h2>Edit Post</h2>
      <PostForm initial={{ title: post.title, content: post.content }} onSubmit={handleUpdate} submitLabel="Update"/>
    </div>
  );
}
