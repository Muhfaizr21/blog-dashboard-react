import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPost } from "../api/posts";
import ReactMarkdown from "react-markdown";

export default function PostDetail(){
  const { id } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    getPost(id).then(setPost).catch(() => alert('Not found'));
  }, [id]);

  if (!post) return <div>Loading...</div>;

  return (
    <div>
      <h1>{post.title}</h1>
      <small>{new Date(post.createdAt).toLocaleString()}</small>
      <div style={{ marginTop: 12 }}>
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </div>
      <div style={{ marginTop: 12 }}>
        <Link to={`/posts/${id}/edit`}><button>Edit</button></Link>
        <Link to="/"><button style={{ marginLeft: 8 }}>Back</button></Link>
      </div>
    </div>
  );
}
