import { useState } from "react";
import { motion } from "framer-motion";
import "./sidebar.scss";
import Links from "./links/Links";
import ToggleButton from "./toggleButton/ToggleButton";

// Animation variants for sidebar
const varients = {
  open: {
    clipPath: "circle(1500px at 50px 50px)",
    transition: {
      type: "spring",
      stiffness: 20,
    },
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div
      className="sidebar"
      variants={varients}
      animate={open ? "open" : "closed"}
    >
      <motion.div className="bg" varients={varients}>
        <Links />
      </motion.div>
      <ToggleButton setOpen={setOpen} />
    </motion.div>
  );
}

export default Sidebar;
