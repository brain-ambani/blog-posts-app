import { createPost } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Page() {
  return (
    <main className=" items-center text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create post</h1>
      <div className="flex flex-col items-center">
        <div className=" w-3/4 md:w-1/2  ">
          <form action={createPost} className="space-y-3 mt-10">
            <Input name="title" placeholder="New post" required />
            <Textarea
              name="body"
              placeholder="Body content for new post"
              rows={5}
              required
            />
            <Button className="w-full">Submit</Button>
          </form>
        </div>
      </div>
    </main>
  );
}
