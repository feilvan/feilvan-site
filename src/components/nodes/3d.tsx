import Folder from "../folder";

const items = [
  { title: "210904", image: "/images/3d/210904.webp" },
  { title: "210908", image: "/images/3d/210908.webp" },
  { title: "210912", image: "/images/3d/210912.webp" },
  { title: "210914", image: "/images/3d/210914.webp" },
  { title: "210919", image: "/images/3d/210919.webp" },
  { title: "210922", image: "/images/3d/210922.webp" },
  { title: "210930", image: "/images/3d/210930.webp" },
  { title: "211002", image: "/images/3d/211002.webp" },
  { title: "211105", image: "/images/3d/211105.webp" },
  { title: "211128", image: "/images/3d/211128.webp" },
];

export default function ThreeD() {
  return (
    <div class="p-4">
      <Folder items={items} />
    </div>
  );
}
