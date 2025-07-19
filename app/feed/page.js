import Posts from '@/components/posts';
import { getPosts } from '@/lib/posts';


export const metadata = {
  title: 'Feed - Posts App',
  description: 'Explore posts from various users.',
}


export default async function FeedPage() {
  const posts = await getPosts();
  return (
    <>
      <h1>All posts by all users</h1>
      <Posts posts={posts} />
    </>
  );
}
