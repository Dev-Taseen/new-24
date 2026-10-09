import MainNews from "@/app/components/MainNews";
import MostReadSection from "@/app/components/MostReadSection";
import OtherNews from "@/app/components/OtherNews";
import { notFound } from "next/navigation";

interface Itypes {
  curationId: string,
  title: string,
  articles: {
    id: string,
    category: string,
    title: string,
    description: string,
    imageUrl: string,
    imageAlt: string,
  }[]
}


export default async function Home() {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const section = data?.data
  if (!section) {
    notFound()
  }
  const mainnews = section[0].articles
  const otherNews: Itypes[] = section.slice(1);

  return (
    <div className="mx-auto max-w-6xl">

      {/* news section */}
      <section className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-3">
        <div className="m-3 min-w-0 lg:col-span-2">
          {/* main news */}
          <MainNews news={mainnews} />

          <div className="mt-5 grid gap-5">
            {
              otherNews.map(news => <div key={news.curationId}>
                <h2 className="border-b-2 border-red-600 pb-1 text-base font-semibold sm:text-lg"> {news.title}</h2>
                <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-2 md:grid-cols-3">
                  {
                    news.articles.map(on =>
                      <OtherNews key={on.id} news={on} />
                    )
                  }
                </div>
              </div>)
            }
          </div>
        </div>
        <div className="m-3 min-w-0 lg:col-span-1">
          {/* popular news */}
          <MostReadSection />
        </div>
      </section>

    </div>
  );
}