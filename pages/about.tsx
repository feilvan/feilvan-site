import Layout from "../components/layout";
import Uebok from "../components/uebok";

export default function About() {
  return (
    <div>
      <Layout>
        <div className="flex flex-col items-center">
          <h1 className="mt-4 text-3xl font-inter">
            This is{" "}
            <span className="text-brand font-bold font-readex">About</span> page
          </h1>
        </div>
      </Layout>
      <Uebok />
    </div>
  );
}
