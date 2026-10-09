import Link from 'next/link';
import { notFound } from 'next/navigation';
import React from 'react';

export interface navType {
    slug: string,
    title: string,
    topicId: string,
    url: string,
    scrapable: boolean
}

const Navlinks = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/categories");
    const data = await res.json();
    const navs: navType[] = data?.data;
    if (!navs) {
        notFound()
    }
    const filteredNav = navs.filter(element => element.scrapable);
    return (
        <nav className='mt-3 border-b border-gray-200 sm:mt-4'>
            <div className='mx-auto flex max-w-6xl snap-x gap-4 overflow-x-auto px-4 pb-2 text-sm [scrollbar-width:none] sm:gap-5 sm:text-base md:flex-wrap md:justify-center md:overflow-visible [&::-webkit-scrollbar]:hidden'>
                <Link href={'/'} className='shrink-0 snap-start whitespace-nowrap hover:text-red-800'>হোম</Link>
                {
                    filteredNav.map((n, i) =>
                        <Link
                            key={i}
                            href={`/category/${n.slug}`}
                            className='shrink-0 snap-start whitespace-nowrap hover:text-red-800'
                        >
                            {n.title}
                        </Link>
                    )
                }
            </div>
        </nav>
    );
};

export default Navlinks;