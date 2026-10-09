import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

interface news {
    id: string,
    category: string,
    title: string,
    description: string,
    imageUrl: string,
    imageAlt: string,
}

const MainNews = ({ news }: { news: news[] }) => {
    const [firstNews, ...otherNews] = news;

    return (
        <div className='flex flex-col gap-3 md:flex-row'>
            <Link href={`/news/${firstNews.id}`} className='min-w-0 md:w-1/2'>
                <div className="group card w-full bg-base-100 shadow-sm">
                    <figure className='overflow-hidden'>
                        <Image
                            height={600}
                            width={600}
                            src={firstNews.imageUrl}
                            alt={firstNews.imageAlt}
                            sizes="(min-width: 768px) 50vw, 100vw"
                            priority
                            className="aspect-video w-full object-cover transition duration-500 group-hover:scale-105 md:aspect-auto md:h-55"
                        />
                    </figure>
                    <div className="card-body p-4 sm:p-6">
                        <p className='font-semibold text-red-600'>{firstNews.category}</p>
                        <h2 className="card-title text-lg group-hover:text-red-700 sm:text-xl">{firstNews.title}</h2>
                        <p className='text-sm sm:text-base'>
                            {firstNews.description}
                        </p>
                    </div>
                </div>
            </Link>
            <div className='flex min-w-0 flex-col gap-3 rounded-2xl border border-gray-300 md:w-1/2'>
                {otherNews.slice(1, 6).map(n =>
                    <Link href={`/news/${n.id}`} key={n.id}
                        className='group border-t border-gray-300 p-2 font-bold first:border-t-0'
                    >
                        <p className='text-[12px] font-bold text-red-600'>{n.category}</p>
                        <h2 className='text-sm group-hover:text-red-700 sm:text-[15px]'>{n.title}</h2>
                    </Link>
                )}
            </div>
        </div>
    );
};

export default MainNews;