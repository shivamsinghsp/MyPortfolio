const projects = [
  { name: "Project A", desc: "React + Tailwind Website", img: "https://s3.amazonaws.com/creativetim_bucket/products/393/original/opt_notus_nextjs_thumbnail.jpg?1602083034", link: "#" },
  { name: "Project B", desc: "Landing Page with Animation", img: "https://th.bing.com/th/id/OIP.LOvyv98LyCo7niVBSyntUgHaEk?r=0&w=680&h=420&rs=1&pid=ImgDetMain", link: "#" },
  
];

const Showcase = () => (
  <section id="work" className="py-16 px-4 bg-gray-100">
    <h3 className="text-4xl font-semibold text-center mb-12">Projects</h3>
    <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map(p => (
        <a key={p.name} href={p.link} className="group block bg-white rounded-lg shadow overflow-hidden transform hover:scale-105 transition">
          <img src={p.img} alt={p.name} className="w-full h-48 object-cover group-hover:opacity-90" />
          <div className="p-6">
            <h4 className="text-xl font-bold mb-2">{p.name}</h4>
            <p className="text-gray-700">{p.desc}</p>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default Showcase;
