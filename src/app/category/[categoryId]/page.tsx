import NewsCard from "@/app/components/NewsCard";

interface newsType {
    id: string,
    category: string,
    title: string,
    description: string,
    imageUrl: string,
    imageAlt: string,
}
type Props = {
    params: Promise<{
        categoryId: string;
    }>;
};

const CategoryNews = async ({ params }: Props) => {
    const { categoryId } = await params;

    const res = await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`);
    const data = await res.json()
    const categoryNews: newsType[] = data.data

    return (
        <div className='mx-auto max-w-6xl'>
            <section className="m-3 sm:m-4">
                <h2 className="my-3 border-b-2 border-red-700 pb-1 text-xl font-bold sm:text-2xl">
                    {data.title}
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-3">
                    {
                        categoryNews.map(news =>
                            <NewsCard key={news.id} news={news} />
                        )
                    }
                </div>
            </section>
        </div>
    );
};

export default CategoryNews;