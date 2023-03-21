import React, { useState, useEffect } from "react";
import ChronPost from "./ChronPost";

function CMS() {
  const [posts, setPosts] = useState([]);
  const [authors, setAuthors] = useState({});
  const [media , setMedia] = useState({});
  const [isLoading, setIsLoading] = useState(true); // new state to track loading status
  const wpurl = 'http://44.237.162.198/'
  const oldwpurl = 'https://johpat90.dreamhosters.com/'

  useEffect(() => {
    Promise.all([
      fetch(wpurl + "wp-json/wp/v2/posts?_embed"),
      fetch(wpurl + "wp-json/wp/v2/media"),
      fetch(wpurl + "wp-json/wp/v2/users")
    ])
    .then(([postResponse, mediaResponse, authorResponse]) => {
      return Promise.all([
        postResponse.json(),
        mediaResponse.json(),
        authorResponse.json()
      ]);
    })
    .then(([postData, mediaData, authorData]) => {
      const mediaObject = mediaData.reduce((acc, { id, source_url }) => {
        acc[id] = source_url;
        return acc;
      }, {});
      setMedia(mediaObject);

      const authorObject = authorData.reduce((acc, author) => {
        acc[author.id] = author;
        return acc;
      }, {});
      setAuthors(authorObject);

      const postWithAuthor = postData.map(post => {
        return {
          ...post,
          authorbox: authorObject[post.author],
          avatar_url: mediaObject[authorObject[post.author]['acf']['avatar']],
          img_url: mediaObject[post['acf']['focuspiece']]
        };
      });
      setPosts(postWithAuthor);
      setIsLoading(false); // set loading to false after data is fetched
    })
    .catch(error => {
      console.log(error);
    });
  }, []);

  if (isLoading) { // check if data is still loading
    return <div>Loading...</div>;
  }

  return (
    <div className='general-light'>
      <div className="text-5xl mx-2 px-2">2023</div>
      <div className="grid text-xl grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {posts.map(post => (
          <ChronPost post={post} />
        ))}
      </div>
    </div>
  );
}

export default CMS;
