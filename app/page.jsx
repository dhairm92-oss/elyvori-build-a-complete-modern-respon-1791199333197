import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import RolesSection from '@/components/RolesSection';
import TechStack from '@/components/TechStack';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <RolesSection />
      <TechStack />
      <Footer />
    </main>
  );
}