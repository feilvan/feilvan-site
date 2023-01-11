import Link from "next/link";
import React from "react";
import { withRouter } from "next/router";
import DigitalImaging from "./digitalImaging";
import UiDesign from "./uiDesign";

export default withRouter(Tab);

function Tab({ router }) {
  const {
    query: { tab },
  } = router;

  const isTabOne = tab === "1" || tab == null;
  const isTabTwo = tab === "2";

  return (
    <>
      <div className=" flex">
        <Item selected={isTabOne} href={{ pathname: "/", query: { tab: "1" } }}>
          Digital Imaging
        </Item>
        <Item selected={isTabTwo} href={{ pathname: "/", query: { tab: "2" } }}>
          UI Design
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
      className=" flex flex-grow justify-center py-2 bg-transparent hover:bg-neutral-200 border-b transition-all"
      style={{
        color: selected ? "#000" : "#999",
        borderColor: selected ? "#000" : "transparent",
      }}
    >
      {children}
    </Link>
  );
}
