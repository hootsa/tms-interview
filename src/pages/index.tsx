import Layout from "@/components/layout/Layout";
import HomePage from "@/sections/homePage";

export const metadata = {
  title: "Promptopia",
  description: "Discover & Share AI Prompts",
};

export default function Home() {
  return (
    <Layout>
      <HomePage />
    </Layout>
  );
}
