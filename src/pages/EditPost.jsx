import { useState } from "react";

export default function PostForm({ initial = { title: "", content: "" }, onSubmit, submitLabel="Save" }) {
  const [form, setForm] = useState(initial);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.title.trim()) return alert("Title required");
    onSubmit(form);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title</label><br/>
        <input name="title" value={form.title} onChange={handleChange} style={{ width: '100%' }}/>
      </div>

      <div style={{ marginTop: 8 }}>
        <label>Content (Markdown)</label><br/>
        <textarea name="content" value={form.content} onChange={handleChange} rows={10} style={{ width: '100%' }} />
      </div>

      <div style={{ marginTop: 8 }}>
        <button type="submit">{submitLabel}</button>
      </div>
    </form>
  );
}
