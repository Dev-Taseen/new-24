import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"
import React from 'react';
import Link from "next/link";
interface htypes {
    id: string
    title: string
}

const Marquee = async () => {

    const res = await fetch("https://news-api-v2.vercel.app/api/news?limit=10");
    const data = await res.json();
    const headlines: htypes[] = data?.data ?? [];

    if (headlines.length === 0) return null;

    return (
        <div className="sticky top-0 z-10 mt-3 bg-red-700 text-[11px] text-white sm:mt-4 sm:text-[12px] md:text-sm">
            <div className="mx-auto flex max-w-6xl items-stretch">
                <h2 className="flex shrink-0 items-center whitespace-nowrap bg-red-800 px-3 py-1.5 font-bold sm:px-5 sm:py-1">
                    সর্বশেষ
                </h2>
                <div className="min-w-0 flex-1 overflow-hidden">
                    <MarqueeText direction="right" duration={10} className="py-1.5 sm:py-1">
                        {
                            headlines.map(n =>
                                <Link key={n.id} href={`/news/${n.id}`}>
                                    <span className="whitespace-nowrap">
                                        <span className="pb-2 hover:underline">{n.title}</span>
                                        <span className="mx-3 sm:mx-5">•</span>
                                    </span>
                                </Link>
                            )
                        }
                    </MarqueeText>
                </div>
            </div>
        </div>
    );
};

export default Marquee;