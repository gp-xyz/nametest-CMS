import React, { useState, useEffect } from "react";

function CMS() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://johpat90.dreamhosters.com/wp-json/wp/v2/posts?_embed")
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      });
  }, []);

  return (
    <div className='general-light'>
      <h2>Recent WordPress Posts</h2>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <h3 dangerouslySetInnerHTML={{ __html: post.title.rendered }} />
            <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
            <a href={post.link}>Read More</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CMS;
