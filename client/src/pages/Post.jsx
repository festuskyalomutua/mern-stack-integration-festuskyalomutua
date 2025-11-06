import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../services/api';
import CommentList from '../components/CommentList';

export default function PostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetch = async () => {
      try {
        const res = await API.get(`/posts/slug/${slug}`);
        setPost(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetch();
  }, [slug]);

  if (!post) return <div>Loading...</div>;

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
      <div className="text-sm text-gray-500 mb-4">By {post.author?.name} • {new Date(post.createdAt).toLocaleDateString()}</div>
      {post.coverImageUrl && <img src={post.coverImageUrl} alt="" className="w-full rounded mb-4" />}
      <div className="prose max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
      <div className="mt-8">
        <CommentList postId={post._id} />
      </div>
    </div>
  );
}
