import PostItem from "./PostItem";

export default function PostsList({ posts, count }) {
  if (count) {
    posts = posts.slice(0, count);
  }
  return (
    <div className='container mx-auto max-w-5xl py-4'>
      {posts.map((post) => {
        return (
          <div key={post.id} className='my-8'>
            <PostItem post={post} />
          </div>
        );
      })}
    </div>
  );
}
