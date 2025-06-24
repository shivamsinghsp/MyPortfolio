import Navbar from "./components/navbar";
import Contact from "./components/contact";
import Features from "./components/features";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Showcase from "./components/showcase";

function App() {
  return (
    <div className="font-sans antialiased text-gray-900">
      <Navbar />
      <Hero />
      <Features />
      <Showcase />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
