import React, { useEffect, useState } from 'react';
import API from '../services/api';
import { Link } from 'react-router-dom';

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [q, setQ] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    let mounted = true;
    const fetchPosts = async () => {
      try {
        const res = await API.get('/posts', { params: { page, q }});
        if (mounted) setPosts(res.data.posts);
      } catch (err) {
        console.error(err);
      }
    };
    fetchPosts();
    return () => (mounted = false);
  }, [page, q]);

  return (
    <div className="space-y-4">
      <div className="flex gap-2">
        <input className="flex-1 border rounded px-3 py-2" placeholder="Search..." value={q} onChange={e=>setQ(e.target.value)} />
      </div>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map(p => (
          <article key={p._id} className="bg-white p-4 rounded shadow">
            <h3 className="font-semibold text-lg"><Link to={`/post/${p.slug}`}>{p.title}</Link></h3>
            <p className="text-sm text-gray-600 mt-2">{p.content.slice(0,150)}...</p>
            <div className="text-xs text-gray-500 mt-2">By {p.author?.name} • {new Date(p.createdAt).toLocaleDateString()}</div>
          </article>
        ))}
      </div>
    </div>
  );
}
