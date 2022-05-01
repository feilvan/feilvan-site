import Link from "next/link";
import { GetStaticProps } from "next";
import { getSortedPostsData } from "../../lib/api";
import Layout from "../../components/layout/layout";
import { DateID } from "../../components/post/date";
import { motion } from "framer-motion";

export default function Works({
  allPostsData,
}: {
  allPostsData: {
    id: string;
    title: string;
    date: string;
  }[];
}) {
  return (
    <div>
      <Layout>
        <div className="grid h-screen w-screen place-items-center">
          <div>hello</div>
        </div>
        {allPostsData.map(({ id, date, title }) => (
          <li className="" key={id}>
            <Link href={`/posts/${id}`}>
              <a>{title}</a>
            </Link>
            <br />
            <small className="">
              <DateID dateString={date} />
            </small>
          </li>
        ))}
      </Layout>
    </div>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
