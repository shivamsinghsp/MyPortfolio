const Contact = () => (
  <section id="contact" className="py-16 px-4 bg-white">
    <h3 className="text-4xl font-semibold text-center mb-8">Get In Touch</h3>
    <form className="max-w-md mx-auto space-y-6">
      <input type="text" placeholder="Name" className="w-full p-3 border rounded" />
      <input type="email" placeholder="Email" className="w-full p-3 border rounded" />
      <textarea placeholder="Message" className="w-full p-3 border rounded h-32"></textarea>
      <button className="w-full bg-blue-600 text-white py-3 rounded hover:bg-blue-700 transition">
        Send Message
      </button>
    </form>
  </section>
);

export default Contact;
