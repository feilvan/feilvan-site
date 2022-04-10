import {
  MouseParallaxContainer,
  MouseParallaxChild,
} from "react-parallax-mouse";

export default function LaxButton({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-max h-max">
      <MouseParallaxContainer inverted resetOnLeave>
        <MouseParallaxChild
          factorX={0.1}
          factorY={0.1}
          className="border p-4 rounded-full overflow-visible"
        >
          <div>{children}</div>
        </MouseParallaxChild>
      </MouseParallaxContainer>
    </div>
  );
}
