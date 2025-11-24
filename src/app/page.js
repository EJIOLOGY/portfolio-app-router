import { BlogList } from "@/components/blogs/blogList";
import { PortfolioList } from "@/components/portfolios/PortfolioList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <Suspense fallback={<div>Loading Blogs...</div>}>
        <BlogList />
      </Suspense>
      <hr></hr>
      <Suspense fallback={<div>Loading Portfolios...</div>}>
        <PortfolioList />
      </Suspense>
    </>
  );
}
