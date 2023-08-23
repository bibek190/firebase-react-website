import Aboutus from "./Aboutus";
import Contact from "./Contact";
import Footer from "./Footer";
import Header from "./Header";
import HowItWorks from "./HowItWorks";
import Navbar from "./Navbar";
import Services from "./Services";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <HowItWorks />
      <Aboutus />
      <Services />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
