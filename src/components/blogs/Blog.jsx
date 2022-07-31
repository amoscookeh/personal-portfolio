import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

// Components
import LoadingPage from "../../components/loadingpage/LoadingPage";
import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import Socials from "../../components/socials/Socials";

// Data
import { blogData } from "../../data";
import BlogThumbnail from "./BlogThumbnail";

export const Blog = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState();
  const params = useParams();
  const blogId = params && params.blogId;
  const [loadPage, setLoadPage] = useState(false);

  useEffect(() => {
    const min = 2000;
    const max = 4000;
    const loadTime = Math.floor(Math.random() * (max - min)) + min;
    setLoadPage(true);
    setTimeout(() => {
      setLoadPage(false);
    }, loadTime);
  }, []);

  useEffect(() => {
    blogId && setSelectedBlog(blogId);
  }, [blogId]);

  return (
    <>
      {loadPage ? (
        <div className="flex h-screen justify-center items-center mx-auto">
          <LoadingPage fourLetterWord={"BLOG"} />
        </div>
      ) : (
        <>
          <Navbar
            setShowMenu={setShowMenu}
            showMenu={showMenu}
            numberOfLinks={0}
          >
            <Link
              className={`btn btn-primary btn-sm text-white md:mr-2`}
              to={"/"}
            >
              Home
            </Link>
          </Navbar>
          <div>
            {selectedBlog !== undefined ? (
              <div
                id="blogs"
                className="container md:flex md:justify-between items-center mx-auto px-8 md:px-14 w-full"
              >
                {blogData[selectedBlog].component}
              </div>
            ) : (
              <>
                <Hero />
                <div
                  id="blogs"
                  className="container mt-12 md:flex md:justify-between items-center mx-auto px-8 md:px-14 w-full"
                >
                  <div className="w-full">
                    <h2 className="secondary-title">Amos' Thoughts</h2>
                    <p className="section-paragraph">{`Just thought it would be nice to share some of my thoughts!`}</p>
                    <div className="workcards max-w-6xl mx-auto grid gap-2 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
                      {blogData.map((blog, idx) => {
                        return <BlogThumbnail {...blog} idx={idx} />;
                      })}
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
          <Socials />
        </>
      )}
    </>
  );
};

export default Blog;
