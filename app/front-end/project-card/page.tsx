import { Metadata } from "next";
import { RiCalendarScheduleLine } from "react-icons/ri";
import Wrapper from "../wrapper";
import Item from "./item";
import SubItem from "./sub-item";
import ProfilePicture from "./profile-picture";

export const metadata: Metadata = {
  title: "Project Card",
  description: "Personal project",
};

export default function Page() {
  return (
    <Wrapper
      title="Project Card"
      tags={["personal project", "mockup"]}
      description={
        <>
          <a
            href="https://dribbble.com/shots/25062591-Dark-Mode-Project-Card"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            Design by Monty Hayton
          </a>
        </>
      }
      children={
        <div className="flex h-full w-svw items-center justify-center text-sm">
          <div className="relative m-2 flex w-full max-w-xl flex-col gap-y-6 rounded-3xl border border-neutral-100 p-4 sm:p-6 dark:border-neutral-900">
            <div id="header" className="flex justify-between">
              <div className="flex items-center gap-x-4">
                <div className="h-12 w-12 rounded-lg bg-neutral-300 dark:bg-neutral-700"></div>
                <div>
                  <div className="text-base">Roadmap Planning</div>
                  <div className="text-neutral-500">Figma - Devops</div>
                </div>
              </div>
              <div className="h-fit rounded-lg bg-red-100 px-2 py-1 text-xs text-red-400 dark:bg-red-900/30 dark:text-red-300">
                Not saved
              </div>
            </div>
            <div id="progress" className="flex flex-col gap-y-2">
              <div className="flex justify-between">
                <span>40% complete</span>
                <span className="text-neutral-500">2 days left</span>
              </div>
              <div
                id="progress-bar"
                className="h-1 w-full rounded-full bg-neutral-100 dark:bg-neutral-900"
              >
                <div className="h-full w-2/5 animate-pulse rounded-full bg-gradient-to-r from-red-400 via-red-400 to-orange-400"></div>
              </div>
            </div>
            <div className="flex items-center justify-between">
              <div id="contributor" className="flex -space-x-2">
                <ProfilePicture />
                <ProfilePicture />
                <ProfilePicture />
                <ProfilePicture />
                <div className="flex aspect-square w-8 items-center justify-center rounded-full border-2 border-white bg-neutral-100 text-xs dark:border-neutral-950 dark:bg-neutral-800">
                  4
                </div>
              </div>
              <div className="flex items-center gap-x-2">
                <RiCalendarScheduleLine />
                <span>Nov 12 - Dec 12</span>
              </div>
            </div>
            <div className="flex flex-col gap-y-2">
              <Item title="Initial planning">
                <SubItem title="Create roadmap" initialStatus="completed" />
                <SubItem title="Set timeline" initialStatus="completed" />
              </Item>
              <Item title="Preliminary concepting">
                <SubItem
                  title="Complete checklist for roadmap"
                  initialStatus="completed"
                />
                <SubItem
                  title="Update component library to match storybook"
                  initialStatus="completed"
                />
                <SubItem
                  title="Refactor main components to match system 1.4"
                  initialStatus="inProgress"
                />
                <SubItem title="Add multilevel navigation to homepage" />
              </Item>
              <Item title="Refining concepts">
                <SubItem title="Add multilevel navigation to homepage" />
                <SubItem title="Update component library to match storybook" />
                <SubItem title="Refactor main components to match system 1.4" />
                <SubItem title="Add multilevel navigation to homepage" />
              </Item>
            </div>
            <div className="absolute -left-1/4 -top-1/4 -z-10 h-full w-full rounded-full bg-gradient-to-br from-red-500 to-orange-500 opacity-5 blur-3xl"></div>
          </div>
        </div>
      }
    />
  );
}
