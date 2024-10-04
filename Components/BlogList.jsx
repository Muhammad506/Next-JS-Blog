import { useState } from "react";
import BlogItem from "./BlogItem";

const BlogList = () => {
  const blogs = [
    {
      image: "/card1.jpg",
      title: "The Future of Tech",
      description: "An insight into the advancements in technology.",
      category: "Technology",
    },
    {
      image: "/card2.webp",
      title: "StartUp Tips",
      description: "Tips to help you launch your startup successfully.",
      category: "StartUp",
    },
    {
      image: "/card3.jpg",
      title: "A Balanced Life",
      description: "How to manage a balanced lifestyle with work.",
      category: "Life Style",
    },
  ];

  const [menu, setMenu] = useState("All");

  return (
    <main>
      <div className="flex justify-center text-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          All
        </button>
        <button
          className={
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
          onClick={() => setMenu("Technology")}
        >
          Technology
        </button>
        <button
          className={
            menu === "StartUp" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
          onClick={() => setMenu("StartUp")}
        >
          StartUp
        </button>
        <button
          className={
            menu === "Life Style"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
          onClick={() => setMenu("Life Style")}
        >
          Life Style
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {blogs.filter((item)=>menu==="All"?true:item.category===menu).map((blog, index) => (
          <BlogItem
            key={index}
            title={blog.title}
            description={blog.description}
            category={blog.category}
            image={blog.image}
          />
        ))}
      </div>
    </main>
  );
};

export default BlogList;
