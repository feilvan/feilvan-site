import style from "./tab.module.css";
import Link from "next/link";
import React from "react";
import { withRouter } from "next/router";
import DigitalImaging from "./digitalImaging";
import AiArt from "./aiArt";
import UiDesign from "./uiDesign";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPalette } from "@fortawesome/free-solid-svg-icons";
import { faCompassDrafting } from "@fortawesome/free-solid-svg-icons";
import { faRobot } from "@fortawesome/free-solid-svg-icons";

export default withRouter(Tab);

function Tab({ router }) {
  const {
    query: { tab },
  } = router;

  const isTabOne = tab === "1" || tab == null;
  const isTabTwo = tab === "2";
  const isTabThree = tab === "3";

  return (
    <>
      <div>
        {isTabOne && <DigitalImaging />}
        {isTabTwo && <AiArt />}
        {isTabThree && <UiDesign />}
      </div>
      <div id="tab" className={style.tab}>
        <Item
          title="Digital Imaging"
          selected={isTabOne}
          href={{ pathname: "/", query: { tab: "1" } }}
        >
          <FontAwesomeIcon icon={faPalette} className="w-5" />
        </Item>
        <Item
          title="AI Art"
          selected={isTabTwo}
          href={{ pathname: "/", query: { tab: "2" } }}
        >
          <FontAwesomeIcon icon={faRobot} className="w-5" />
        </Item>
        <Item
          title="UI Design"
          selected={isTabThree}
          href={{ pathname: "/", query: { tab: "3" } }}
        >
          <FontAwesomeIcon icon={faCompassDrafting} className="w-5" />
        </Item>
      </div>
    </>
  );
}

function Item({ children, href, selected, title }) {
  return (
    <Link
      href={href}
      className={`${style.item} ${
        selected
          ? " bg-neutral-900 text-neutral-200 shadow-md"
          : "bg-transparent text-neutral-600 hover:bg-neutral-400/20 hover:text-neutral-600"
      }`}
    >
      <span className=" my-auto">{children}</span>
      <span
        className={` my-auto text-xs tracking-widest uppercase ${
          selected ? "block" : "hidden"
        }`}
      >
        {title}
      </span>
    </Link>
  );
}
