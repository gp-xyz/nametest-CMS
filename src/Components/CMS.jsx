import React, { useState, useEffect } from "react";
import ChronPost from "./ChronPost";

function CMS() {
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState({});
  const [media , setMedia] = useState({});
  

  useEffect(() => {
    fetch("https://johpat90.dreamhosters.com/wp-json/wp/v2/posts?_embed")
      .then(response => response.json())
      .then(data => {
        setPosts(data);
      });
    fetch("https://johpat90.dreamhosters.com/wp-json/wp/v2/media")
    .then(response => response.json())
    .then(data => {
      const dataObject = data.reduce((acc, { id, source_url }) => {
        acc[id] = source_url;
        return acc;
      }, {});

      setMedia(dataObject);

    });
    fetch("https://johpat90.dreamhosters.com/wp-json/wp/v2/users")
      .then(response => response.json())
      .then(data => {
     
        const authorData = {};
        data.forEach(author => {
          authorData[author.id] = author;
        });
        
       
        setAuthors(authorData);
      });
  }, []);

  const postsWithAuthors = posts.map(post => {
    return {
      ...post,
      authorbox: authors[post.author],
      avatar_url: media[authors[post.author]['acf']['avatar']],
      img_url: media[post['acf']['focuspiece']]
    };
  });

  return (
    <div className='general-light'>
      <div className="text-xl">The Latest from Flashbulb</div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {postsWithAuthors.map(post => (
          <ChronPost post={post} />
        ))}
      </div>
    </div>
  );
}

export default CMS;
