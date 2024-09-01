import PostLists from "@/components/posts-lists";
import { Suspense } from "react";

export default async function PostsPage() {
  return (
    <main className="text-center pt-16 px-5">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">All posts</h1>

      <Suspense fallback="loading...">
        <PostLists />
      </Suspense>
    </main>
  );
}
