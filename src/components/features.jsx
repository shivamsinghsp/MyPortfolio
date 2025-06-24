const skills = [
  {
    title: "Java",
    icon: <img src="https://img.icons8.com/?size=160&id=lTKW3iI3wIT0&format=png" alt="Java" className="w-12 h-12" />,
  },
  { title: "React JS", icon: "⚛️" },
  { title: "Tailwind CSS", icon: "🎨" },
  { title: "Responsive Design", icon: "📱" },
];

const Features = () => (
  <section id="about" className="py-16 px-4 bg-white">
    <h3 className="text-4xl font-semibold text-center mb-12">What I Do</h3>
    <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      {skills.map(s => (
        <div
          key={s.title}
          className="p-8 bg-gray-50 rounded-lg shadow-lg hover:scale-105 transform transition text-center"
        >
          <div className="text-4xl mb-4 flex justify-center">{s.icon}</div>
          <h4 className="text-2xl font-bold mb-2">{s.title}</h4>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
