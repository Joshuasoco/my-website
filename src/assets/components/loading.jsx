import { useState, useEffect } from "react";
import Lottie from "lottie-react";
import loaderAnimation from "../lotties/loader.json";
import { useLocation } from "react-router-dom";

const Loader = ({enabled = true}) => {
  const location = useLocation();
  const [loaderVisible, setLoaderVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);


  useEffect(() => {
    if(!enabled){
      setLoaderVisible(false);
      return;
    }

    setLoaderVisible(true);
    setFadeOut(false);
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => {
        setLoaderVisible(false);
      }, 500); 
    }, 2000);

    return () => clearTimeout(timer);
  }, [location.pathname, enabled]);

  return (
    loaderVisible && enabled &&(
      <div
        className={`fixed inset-0 flex items-center justify-center bg-white z-[9999] transition-opacity duration-500 ${
          fadeOut ? "opacity-0" : "opacity-100"
        }`}
      >
        <Lottie animationData={loaderAnimation} className="h-60" loop autoplay />
      </div>
    )
  );
};

export default Loader;
