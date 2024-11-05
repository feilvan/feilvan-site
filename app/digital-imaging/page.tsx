import Link from "@/components/link";

import Card from "./card";
import posts from "./posts";

export default function DigitalImaging() {
  return (
    <>
      <div className="grid grid-cols-2 gap-1 p-1 sm:gap-2 sm:p-2">
        {posts.map((post) => (
          <Card
            key={post.date}
            date={post.date}
            link={post.link}
            image={post.image}
          />
        ))}
      </div>
      <div className="my-4 text-center">
        More on{" "}
        <Link
          href="https://www.instagram.com/feilvan"
          external
          className="underline"
        >
          Instagram
        </Link>
      </div>
    </>
  );
}
