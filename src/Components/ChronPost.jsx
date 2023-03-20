import React from "react";
import { Link } from "react-router-dom";

function PostContent({ post, withImage }) {
  return (
    <div className={`rounded shadow-2xl w-full h-64 relative fbub whitespace-normal`}>
      {withImage && <img src={post.img_url} className=" w-full h-full object-cover opacity-10" />}
      <div className="absolute inset-0 flex items-top justify-start p-3 m-3">
        <p className={`text-slate-700 text-center font-bold ${withImage ? 'text-3xl sm:text-2xl md:text-xl blogtitle' : 'text-xl'}`}>{post.title.rendered}</p>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-end justify-end p-3 ">
        <img src={post.avatar_url} className={`w-16 h-16 rounded-full ${withImage ? '' : 'hover:w-24 hover:h-24'}`} />
      </div>
    </div>
  );
}

function ChronPost(props) {
  const { post } = props;

  return (
    <div className="m-2 p-2 ">
      {post.img_url ? (
        <Link to={`/posts/${post.slug}`}>
          <PostContent post={post} withImage />
        </Link>
      ) : (
        <PostContent post={post} />
      )}
    </div>
  );
}

export default ChronPost;
