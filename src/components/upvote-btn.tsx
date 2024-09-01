"use client";
import { useState } from "react";
import { Button } from "./ui/button";

export default function UpvoteBtn() {
  const [upvoteCount, setUpvoteCount] = useState(0);
  console.log("upvoteCount", upvoteCount);
  return (
    <Button
      onClick={() => {
        setUpvoteCount(upvoteCount + 1);
      }}
    >
      {upvoteCount}
      Upvote
    </Button>
  );
}
