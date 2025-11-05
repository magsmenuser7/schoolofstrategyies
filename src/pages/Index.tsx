
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import MentorCard from "@/components/MentorCard";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Download } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [showModal, setShowModal] = useState(false);
  const mentors = [
    {
      name: "Sandeep N",
      role: "Entrepreneur, Brand Consultant and Strategic Advisor",
      bio: "Trusted advisor for building impactful brands and sustainable growth",
      image: "public/lovable-uploads/8fc807a8-2a8c-452b-a177-ab890fac4f0a.png"
    },
    {
      name: "Koushik",
      role: "Brand Business Strategy, Brand Coach",
      bio: "Expert brand consultant helping businesses achieve their branding goals.",
      image: "public/lovable-uploads/e4f8c462-dd93-4a2a-8d47-ebe5cc9e3102.png"
    },
    {
      name: "Bhagyashree",
      role: "Brand Strategy & Personal Branding Architect",
      bio: "Specialized in personal branding and strategic brand development.",
      image: "public/lovable-uploads/ef1a0020-20a3-445f-a566-6b95c5b22d2b.png"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <Hero />

      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">About The Brand Lab</h2>
          <p className="text-xl text-gray-600 text-center max-w-3xl mx-auto">
            The Brand Lab: School Of Strategy is an initiative by Magsmen Brand Consultant,
            dedicated to empowering individuals and businesses with strategic brand-building skills.
          </p>
        </div>
      </section>

      <section id="strategy-talks" className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Strategy Talks</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Personal Branding</h3>
              <p className="text-gray-600 mb-4">Master the art of building your personal brand.</p>
              <span
                onClick={() => setShowModal(true)}
                className="text-sm hover:text-purple-600 cursor-pointer"
              >
                View More
              </span>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-4">Business Strategy</h3>
              <p className="text-gray-600">Learn proven frameworks for business success.</p>
              <a
                href="/lovable-uploads/workshop-the-brand-lab-1.pdf"
                download
                className="flex items-center mt-4 bg-secondary-600"
              >
                <Download className="mr-2 h-4 w-4" />
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </section>

      <section id="mentors" className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Meet Your Mentors</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {mentors.map((mentor) => (
              <MentorCard key={mentor.name} {...mentor} />
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-20 bg-purple-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Get In Touch</h2>
          <div className="flex flex-col items-center space-y-4">
            <div className="flex items-center space-x-2">
              <Phone className="text-purple-600" />
              <span>+91 90449 10449</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="text-purple-600" />
              <a href="mailto:connect@magsmen.com" className="hover:text-purple-600">
                connect@magsmen.com
              </a>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="text-purple-600" />
              <a href="https://magsmen.com" target="_blank" rel="noopener noreferrer" className="hover:text-purple-600">
                Magsmen.com
              </a>
            </div>
          </div>
        </div>
      </section>


      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-xl shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">Personal Branding</h2>
            <img
              src="/lovable-uploads/Invest-in-your-personal-brand-Invest-in-your-future.jpg"
              alt="Personal Branding"
              className="w-full h-auto rounded-t-xl object-contain"
            />
            <div className="flex justify-end mt-6">
              <button
                onClick={() => setShowModal(false)}
                className="text-sm text-purple-600"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© 2025 School Of Strategy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
