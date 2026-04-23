import Hero from '@/components/Hero';
import Projects from '@/components/Projects';
import About from '@/components/About';
import Contact from '@/components/Contact';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#0a0a0a] text-zinc-300 px-6 sm:px-12 md:px-24 w-full pt-12 max-w-6xl mx-auto">
        <div>
          <Hero />
          <Projects />
          <About />
          <Contact />
        </div>
      </main>
      <Footer />
    </>
  );
}
