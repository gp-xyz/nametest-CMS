import React from "react";
import { Link } from "react-router-dom";

function PostContent({ post, withImage }) {
  console.log(post)
  return (
    <div className={`rounded shadow-2xl w-full h-64 relative fbub whitespace-normal`}>
      {withImage && <img src={post.img_url} className=" w-full h-full object-cover opacity-10" />}
      <div className="absolute inset-0 flex items-top justify-start p-3 m-3">
        <p className={`text-skin-base text-center font-bold ${withImage ? 'text-3xl sm:text-2xl md:text-xl blogtitle' : 'text-xl'}`}>{post.title.rendered}</p>
      </div>
      <div className="absolute inset-y-0 right-0 flex items-end justify-end p-3 pr-5 pb-5 flex flex-col">
  <img src={post.avatar_url} className={`w-16 h-16 rounded-full ${withImage ? '' : 'hover:w-24 hover:h-24'}`} />
  <div className="text-skin-base text-xs w-16 text-center">{post.authorbox.name}</div>
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
