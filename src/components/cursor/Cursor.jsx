import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./cursor.scss";

function Cursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Function to handle mouse move and update cursor position
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      animate={{ x: position.x + 20, y: position.y + 15 }}
      className="cursor"
    ></motion.div>
  );
}

export default Cursor;
