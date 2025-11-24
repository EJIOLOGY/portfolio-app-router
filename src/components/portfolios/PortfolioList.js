import { getPortfolios } from "@/utils/fetch";
import Image from "next/image";

export async function PortfolioList() {
  const { data: portfolios = [] } = await getPortfolios();
  return (
    <>
      <div className="content-section-title">Portfolios</div>
      <div className="content-list">
        {portfolios.map((portfolio) => (
          <div className="content-item" key={portfolio.id}>
            <div className="content-item_image-container">
              <Image
                src={portfolio.coverImage}
                alt={portfolio.title}
                width={300}
                height={100}
              />
            </div>
            <div className="content-item_header">
              <div>{portfolio.title}</div>
              <div>{portfolio.description}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
