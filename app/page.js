import HomePage from "../components/HomePage";
import Seo from "../components/Seo/Seo";
export default function Home() {
  const seoField = {
    title: "",
    description: "",
    path: "",
    metaImage: "",
    pageType: "WebSite",
  };
  return (
    <>
      <Seo {...seoField} />
      <HomePage />
    </>
  );
}
