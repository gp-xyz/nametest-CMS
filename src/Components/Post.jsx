import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SinglePost() {
  const [post, setPost] = useState(null);
  const [author, setAuthor] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const { slug } = useParams();
  const wpurl = 'https://flashbulb.link/'
  const oldwpurl = 'https://johpat90.dreamhosters.com/'
  useEffect(() => {
    fetch(wpurl + `wp-json/wp/v2/posts?slug=${slug}&_embed&author`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setPost(data[0]);
        setAuthor(data[0]._embedded.author[0].name)
        setIsLoading(false);
      })
      .catch(error => {
        console.log(error);
        setIsLoading(false);
      });
  }, [slug]);

  if (isLoading || !post?.title?.rendered) {
    return <div>1 Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 general-light">
      <h1 className="text-3xl font-bold my-4">{post.title.rendered}</h1>
      <h3>by {author}</h3>
      <div dangerouslySetInnerHTML={{
        __html: post.content.rendered
          .replace(/<p>/g, '<p class="py-2 my-2">')
          .replace(/<h3>/g, '<h3 class="text-xl my-1">')
      }} />
    </div>
  );
  
  
}

export default SinglePost;
