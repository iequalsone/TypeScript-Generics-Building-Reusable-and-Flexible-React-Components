import React from 'react';
import useFetch from '../hooks/useFetch';

interface Post {
  id: number;
  title: string;
  body: string;
}

function PostsList() {
  const { data, isLoading, error } = useFetch<Post[]>('https://jsonplaceholder.typicode.com/posts');

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      {data?.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}

export default PostsList;
