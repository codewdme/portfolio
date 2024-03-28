import Header from "./components/Header";
import Banner from "./components/Banner";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

const Content = () => {
  return (
    <div className="flex flex-col  ">
      <Header />
      <Banner />
      <About />
      <Projects />
      {/* <Experience /> */}
      <Contact />
    </div>
  );
};

export default Content;
