import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

interface news {
    id: string,
    category: string,
    title: string,
    description: string,
    imageUrl: string,
    imageAlt: string,
}

const NewsCard = ({ news }: { news: news }) => {
    if (!news) {
        notFound()
    }
    return (
        <Link href={`/news/${news.id}`} className="block h-full">
            <div className="group flex h-full flex-col overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm transition duration-300 hover:shadow-lg sm:rounded-2xl">
                {/* Image */}
                <figure className="aspect-video w-full shrink-0 overflow-hidden">
                    <Image
                        height={600}
                        width={600}
                        src={news.imageUrl}
                        alt={news.imageAlt}
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    />
                </figure>

                {/* Content */}
                <div className="flex-1 p-4 sm:p-5">

                    {/* Category */}
                    <p className="mb-1.5 text-xs font-semibold text-red-600 sm:mb-2 sm:text-sm">
                        {news.category}
                    </p>

                    {/* Title */}
                    <h2 className="mb-2 line-clamp-2 text-lg font-bold leading-snug text-gray-900 transition duration-200 group-hover:text-red-700 sm:mb-3 sm:text-xl sm:leading-7">
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

export default NewsCard;