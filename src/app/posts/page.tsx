import Link from "next/link";

type Post = {
  id: number;
  title: string;
};

type Data = {
  posts: Post[];
};

export default async function PostsPage() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data: Data = await response.json();

  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>

      <ul>
        {data.posts.map((post: Post) => (
          <li key={post.id} className="text-left  mb-3">
            <Link href={`/posts/${post.id}`} className="text-2xl ">
              {post.title}
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
