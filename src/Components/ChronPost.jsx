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
    // <div className="border border-gray-200 shadow-md rounded-md p-4">
    //       <img src={post.img_url}/>
    //       <h2 className="text-lg font-medium mb-2">{post.title.rendered}</h2>
    //       <p className="text-gray-500">{`By ${post.authorbox.name}`} </p>
    //       <img src={post.avatar_url}/>

    // </div>
    <div className="m-2 p-2 ">
      {post.img_url ? (
           <div className="w-full h-64 relative bg-gradient-to-r from-black to-slate-500 hover:to-white hover:cursor-pointer">
           <img src={post.img_url} className="w-full h-full object-cover opacity-20" />
           <div className="absolute inset-0 flex items-top justify-start p-3 m-3">
             <p className="text-white text-center font-bold text-xl">{post.title.rendered} </p>
           </div>
           <div className="absolute inset-y-0 right-0 flex items-end justify-end p-3 ">
             <img src={post.avatar_url} className="w-16 h-16 rounded-full" />
           </div>
         </div>
         
          
      ):
      (
        <div className="w-full h-64 relative bg-gradient-to-r from-black to-slate-500 hover:to-white hover:cursor-pointer">
       
        <div className="absolute inset-0 flex items-top justify-start p-3 m-3">
          <p className="text-white text-center font-bold text-xl">{post.title.rendered} </p>
        </div>
        <div className="absolute inset-y-0 right-0 flex items-end justify-end p-3 ">
          <img src={post.avatar_url} className="w-16 h-16 rounded-full hover:w-24 hover:h-24" />
        </div>
      </div>
      )
      
      }
    </div>

  );
}

export default ChronPost;
