import { createContext, useState } from "react";

import { blogData } from "../blogData";

const BlogContext = createContext();

const BlogContextProvider = ({ children }) => {
  const blog = blogData;
  const value = {
    blog,
  };
  return <BlogContext.Provider value={value}>{children}</BlogContext.Provider>;
};

export default BlogContextProvider;

export { BlogContext, BlogContextProvider };
