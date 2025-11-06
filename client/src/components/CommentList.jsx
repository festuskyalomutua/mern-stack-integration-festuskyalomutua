import React, { useEffect, useState, useContext } from 'react';
import API from '../services/api';
import { AuthContext } from '../context/AuthContext';

export default function CommentList({ postId }) {
  const [comments, setComments] = useState([]);
  const [text, setText] = useState('');
  const { user } = useContext(AuthContext);

  useEffect(() => {
    API.get(`/comments/${postId}`).then(res => setComments(res.data)).catch(err=>console.error(err));
  }, [postId]);

  const submit = async (e) => {
    e.preventDefault();
    if (!user) return alert('Login to comment');
    try {
      const res = await API.post('/comments', { postId, content: text });
      setComments(prev => [res.data, ...prev]);
      setText('');
    } catch (err) {
      alert(err.response?.data?.message || 'Error');
    }
  };

  return (
    <div>
      <h3 className="text-lg font-semibold mb-2">Comments</h3>

      <form onSubmit={submit} className="mb-4">
        <textarea value={text} onChange={e=>setText(e.target.value)} rows={3} className="w-full border rounded px-3 py-2" placeholder="Write a comment..." />
        <div className="mt-2">
          <button className="bg-blue-600 text-white px-3 py-1 rounded">Post</button>
        </div>
      </form>

      <div className="space-y-3">
        {comments.map(c => (
          <div key={c._id} className="p-3 bg-gray-50 rounded">
            <div className="text-sm font-semibold">{c.author?.name}</div>
            <div className="text-sm text-gray-700">{c.content}</div>
            <div className="text-xs text-gray-400">{new Date(c.createdAt).toLocaleString()}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
