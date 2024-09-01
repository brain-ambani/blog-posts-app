import { createPost } from "@/actions/actions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Form() {
  return (
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
  );
}
