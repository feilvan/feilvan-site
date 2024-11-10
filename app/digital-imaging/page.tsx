import Link from "@/components/link";

import CardDialog from "./dialog";
import posts from "./posts";

export default function DigitalImaging() {
  return (
    <>
      <div className="grid grid-cols-2 gap-1 sm:gap-2">
        {posts.map((post) => (
          <CardDialog
            key={post.date}
            date={post.date}
            link={post.link}
            image={post.image}
          />
        ))}
      </div>
      <div className="my-4 text-center">
        More on{" "}
        <Link href="https://www.instagram.com/feilvan" external>
          Instagram
        </Link>
      </div>
    </>
  );
}
