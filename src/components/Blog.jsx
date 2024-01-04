import React, { useContext, useState, useEffect } from "react";
import { BlogContext } from "../context/BlogContext";
import { ThemeContext } from "../context/ThemeContext";
import adminDark from "../assets/admin--dark.png";
import adminLight from "../assets/admin--light.png";
import dateDark from "../assets/date--dark.png";
import dateLight from "../assets/date--light.png";
import tagDark from "../assets/tag--dark.png";
import tagLight from "../assets/tag--light.png";
import arrowLeft from "../assets/arrow-left.png";
import arrowRight from "../assets/arrow-right.png";
import searchDark from "../assets/search--dark.png";
import banner from "../assets/blog--banner.jpg";

export default function Blog() {
  const { blog } = useContext(BlogContext);

  const latestBlog = blog.slice(0, 5);
  console.log(blog);
  const { theme } = useContext(ThemeContext);
  const [currentPage, setCurrentPage] = useState(1);

  const postsPerPage = 3;
  const totalPages = Math.ceil(blog.length / postsPerPage);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blog.slice(indexOfFirstPost, indexOfLastPost);

  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  const [categoryCounts, setCategoryCounts] = useState({});

  useEffect(() => {
    const counts = {};
    blog.forEach((data) => {
      if (data.category in counts) {
        counts[data.category]++;
      } else {
        counts[data.category] = 1;
      }
    });
    setCategoryCounts(counts);
  }, [blog]);

  return (
    <>
      <div className="relative h-[316px]">
        <img src={banner} alt="" className="w-full h-full object-cover" />
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col justify-center">
          <h1 className="text-5xl font-playfair">Blog</h1>
        </div>
      </div>
      <div className="flex flex-col md:flex-row py-20 m-auto w-11/12 md:w-10/12 gap-10">
        <div className="w-full m-auto grid grid-cols-1 gap-10 lg:w-1/2">
          {currentPosts.map((data, index) => (
            <div key={index}>
              <img
                src={data.image}
                alt=""
                className="w-[817px] object-cover h-[400px] rounded-lg"
              />
              <div className="flex my-2">
                <div className="flex items-center mr-4">
                  <img
                    src={theme === "dark" ? adminLight : adminDark}
                    alt=""
                    className="mr-2 w-4"
                  />
                  <p className="text-xs text-gray-500 dark:text-white">
                    {data.author}
                  </p>
                </div>
                <div className="flex items-center mr-4">
                  <img
                    src={theme === "dark" ? dateLight : dateDark}
                    alt=""
                    className="mr-2 w-4"
                  />
                  <p className="text-xs text-gray-500 dark:text-white">
                    {data.date}
                  </p>
                </div>
                <div className="flex items-center">
                  <img
                    src={theme === "dark" ? tagLight : tagDark}
                    alt=""
                    className="mr-2 w-4"
                  />
                  <p className="text-xs text-gray-500 dark:text-white">
                    {data.category}
                  </p>
                </div>
              </div>
              <h1 className="text-2xl py-4 dark:text-white">{data.title}</h1>
              <p className="text-gray-500 dark:text-white">{data.content}</p>
              <button className="pb-2 border-b-2 border-black my-8 dark:text-white dark:border-white">
                Read More
              </button>
            </div>
          ))}
          <div className="flex justify-center items-center -translate-y-10">
            {currentPage > 1 && (
              <img
                src={arrowLeft}
                alt="arrow left"
                className="w-5 h-5 cursor-pointer"
                onClick={prevPage}
              />
            )}
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i}
                onClick={() => setCurrentPage(i + 1)}
                className={`mx-2 px-4 py-2 rounded-full ${
                  i + 1 === currentPage
                    ? "bg-orange-400 text-white"
                    : " text-black dark:text-white"
                }`}
              >
                {i + 1}
              </button>
            ))}
            {currentPage < totalPages && (
              <img
                src={arrowRight}
                alt="arrow right"
                className="w-5 h-5 cursor-pointer"
                onClick={nextPage}
              />
            )}
          </div>
        </div>
        <div className="w-11/12 m-auto md:w-1/3">
          <div className="flex items-center border rounded-lg  py-2 px-4 bg-white">
            <input type="text" className="focus:outline-none flex-1" />
            <img src={searchDark} alt="" className="w-5" />
          </div>
          <div className="my-8">
            <h1 className="text-xl py-4 dark:text-white">Categories</h1>
            {Object.entries(categoryCounts).map(([category, count]) => (
              <div
                key={category}
                className="py-4 flex items-center justify-between"
              >
                <p className="text-sm text-gray-500 dark:text-white">
                  {category}
                </p>
                <p className="text-sm text-gray-500 dark:text-white">{count}</p>
              </div>
            ))}
          </div>
          <div>
            <h1 className="py-4 text-xl dark:text-white">Recent Post</h1>
            <div className="grid grid-cols-1 gap-4">
              {latestBlog.map((data, index) => (
                <div className="flex" key={index}>
                  <div className="mr-2 w-[100px] h-[100px]">
                    <img
                      src={data.image}
                      alt=""
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <p className="text-xs dark:text-white">{data.title}</p>
                    <p className="text-xs text-gray-500 dark:text-white">
                      {data.date}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
