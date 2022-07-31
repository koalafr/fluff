import Link from "next/link";
import Tag from "./../Common/Tag";
import { useRouter } from "next/router";
import { getTranslation } from "../../lib/locales";

export default function PostItem({ post, full }) {
  const router = useRouter();
  const tr = getTranslation(router);
  return (
    <>
      <div
        className={
          (full ? "mt-8 " : "md:flex ") +
          "container flex-1  items-center space-x-4 rounded-2xl bg-me-inverted p-8 text-justify shadow-lg shadow-me-light"
        }
      >
        {full ? (
          <div className='mx-auto h-48 w-72 shrink-0 cursor-pointer rounded-xl bg-me-primary shadow-lg shadow-me-light hover:bg-me-accent md:h-[320px] md:w-11/12'></div>
        ) : (
          <Link href={"/blog/" + post.id}>
            <div className='mx-auto h-48 w-72 shrink-0 cursor-pointer rounded-xl bg-me-primary shadow-lg shadow-me-light hover:bg-me-accent'></div>
          </Link>
        )}

        <div className='py-4 text-me-base'>
          <h4 className='py-4 text-2xl font-bold'>
            <Link href={"/blog/" + post.id}>
              <a className='cursor-pointer font-lora hover:text-me-accent hover:underline'>
                {!full &&
                  (post.title
                    ? post.id + " - " + post.title
                    : tr.post.no_title)}
              </a>
            </Link>
          </h4>
          <p className='text-me-secondary'>
            {post.date ? post.date : tr.post.no_date}
            {" - "}
            {post.author ? post.author : tr.post.no_author}
          </p>
          {full ? (
            <p className='my-4 text-xl text-me-base'>
              {post.body ? post.body : tr.post.no_content}
            </p>
          ) : (
            <span>
              <p className='text-me-baseline-clamp-3 my-4 text-xl'>
                {post.body ? post.body : tr.post.no_content}
              </p>
              <Link href={"/blog/" + post.id}>
                <a className='cursor-pointer text-lg uppercase text-me-accent hover:text-me-secondary'>
                  {" "}
                  [{tr.post.read_full}]
                </a>
              </Link>
            </span>
          )}
          <div className='mt-4 flex gap-2'>
            <Tag>{tr.post.no_tag}</Tag>
          </div>
        </div>
      </div>
    </>
  );
}
