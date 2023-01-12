import Link from "next/link";
import React from "react";
import { withRouter } from "next/router";
import DigitalImaging from "./digitalImaging";
import UiDesign from "./uiDesign";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faCompassDrafting } from "@fortawesome/free-solid-svg-icons";

export default withRouter(Tab);

function Tab({ router }) {
  const {
    query: { tab },
  } = router;

  const isTabOne = tab === "1" || tab == null;
  const isTabTwo = tab === "2";

  return (
    <>
      <div
        id="tab"
        className=" flex sticky top-0 z-10 backdrop-blur-sm bg-white/80"
      >
        <Item selected={isTabOne} href={{ pathname: "/", query: { tab: "1" } }}>
          <FontAwesomeIcon icon={faPalette} className="h-4" />
        </Item>
        <Item selected={isTabTwo} href={{ pathname: "/", query: { tab: "2" } }}>
          <FontAwesomeIcon icon={faCompassDrafting} className="h-4" />
        </Item>
      </div>
      <div>
        {isTabOne && <DigitalImaging />}
        {isTabTwo && <UiDesign />}
      </div>
    </>
  );
}

function Item({ children, href, selected }) {
  return (
    <Link
      href={href}
      className=" flex flex-grow justify-center uppercase text-xs tracking-widest py-4 bg-transparent hover:bg-neutral-200 border-b-2 transition-all"
      style={{
        color: selected ? "#000" : "#a3a3a3",
        borderColor: selected ? "#000" : "transparent",
      }}
    >
      {children}
    </Link>
  );
}
