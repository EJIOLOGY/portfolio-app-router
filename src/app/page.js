import { BlogList } from "@/components/blogs/blogList";
import { PortfolioList } from "@/components/portfolios/PortfolioList";
import { Suspense } from "react";

export default async function Home() {
  return (
    <>
      <BlogList />

      <hr></hr>

      <PortfolioList />
    </>
  );
}
