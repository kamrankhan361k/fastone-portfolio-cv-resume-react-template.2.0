import VideoImg from "../../assets/images/resources/videoImg.jpg";
import Fancybox from "../../fancybox";
import { ReactComponent as PlayIcon } from "../../lib/icons/Play.svg";

const VideoBox = () => {
  return (
    <section className="videoBoxWrap relative w-full">
      <div className="container sm:container md:container lg:container xl:max-w-[75rem] mx-auto">
        <div className="videoBox relative overflow-hidden rounded-[10px] sm:rounded-[1.25rem] md:[1.875rem] lg:rounded-[3.125rem] mb-[-5rem] md:mb-[-10rem] lg:mb-[-18.90625rem] w-100">
          <div className="videoImg relative before:absolute before:inset-0 before:bg-[#000] before:opacity-50 before:z-[1] w-100">
            <img className="w-full" src={VideoImg} alt="Video Mockup"></img>
            {/* Video Image */}
          </div>
          <div className="videoCap absolute -translate-x-1/2 left-1/2 bottom-7 lg:bottom-[6.5625rem] flex flex-col md:flex-row gap-5 lg:gap-[1.875rem] items-center justify-center md:justify-start text-center md:text-left z-[1] w-full md:w-[initial]">
            <Fancybox><a data-fancybox href="https://vimeo.com/265989117" title="Click to Watch"><PlayIcon className="h-[2.5rem] w-[2.5rem] sm:h-[4rem] sm:w-[4rem] md:h-[7.1875rem] md:w-[5rem] lg:h-[5rem] lg:w-[7.1875rem] fill-white hover:fill-accent leading-none"></PlayIcon></a></Fancybox>
            <div className="videoCapInner flex flex-col justify-center md:justify-start gap-1">
                <span className="text-white text-[1.125rem] md:text-[1.375rem] font-Poppins font-medium">My Working Method</span>
                <h3 className="text-white font-Poppins font-bold uppercase text-[1.75rem] md:text-[2rem] lg:text-[2.25rem]">Watch Video</h3>
            </div>
            {/* Video Cap */}
          </div>
          {/* Video Box */}
        </div>
      </div>
      {/* Video Box Wrap */}
    </section>
  );
};

export default VideoBox;
