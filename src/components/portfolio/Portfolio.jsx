import { useRef } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import "./portfolio.scss";

// Data for portfolio items
const items = [
  {
    id: 1,
    title: "React Dashboard",
    img: "https://images.pexels.com/photos/25070540/pexels-photo-25070540/free-photo-of-a-blue-and-white-house-with-potted-plants.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias voluptatem repellat ratione, expedita animi in sint aperiam aliquam ex perferendis molestiae vel eaque itaque nemo dicta tempore nostrum rem praesentium!",
  },
  {
    id: 2,
    title: "Ecommerce Website ",
    img: "https://images.pexels.com/photos/23534117/pexels-photo-23534117/free-photo-of-a-city-skyline-is-reflected-in-a-body-of-water.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias voluptatem repellat ratione, expedita animi in sint aperiam aliquam ex perferendis molestiae vel eaque itaque nemo dicta tempore nostrum rem praesentium!",
  },
  {
    id: 3,
    title: "Next.js Portfolio",
    img: "https://images.pexels.com/photos/25643365/pexels-photo-25643365/free-photo-of-two-dogs-running-through-the-woods-with-a-stick.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias voluptatem repellat ratione, expedita animi in sint aperiam aliquam ex perferendis molestiae vel eaque itaque nemo dicta tempore nostrum rem praesentium!",
  },
  {
    id: 4,
    title: "JavaScript Todo App",
    img: "https://images.pexels.com/photos/7175396/pexels-photo-7175396.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load",
    desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias voluptatem repellat ratione, expedita animi in sint aperiam aliquam ex perferendis molestiae vel eaque itaque nemo dicta tempore nostrum rem praesentium!",
  },
];

// Individual portfolio item component
const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-500, 500]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imageContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{y}}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Demo</button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
  });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Work</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}

export default Portfolio;
