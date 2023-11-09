import dayjs from "dayjs";
import Link from "next/link";

type Props = {
  readTimeInMinutes: number;
  title: string;
  slug: string;
  publishedAt: string;
  views: number;
};

const Post: React.FC<Props> = (props) => {
  const { publishedAt, readTimeInMinutes, slug, title, views } = props;

  return (
    <div className="cursor-default py-4 border-b border-b-gray-700">
      <h3 className="text-lg font-bold w-fit" title={title}>
        <Link href={`/blog/${slug}`}>{title}</Link>
      </h3>
      <p className="text-gray-500">
        <span title={dayjs(publishedAt).format("DD MMMM YYYY HH:mm")}>
          {dayjs(publishedAt).format("MMM DD YYYY")}
        </span>
        <span className="mx-2">|</span>
        {readTimeInMinutes} min read
        <span className="mx-2">|</span>
        {views} views
      </p>
    </div>
  );
};

export default Post;
