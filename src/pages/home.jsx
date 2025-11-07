import { useEffect, useState } from "react";
import { getPosts, deletePost } from "../api/posts";
import { Link, useNavigate } from "react-router-dom";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const nav = useNavigate();

  useEffect(() => {
    let mounted = true;
    getPosts().then(data => { if (mounted) { setPosts(data); setLoading(false); }});
    return () => (mounted = false);
  }, []);

  const handleDelete = async (id) => {
    if (!confirm("Hapus post ini?")) return;
    await deletePost(id);
    setPosts((p) => p.filter(x => x.id !== id));
  };

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1>Blog Dashboard</h1>
        <Link to="/posts/new"><button>+ New Post</button></Link>
      </div>

      {posts.length === 0 ? <p>No posts</p> : (
        <ul style={{ padding: 0 }}>
          {posts.map(post => (
            <li key={post.id} style={{ marginBottom: '12px', borderBottom:'1px solid #eee', paddingBottom:'8px' }}>
              <Link to={`/posts/${post.id}`}><h3>{post.title}</h3></Link>
              <small>{new Date(post.createdAt).toLocaleString()}</small>
              <div style={{ marginTop: '6px' }}>
                <button onClick={() => nav(`/posts/${post.id}/edit`)}>Edit</button>
                <button onClick={() => handleDelete(post.id)} style={{ marginLeft: 8 }}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
