import HomePage from "../components/HomePage";
import Seo from "../components/Seo/Seo";
export default function Home() {
  const seoField = {
    title: "Upfront: Making Wellbeing A Reality For The Workforce",
    description: "Upfront Global is commitment to enhancing workforce wellbeing for both the formal and informal workforce through innovative solutions and impactful strategies.",
    path: "",
    metaImage: "/HomePage/logo-upfront.png",
    pageType: "WebSite",
  };
  return (
    <>
      <Seo {...seoField} />
      <HomePage />
    </>
  );
}
