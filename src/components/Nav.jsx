import { Link } from "react-router-dom";

export default function Nav(){
  return (
    <nav style={{ padding: '12px 20px', borderBottom: '1px solid #ddd' }}>
      <Link to="/" style={{ marginRight: 12 }}>Home</Link>
      <Link to="/posts/new">New Post</Link>
    </nav>
  );
}
