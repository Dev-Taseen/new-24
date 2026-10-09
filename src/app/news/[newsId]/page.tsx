import ArticleContent from '@/app/components/ArticleContent';
import { notFound } from 'next/navigation';
import React from 'react';

const DetailedNews = async({params}:{params:{newsId:string}}) => {
    const {newsId} = await params;
    const res = await fetch(`https://news-api-v2.vercel.app/api/article/${newsId}`);
    const data = await res.json();
    const news = data.data;
    if (!news) {
      notFound();
    }
    console.log(news);
    return (
        <div>
            <ArticleContent news={news} />;
        </div>
    );
};

export default DetailedNews;