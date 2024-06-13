import { motion } from "framer-motion";
import "./services.scss";

// Data for services
const services = [
  {
    id: 1,
    title: "Branding",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
  },
  {
    id: 2,
    title: "Web Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni sit amet consectetur adipisicing elit. eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?",
  },
  {
    id: 3,
    title: "UI/UX Designer",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi!  assumenda quae mollitia libero repellat explicabo maiores?",
  },
  {
    id: 4,
    title: "App Development",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores? nisi aliquam consectetur expedita magni eius ex corrupti animi!  assumenda quae.",
  },
];

// Animation variants
const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 1,
      staggerChildren: 0.1,
    },
  },
};

function Services() {

  return (
    <motion.div
      className="services"
      variants={variants}
      initial="initial"
      animate="animate"
    >
      <motion.div className="textContainer" variants={variants}>
        <p>
          I focus on helping your brand grow <br />
          and move forward
        </p>
        <hr />
      </motion.div>
      <motion.div className="titleContainer" variants={variants}>
        <div className="title">
          <img src="/people.webp" alt="" />
          <h1>
            <motion.b whileHover={{ color: "orange" }}>Unique</motion.b> Ideas
          </h1>
        </div>
        <div className="title">
          <h1>
            <motion.b whileHover={{ color: "orange" }}>For Your</motion.b>{" "}
            Business.
          </h1>
          <button>WHAT WE DO?</button>
        </div>
      </motion.div>
      <motion.div className="listContainer" variants={variants}>
        {services.map((item) => (
          <motion.div
            whileHover={{ backgroundColor: "lightgray", color: "black" }}
            className="box"
            key={item.id}
          >
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <button>Go</button>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Services;
