
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import BRAND_LAB_LOGO_SRCs from "/lovable-uploads/5b0f9a28-4bc4-416a-827b-d05ca25060d2.png";

// Main School brand logo
const SCHOOL_LOGO_SRC = "/lovable-uploads/0f3e43df-33f5-49bf-a0e3-d4bb75a5103d.png";
// The Brand Lab icon
const BRAND_LAB_LOGO_SRC = "public/lovable-uploads/5b0f9a28-4bc4-416a-827b-d05ca25060d2.png";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            {/* The Brand Lab Icon: slightly larger & zoomed for clarity */}
            <div className="w-12 h-12 flex items-center justify-center bg-white rounded-full overflow-hidden border border-gray-200 shadow-sm">
              <img
                src={BRAND_LAB_LOGO_SRCs}
                alt="The Brand Lab Logo"
                className="object-contain"
                style={{ width: "44px", height: "44px", transform: "scale(1.28)", margin: "0" }}
                draggable={false}
              />
            </div>
            {/* School Of Strategy title */}
            <div className="flex items-center space-x-2">
              <span className="text-xl font-bold text-gray-800">School Of Strategy</span>
            </div>
          </div>
          
          {/* Navigation links and register button */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-600 hover:text-gray-900">About</a>
            <a href="#strategy-talks" className="text-gray-600 hover:text-gray-900">Strategy Talks</a>
            <a href="#mentors" className="text-gray-600 hover:text-gray-900">Mentors</a>
            <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-purple-600 hover:bg-purple-700">
                  Register Now
                </Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[800px] max-w-[95vw] w-[95vw] sm:w-auto h-[80vh] p-0 border-none">
                <iframe
                  src="https://forms.zohopublic.in/magsmen1/form/Magsmen/formperma/PKgwiDTFdsDOOnNi5KuGNIRbNmpel3nC0M3CkgV4r8s"
                  frameBorder="0"
                  className="w-full h-full rounded-lg"
                  title="Registration Form"
                ></iframe>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
