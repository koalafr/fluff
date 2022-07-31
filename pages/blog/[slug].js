import Page from "../../components/Page/Page";
import PostItem from "../../components/Posts/PostItem";
import Title from "../../components/Page/Title";
import Button from "../../components/Common/Button";
import { useRouter } from "next/router";
import { getTranslation } from "../../lib/locales";
import { HiOutlineRefresh } from "react-icons/hi";

export default function Post({ post }) {
  const router = useRouter();
  const tr = getTranslation(router);
  if (!post) {
    // dynamic loading
    return (
      <Page>
        <div className='text-8xl text-me-base'>
          <HiOutlineRefresh />
        </div>
      </Page>
    );
  }
  return (
    <Page>
      <section className='container mx-auto min-h-screen max-w-screen-lg flex-row'>
        <div className='container mx-auto my-8 rounded-xl bg-me-inverted shadow-lg shadow-me-light'>
          <div className='px-8 pt-2'>
            <Title title={post.title} description={"Author n°" + post.userId} />
          </div>
          <PostItem post={post} full={true} />
        </div>
        <br />
        <Button href='/blog'>&larr; {tr.post.return_to_blog}</Button>
      </section>
    </Page>
  );
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}

// pages/blog/[slug].js
export async function getStaticPaths() {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_limit=10`
  );
  const posts = await res.json();
  const paths = posts.map((post) => {
    const slug = post.id.toString();
    return {
      params: { slug },
    };
  });
  return {
    paths,
    fallback: true,
  };
}
