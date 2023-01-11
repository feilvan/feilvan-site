import Link from "next/link";
import React from "react";
import { withRouter } from "next/router";

export default withRouter(Tabs);

function Tabs({ router }) {
  const {
    query: { tab },
  } = router;

  const isTabOne = tab === "1" || tab == null;
  const isTabTwo = tab === "2";

  return (
    <>
      <main id="TabContainer" className=" w-80 h-80">
        <TabHead>
          <Tab selected={isTabOne}>
            <Link href={{ pathname: "/", query: { tab: "1" } }}>Tab 1</Link>
          </Tab>
          <Tab selected={isTabTwo}>
            <Link href={{ pathname: "/", query: { tab: "2" } }}>Tab 2</Link>
          </Tab>
        </TabHead>
        <TabBody>
          {isTabOne && <React.Fragment>Tab One</React.Fragment>}
          {isTabTwo && <React.Fragment>Tab Two</React.Fragment>}
        </TabBody>
      </main>
    </>
  );
}

function TabHead({ children }) {
  return (
    <main className=" border-b border-black flex bg-black">{children}</main>
  );
}

function Tab({ children, selected }) {
  return (
    <>
      <main
        className=" p-4 text-white"
        style={{ background: selected ? "#333" : "#000" }}
      >
        {children}
      </main>
    </>
  );
}

function TabBody({ children }) {
  return (
    <>
      <main className=" h-full">{children}</main>
    </>
  );
}
