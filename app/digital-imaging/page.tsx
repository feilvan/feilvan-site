import Card from "./card";
import posts from "./posts";

export default function DigitalImaging() {
  return (
    <div className="grid w-full max-w-screen-lg grid-cols-2 gap-2 p-2">
      {posts.map((post) => (
        <Card
          key={post.date}
          date={post.date}
          link={post.link}
          image={post.image}
        />
      ))}
    </div>
  );
}
