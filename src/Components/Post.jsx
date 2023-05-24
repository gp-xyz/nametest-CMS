import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";

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
    return <Loading />;
  }

  return (
    <div className="flex justify-center px-2">
      <div className="container w-full sm:w-70p mx-auto px-4 general-light" style={{ maxWidth: "1024px" }}>
        <div className="text-center">
          <div className="text-3xl font-bold my-4">{post.title.rendered}</div>
          <div className="text-center pb-10">by {author}</div>
        </div>
        <div className="" dangerouslySetInnerHTML={{
          __html: post.content.rendered
            .replace(/<p>/g, '<p class="py-2 my-2">')
            .replace(/<h3>/g, '<h3 class="text-xl my-1">')
            .replace(/<img /g, '<img class="mx-auto" ')
        }} />
      </div>
    </div>
  );
  
  
  
  
  
}

export default SinglePost;
