import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
  const [post, setPost] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  const wpurl = 'http://35.164.177.180/'
  const oldwpurl = 'https://johpat90.dreamhosters.com/'
  useEffect(() => {
    fetch(wpurl + `wp-json/wp/v2/posts?slug=${slug}&_embed`)
      .then(response => response.json())
      .then(data => {
        setPost(data[0]);
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading || !post?.title?.rendered) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 general-light">
      <h1 className="text-3xl font-bold my-4">{post.title.rendered}</h1>
      <div dangerouslySetInnerHTML={{
        __html: post.content.rendered
          .replace(/<p>/g, '<p class="py-2 my-2">')
          .replace(/<h3>/g, '<h3 class="text-xl my-1">')
      }} />
    </div>
  );
  
  
}

export default SinglePost;
