import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface news {
    id: string,
    category: string,
    title: string,
    description: string,
    imageUrl: string,
    imageAlt: string,
}

const OtherNews = ({ news }: { news: news }) => {
    if (!news) {
        notFound();
    }
    return (
        <Link href={`/news/${news.id}`} className="block h-full min-w-0">
            <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-lg sm:rounded-2xl">
                {/* Image */}
                <figure className="aspect-video w-full shrink-0 overflow-hidden">
                    <Image
                        height={400}
                        width={500}
                        src={news.imageUrl}
                        alt={news.imageAlt}
                        sizes="(min-width: 1024px) 22vw, (min-width: 768px) 30vw, (min-width: 640px) 50vw, 100vw"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                </figure>

                {/* Content */}
                <div className="flex-1 p-3 sm:p-2">

                    {/* Category */}
                    <p className="mb-1 text-xs font-semibold text-red-600 sm:text-sm">
                        {news.category}
                    </p>

                    {/* Title */}
                    <h2 className="mb-1.5 line-clamp-2 text-base font-bold leading-snug text-gray-900 transition duration-200 group-hover:text-red-700 sm:text-lg md:text-base lg:text-lg">
                        {news.title}
                    </h2>

                    {/* Description */}
                    <p className="line-clamp-3 text-sm leading-6 text-gray-600">
                        {news.description}
                    </p>

                </div>
            </div>
        </Link>
    );
};

export default OtherNews;