import prisma from "@/lib/db";
import Link from "next/link";

export default async function PostLists() {
  const posts = await prisma.post.findMany();

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id} className="text-left  mb-3">
          <Link href={`/posts/${post.id}`} className="text-2xl ">
            {post.title}
          </Link>
        </li>
      ))}
    </ul>
  );
}
