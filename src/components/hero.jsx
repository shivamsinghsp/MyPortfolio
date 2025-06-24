const Hero = () => (

  <section id="home" className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-blue-100 to-white text-center px-4">
    <h2 className="text-5xl md:text-6xl font-extrabold mb-6">
      Hi, I’m Shivam .<br/>
      I build modern web experiences.
    </h2>
    <p className="max-w-xl text-lg text-gray-700 mb-8">
      I'm a FullStack Java Developer specializing in  Java Frameworks and Tools , and create interactive and Responsive UIs.
    </p>
    <div className="space-x-4">
      <a href="#work" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
        See My Work
      </a>
      <a href="#contact" className="text-blue-600 px-6 py-3 rounded-lg hover:bg-blue-100 transition">
        Contact Me
      </a>
    </div>
  </section>
);

export default Hero;
