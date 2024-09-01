import Form from "@/components/form";

export default function Page() {
  return (
    <main className=" items-center text-center pt-16">
      <h1 className="text-4xl md:text-5xl font-bold mb-5">Create post</h1>
      <div className="flex flex-col items-center">
        <div className=" w-3/4 md:w-1/2  ">
          <Form />
        </div>
      </div>
    </main>
  );
}
