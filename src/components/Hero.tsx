import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/ui/dialog";

import latestvideo from "/lovable-uploads/compressed-video.mp4";
import heroimage from "/lovable-uploads/35865678-e03d-4c72-8562-4ab9f5f82d68.png";



const Hero = () => {
  return (
    <section className="pt-24 pb-12 bg-gradient-to-br from-purple-50 to-indigo-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 md:px-5">
      <div className="relative w-full overflow-hidden shadow-lg">
        <video
          src={latestvideo}
          autoPlay
          loop
          muted
          // controls
          playsInline
          className="w-full h-[650px] aspect-video object-cover"
        />
      </div>
      <div className="relative w-full overflow-hidden px-4 my-auto">
       <h2 className="mb-10 text-3xl md:text-6xl font-bold text-gray-900">Create a Brand for Yourself: The Art of Personal Branding</h2>
       <p className="text-lg md:text-xl text-gray-600 mb-8">Discover how to build a brand that reflects who you are and what you stand for. In this workshop, we uncover the strategies behind personal branding from defining your identity to communicating your value with confidence and clarity.</p>
      </div>
    </div>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 w-full mb-8 md:mb-0 text-center md:text-left">
            <h1 className="text-3xl md:text-6xl font-bold text-gray-900 mb-6">
              Master the Art of Brand Strategy
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8">
              From the House of Magsmen Brand Consultant - Learn the frameworks behind personal and business brand success.
            </p>
            <p className="text-base md:text-lg text-gray-700 mb-8">
              Designed for founders, professionals, and future brand leaders.
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-purple-600 hover:bg-purple-700 text-base md:text-lg px-6 md:px-8 py-2 md:py-3 w-[200px]">
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
          <div className="md:w-1/2 w-full mt-6 md:mt-0">
            <div className="overflow-hidden shadow-xl">
              <img 
                src={heroimage}
                alt="Brand Strategy Analysis"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
