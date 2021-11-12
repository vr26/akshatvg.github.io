import Header from "../Components/Header/Header";
import HeadSection from "../Components/HeadSection/HeadSection.jsx";
import AboutSection from "../Components/AboutSection/AboutSection.jsx";
import SkillsSection from "../Components/SkillsSection/SkillsSection.jsx";
// import WorkSection from "../Components/WorkSection/WorkSection";
// import ProjectsSection from "../Components/ProjectsSection/ProjectsSection";
// import AccomplishmentsSection from "../Components/AccomplishmentsSection/AccomplishmentsSection";
import Footer from "../Components/Footer/Footer.jsx";

function Home() {

  return (
    <>
      {/* Home Page */}
      <Header />
      <HeadSection />
      <AboutSection />
      <SkillsSection />
      {/* <WorkSection />
      <ProjectsSection />
      <AccomplishmentsSection /> */}
      <Footer/>
    </>
  );
}

export default Home;