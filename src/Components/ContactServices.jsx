import { m, LazyMotion, domAnimation } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

const ContactServices = () => {  
  return (
    <div
      className="w-full sm:w-[40%] h-full flex flex-col gap-4 justify-center"
      style={{ fontFamily: "Poppins,sans-serif" }}
    >
      <LazyMotion features={domAnimation} strict>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, type: "spring", delay: 0.2 }}
        >
          <div className="w-full h-[50px] text-grayscale-100 flex items-center gap-4">
            <FontAwesomeIcon
              className="w-[50px] h-full text-primary-400"
              icon={icons.faPen}
            />
            <span>Script Writing</span>
          </div>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4, type: "spring" }}
        >
          <div className="w-full h-[50px] text-grayscale-100 flex items-center gap-4">
            <FontAwesomeIcon
              className="w-[50px] h-full text-primary-400"
              icon={icons.faClapperboard}
            />
            <span>Directing</span>
          </div>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, type: "spring" }}
        >
          <div className="w-full h-[50px] text-grayscale-100 flex items-center gap-4">
            <FontAwesomeIcon
              className="w-[50px] h-full text-primary-400"
              icon={icons.faPodcast}
            />
            <span>Podcast</span>
          </div>
        </m.div>
        <m.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8, type: "spring" }}
        >
          <div className="w-full h-[50px] text-grayscale-100 flex items-center gap-4">
            <FontAwesomeIcon
              className="w-[50px] h-full text-primary-400"
              icon={icons.faVideo}
            />
            <span>News Reporting</span>  
          </div>
        </m.div>
      </LazyMotion>
    </div>
  );
};

export default ContactServices;
