import Link from "next/link";

type Post = {
  id: number;
  title: string;
};

type Data = {
  posts: Post[];
};

export default async function PostLists() {
  const response = await fetch("https://dummyjson.com/posts?limit=10");
  const data: Data = await response.json();
  return (
    <ul>
      {data.posts.map((post: Post) => (
        <li key={post.id} className="text-left  mb-3">
          <Link href={`/posts/${post.id}`} className="text-2xl ">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
