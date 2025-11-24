import { getBlogs } from "@/utils";
import Image from "next/image";

export function BlogList() {
  const blogs = getBlogs();
  return (
    <>
      <div className="content-section-title">Blogs</div>
      {blogs.map((blog) => (
        <div key={blog}>{blog}</div>
      ))}
      <div className="content-list ">
        {/* {blogs.map((blog) => (
          <div className="content-item" key={blog.id}>
            <div className="content-item_image-container">
              <Image
                src={blog.coverImage}
                alt={blog.title}
                width={300}
                height={100}
              />
            </div>{" "}
            <div className="content-item_header">
              <div>{blog.id}</div>
              <div>{blog.slug}</div>
              <div>{blog.title}</div>
              <div>{blog.description}</div>
            </div>
          </div>
        ))} */}
      </div>
    </>
  );
}
