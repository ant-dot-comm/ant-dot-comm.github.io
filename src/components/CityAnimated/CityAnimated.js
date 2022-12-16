import React from "react";
import { motion, useTransform, useScroll } from "framer-motion";

function Gotham() {
    const { scrollYProgress } = useScroll()
    const xPosAnim1 = useTransform(scrollYProgress, [0, 1], ['-30%', '0%'])

    return (
        <motion.img 
            style={{ 
                x: xPosAnim1, 
            }}
            className="silhouette silhouette--gotham" 
            src={`${process.env.PUBLIC_URL + "/images/cityAssets/GothamSkyline.svg"}`}  
            alt=""
        />
    );
}
function Logos() {
    const { scrollYProgress } = useScroll()
    const xPosAnim1 = useTransform(scrollYProgress, [0, 1], ['-15%', '0%'])

    return (
        <motion.img 
            style={{ 
                x: xPosAnim1, 
            }}
            className="silhouette silhouette--logos" 
            src={`${process.env.PUBLIC_URL + "/images/cityAssets/Logos.svg"}`}
            alt=""
        />
    );
}

export function CityAnimated() {

  return (
    <div style={{position : "relative"}} className="city-animated">
        <Logos />
        <Gotham />
        <img
            className="silhouette silhouette--batman" 
            src={`${process.env.PUBLIC_URL + "/images/cityAssets/Batman.svg"}`}
            alt=""
        />
    </div>
  );
  
}