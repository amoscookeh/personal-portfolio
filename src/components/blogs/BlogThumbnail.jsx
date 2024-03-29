import React from "react";
import { Link } from "react-router-dom";

const BlogThumbnail = ({ name, component, thumbnail, date, synopsis, idx }) => {
  return (
    <div class="card w-full bg-base-100 shadow-xl image-full">
      <figure>
        <img className="bg-dark-body" src={thumbnail} alt="Thumbnail" />
      </figure>
      <div class="card-body">
        <h2 class="card-title text-theme">{name}</h2>
        <p class="text-white">{synopsis}</p>
        <div class="card-actions justify-end">
          <Link class="btn btn-primary text-white" to={`/blog/${idx}`}>
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogThumbnail;
