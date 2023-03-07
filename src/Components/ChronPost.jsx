import React from "react";
import { useEffect } from "react";
function ChronPost(props) {
  const { post } = props;

  // Extract the first image from the post content
  const firstImage = post.content.rendered.match(/<img[^>]+>/)?.[0];

  useEffect(() => {
    console.log(props);
  }, [props]);
  return (
    <div className="border border-gray-200 shadow-md rounded-md p-4">
      <div className="flex flex-col sm:flex-row items-center sm:items-start">
        {firstImage && (
          <div className="mr-4 mb-4 sm:mb-0">
            <div dangerouslySetInnerHTML={{ __html: firstImage }} />
          </div>
        )}
        <div>
          <h2 className="text-lg font-medium mb-2">{post.title.rendered}</h2>
          <p className="text-gray-500">{`By ${post.authorbox.name}`}</p>
        </div>
      </div>
    </div>
  );
}

export default ChronPost;
