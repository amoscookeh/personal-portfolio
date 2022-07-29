import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components
import Home from "./components/Home";
import Blog from "./components/blogs/Blog";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/blog" element={<Blog />}>
          <Route path=":blogId" element={<Blog />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
