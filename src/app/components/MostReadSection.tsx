import React from 'react';

interface Itypes {
    id: string,
    title: string,
    rank: number

}

const MostReadSection = async () => {
    const res = await fetch("https://news-api-v2.vercel.app/api/news/most-read");
    const data = await res.json();
    const datas: Itypes[] = data.data;
    console.log("most read", datas)
    return (
        <div className='border border-gray-300 p-3 rounded-2xl'>
            <h2 className='font-bold text-[18px] m-1.5'>সর্বাধিক পঠিত</h2>
            <div className='grid gap-3 '>
                {
                    datas.map(n => <div key={n.id}
                        className='flex gap-3 hover:text-red-800 cursor-pointer'
                    >
                        <span className='text-[22px] font-bold text-red-400'>{n.rank}</span>
                        <h2 className='text-[14px] font-semibold'>{n.title}</h2>
                    </div>)
                }
            </div>
        </div>
    );
};

export default MostReadSection;