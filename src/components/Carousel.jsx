import { motion } from "framer-motion"
import React, { useRef, useEffect, useState } from "react"
import { ProjectList } from "./ProjectsList"
import "../styles/Carousel.css"

export default function Carousel() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
      <motion.div drag="x" dragConstraints={{right:0, left: -width}} className="inner-carousel">
        {ProjectList.map((project) => {
          return (
            <motion.div className="item" key={project.name}>
              <img src={project.image} alt="" />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  )
}
