import Page from "../../components/Page/Page";
import Title from "../../components/Page/Title";
import Button from "../../components/Common/Button";
import PostsList from "../../components/Posts/PostsList";
import { useState } from "react";

// local imports
import { useRouter } from "next/router";
import { getTranslation } from "../../lib/locales";

export default function Blog({ posts }) {
  const [postList, setPostList] = useState(posts);
  const router = useRouter();
  const tr = getTranslation(router);
  const loadMore = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/posts?_limit=10&&_start=" +
        postList.length
    );
    const posts = await res.json();
    setPostList((value) => [...value, ...posts]);
  };

  return (
    <Page>
      <div className='container mx-auto max-w-screen-lg'>
        <div className='container'>
          <Title
            title={tr.taglines.blog.title}
            description={tr.taglines.blog.description}
          />
          <PostsList posts={postList} />
        </div>
      </div>

      <span onClick={loadMore}>
        <Button>&darr; {tr.post.load_more} &darr;</Button>
      </span>
    </Page>
  );
}

export async function getStaticProps() {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=10"
  );
  const posts = await res.json();
  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  };
}
