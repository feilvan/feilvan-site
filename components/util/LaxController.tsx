import { useRouter } from "next/router";
import { useEffect } from "react";
import { useParallaxController } from "react-scroll-parallax";

export default function LaxController() {
  useUpdateControllerOnRouteChange();
  return null;
}

function useUpdateControllerOnRouteChange() {
  const location = useRouter();
  const parallaxController = useParallaxController();

  useEffect(() => {
    parallaxController.update();
  });
}
