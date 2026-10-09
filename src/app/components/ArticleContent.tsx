import Image from "next/image";
import { newsType } from "@/app/types/news";

type ArticleContentProps = {
    news: newsType;
};

const ArticleContent = ({ news }: ArticleContentProps) => {
    const date = new Date(news.firstPublished);

    const parts = new Intl.DateTimeFormat("bn-BD", {
        timeZone: "Asia/Dhaka",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
    }).formatToParts(date);

    const day = parts.find((p) => p.type === "day")?.value;
    const month = parts.find((p) => p.type === "month")?.value;
    const year = parts.find((p) => p.type === "year")?.value;
    const hour = parts.find((p) => p.type === "hour")?.value;
    const minute = parts.find((p) => p.type === "minute")?.value;
    const period = parts.find((p) => p.type === "dayPeriod")?.value;

    const formattedDate =
        `${day} ${month}, ${year} এ ${hour}:${minute} ${period}`;

    return (
        <main className="mx-auto max-w-4xl px-4 py-6 sm:py-10">

            {/* Tags */}
            <div className="mb-4 flex flex-wrap gap-2 sm:mb-5">
                {news.tags.map((tag) => (
                    <span
                        key={tag}
                        className="badge badge-primary badge-outline"
                    >
                        {tag}
                    </span>
                ))}
            </div>

            {/* Title */}
            <h1 className="mb-4 break-words text-2xl font-bold leading-snug sm:mb-6 sm:text-4xl md:text-5xl md:leading-tight">
                {news.title}
            </h1>

            {/* Description */}
            <p className="mb-5 text-base leading-relaxed text-gray-600 sm:mb-6 sm:text-lg md:text-xl">
                {news.description.blocks[0]?.model.blocks[0]?.model.text}
            </p>

            {/* Author + Date */}
            <div className="mb-6 border-y py-3 text-xs text-gray-600 sm:mb-8 sm:py-4 sm:text-sm">
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
                    <span>
                        লিখেছেন:{" "}
                        <strong>{news.byline[0]?.name}</strong>
                    </span>

                    <span className="hidden sm:inline">•</span>

                    <span>{formattedDate}</span>

                    <span className="hidden sm:inline">•</span>

                    <span>{news.wordCount} শব্দ</span>
                </div>
            </div>

            {/* Main Image */}
            <figure className="mb-6 sm:mb-8">
                <Image
                    src={news.imageUrl}
                    alt={news.title}
                    width={1200}
                    height={675}
                    sizes="(min-width: 896px) 896px, 100vw"
                    className="h-auto w-full object-cover"
                    priority
                />

                {news.body[0]?.type === "image" &&
                    news.body[0].caption && (
                        <figcaption className="mt-2 text-xs text-gray-500 sm:text-sm">
                            {news.body[0].caption}
                        </figcaption>
                    )}
            </figure>

            {/* Article */}
            <ArticleBody news={news} />

            {/* Source */}
            <div className="mt-8 border-t pt-4 sm:mt-10 sm:pt-6">
                <p className="text-xs text-gray-500 sm:text-sm">
                    সূত্র: {news.source}
                </p>
            </div>

        </main>
    );
};

const ArticleBody = ({ news }: { news: newsType }) => {
    return (
        <article className="prose max-w-none sm:prose-lg">

            {news.body.map((item, index) => {

                if (item.type === "text") {
                    return (
                        <p
                            key={index}
                            className="mb-5 break-words text-base leading-7 sm:mb-6 sm:text-lg sm:leading-8"
                        >
                            {item.text}
                        </p>
                    )
                }

                if (item.type === "subheading") {
                    return (
                        <h2
                            key={index}
                            className="mb-4 mt-8 text-xl font-bold sm:mb-5 sm:mt-10 sm:text-2xl md:text-3xl"
                        >
                            {item.text}
                        </h2>
                    )
                }

                if (item.type === "image") {
                    return (
                        <figure
                            key={index}
                            className="my-6 sm:my-8"
                        >
                            <Image
                                src={item.url!}
                                alt={item.altText || ""}
                                width={item.width || 1024}
                                height={item.height || 600}
                                sizes="(min-width: 896px) 896px, 100vw"
                                className="h-auto w-full object-cover"
                            />

                            {item.caption && (
                                <figcaption className="mt-2 text-xs text-gray-500 sm:text-sm">
                                    {item.caption}
                                </figcaption>
                            )}
                        </figure>
                    );
                }

                return null
            })}

        </article>
    )
}

export default ArticleContent