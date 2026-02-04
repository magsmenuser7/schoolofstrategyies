import { useRef, useState } from "react";
import { Play } from "lucide-react";
import video1 from "/lovable-uploads/lv_0_20260204155230.mp4";
import video2 from "/lovable-uploads/IMG_9327.mp4";

const TestimonialsSection = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);

  const [playingVideo, setPlayingVideo] = useState(null);

  const handlePlay = (videoNumber) => {
    if (videoRef1.current) videoRef1.current.pause();
    if (videoRef2.current) videoRef2.current.pause();

    if (videoNumber === 1 && videoRef1.current) {
      videoRef1.current.play();
    }
    if (videoNumber === 2 && videoRef2.current) {
      videoRef2.current.play();
    }

    setPlayingVideo(videoNumber);
  };

  return (
    <section className="w-full py-20 bg-black mx-0">
      <div className="max-w-5xl mx-auto px-6 ">

        <h2 className="text-2xl md:text-2xl font-semibold text-white mb-4">
          What Our Learners Say
        </h2>

        <p className="text-gray-400 max-w-3xl mb-10">
          Workshop was great, very interactive and knowledgeable for the students.
          They learned how branding and strategy add real value to any product.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:gap-48 gap-8">

          {/* Card 1 */}
          <div className="bg-white rounded-3xl p-4">
            <div className="relative rounded-2xl bg-gray-200 overflow-hidden aspect-[3/4] border border-white/60">

              <video
                ref={videoRef1}
                className="w-full h-full object-cover"
                playsInline
                controls
                preload="metadata"
              >
                <source src={video1} type="video/mp4" />
              </video>

              {playingVideo !== 1 && (
                <button
                  onClick={() => handlePlay(1)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
                >
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 text-black ml-1" />
                  </div>
                </button>
              )}
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-3xl p-4">
            <div className="relative rounded-2xl bg-gray-200 overflow-hidden aspect-[3/4] border-2 ">

              <video
                ref={videoRef2}
                className="w-full h-full object-cover"
                playsInline
                controls
                preload="metadata"
              >
                <source src={video2} type="video/mp4" />
              </video>

              {playingVideo !== 2 && (
                <button
                  onClick={() => handlePlay(2)}
                  className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition"
                >
                  <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-lg">
                    <Play className="w-8 h-8 text-black ml-1" />
                  </div>
                </button>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
