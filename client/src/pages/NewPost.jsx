import React, { useState, useContext } from 'react';
import API from '../services/api';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

export default function NewPost() {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [tags, setTags] = useState('');
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  if (!user) return <div>Please login to create posts.</div>;

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const fd = new FormData();
      fd.append('title', title);
      fd.append('content', content);
      fd.append('tags', tags);
      if (file) fd.append('file', file);
      const res = await API.post('/posts', fd, { headers: { 'Content-Type': 'multipart/form-data' }});
      navigate(`/post/${res.data.slug}`);
    } catch (err) {
      console.error(err);
      alert(err.response?.data?.message || 'Error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmit} className="max-w-3xl mx-auto space-y-4 bg-white p-6 rounded shadow">
      <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="w-full border rounded px-3 py-2" />
      <textarea value={content} onChange={e=>setContent(e.target.value)} placeholder="Content (HTML allowed)" rows={10} className="w-full border rounded px-3 py-2" />
      <input value={tags} onChange={e=>setTags(e.target.value)} placeholder="tags,comma,separated" className="w-full border rounded px-3 py-2" />
      <input type="file" onChange={e=>setFile(e.target.files[0])} />
      <div>
        <button disabled={loading} className="bg-blue-600 text-white px-4 py-2 rounded">{loading ? 'Saving...' : 'Publish'}</button>
      </div>
    </form>
  );
}
