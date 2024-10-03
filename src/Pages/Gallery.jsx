import SectionTitle from "../Components/SectionTitle";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { gallery } from "../Constants/constants";
import ReactPlayer from "react-player";

const Gallery = () => {
    return (
      <div id="gallery" className="w-full overflow-hidden-web flex justify-center">
        <div className="w-full min-h-[800px] flex flex-col xl:w-[70%]">
          <div className="w-full">
            <SectionTitle
              title="GALLERY"
              subtitle="Space to accomodate work"
              />
              </div>
              <div className="title"><h1>KELESAH 98</h1></div>
              <div className="video-wrapper">
                <ReactPlayer
                    url='https://youtu.be/-WgawnzIlhE?si=eCc0n56FnjWNhDGu'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler"
                    />
              </div>
              <div className="title2"><h1>WHO'S NEXT?</h1></div>
              <div className="video-wrapper2">
                <ReactPlayer
                    url='https://youtu.be/b3pHbZrCm4s'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler2"
                    />
              </div>
              <div className="title3"><h1>WAWANCARA ASISTEN PEREKONOMIAN DAN PEMBANGUNAN JAKARTA UTARA</h1></div>
              <div className="video-wrapper3">
                <ReactPlayer
                    url='https://youtu.be/PkVQdR6uS6c'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler3"
                    />
              </div>
              <div className="title4"><h1>LIPUTAN PERPUSTAKAAN BADAN BAHASA</h1></div>
              <div className="video-wrapper4">
                <ReactPlayer
                    url='https://youtu.be/tusFsRzUUV4'
                    playing
                    controls
                    loop
                    muted
                    className="react-player-reguler4"
                    />
              </div>
        <div className="w-full h-full flex justify-center">
          <div className="w-[80%] flex flex-col sm:flex-row sm:flex-wrap justify-center gap-2">
            <LazyMotion features={domAnimation} strict>
              {gallery.image.map((gallery, index) => (
                <m.div
                  key={index}
                  initial={{ x: 100 }}
                  whileInView={{ x: 0 }}
                  className="w-full sm:w-[48%] rounded-xl p-1 bg-primary-400"
                >
                  <img className="w-full rounded-xl" src={gallery} />
                </m.div>
              ))}
            </LazyMotion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;