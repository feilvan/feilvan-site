import Layout from "../../components/layout/layout";
import { getAllPostIds, getPostData } from "../../lib/api";
import Head from "next/head";
import { parseISO, format } from "date-fns";
import { GetStaticProps, GetStaticPaths } from "next";
import { DateID } from "../../components/post/date";
import CoverPost from "../../components/post/coverPost";
import SectionName from "../../components/post/sectionName";
import YoutubeEmbed from "../../components/post/youtube";
import Back from "../../components/post/back";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";

export default function Post({
  postData,
}: {
  postData: {
    title: string;
    date: string;
    type: string;
    tools: string;
    yt: string;
    contentHtml: string;
  };
}) {
  return (
    <Layout>
      <Head>
        <title>{postData.title} | FEILVAN</title>
      </Head>
      <article className=" flex flex-col items-center ">
        {/* <Back /> */}
        <CoverPost
          src={"/images/works/".concat(
            format(parseISO(postData.date), "yyLLdd"),
            ".jpg"
          )}
          title={postData.title}
        />
        <div className=" px-4 relative w-screen max-w-5xl mt-12">
          <div className="space-y-12">
            <div className=" flex flex-row justify-between font-[500] text-4xl">
              <div className=" flex flex-row space-x-2">
                <div>{postData.title}</div>
              </div>
              <div className="font-[400] text-neutral-500">
                #<DateID dateString={postData.date} />
              </div>
            </div>
            <div className=" grid grid-cols-2">
              <div>
                <SectionName>Type</SectionName>
                {postData.type}
              </div>
              <div>
                <SectionName>Tools</SectionName>
                {postData.tools}
              </div>
            </div>
            <div>
              <SectionName>Process Video</SectionName>
              <YoutubeEmbed embedId={postData.yt} title={postData.title} />
            </div>
            <div>
              <div className=" flex flex-row space-x-2">
                <SectionName>Resources</SectionName>
                <FontAwesomeIcon
                  icon={faArrowUpRightFromSquare}
                  size="sm"
                  className=" text-neutral-500"
                />
              </div>
              <div
                className=" mt-2"
                dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
              />
              <div className=" mt-2">
                All images are from Unsplash and free to use.
              </div>
            </div>
          </div>
        </div>
      </article>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string);
  return {
    props: {
      postData,
    },
  };
};
