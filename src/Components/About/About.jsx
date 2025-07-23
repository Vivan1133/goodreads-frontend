import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-r from-[#d1d5db] via-[#6b7280] to-[#374151] py-16 px-6 flex items-center justify-center">
      <div className="max-w-5xl w-full bg-gray-300 p-10 rounded-xl shadow-xl">
        <h2 className="text-4xl font-bold text-center text-purple-900 mb-6">About Bookshelf</h2>
        <p className="text-lg text-gray-700 leading-8 text-justify">
          <span className="font-semibold text-purple-800"><Link to="/">Bookshelf</Link></span> is your personal digital library — a space where passionate readers and curious minds come together. Our platform lets you organize your book collection, track what you've read, and explore what’s next on your reading journey.
        </p>
        <p className="text-lg text-gray-700 leading-8 mt-4 text-justify">
          But Bookshelf is more than just storage — it’s a social space for bookworms. Connect with other readers, share reviews, get recommendations, and spark discussions around your favorite stories and authors. Whether you're a casual reader or a literary enthusiast, we help you grow and connect through books.
        </p>
        <p className="text-lg text-gray-700 leading-8 mt-4 text-justify">
          Built with simplicity, elegance, and community in mind, Bookshelf is your go-to platform to celebrate the joy of reading.
        </p>
        <div className="mt-10 text-center">
          <p className="text-gray-600 italic">“A reader lives a thousand lives before he dies.” – George R.R. Martin</p>
        </div>
      </div>
    </section>
  );
}
