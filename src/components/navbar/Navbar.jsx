import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";
import "./navbar.scss";

// Define social links outside the component
const socialLinks = [
  {
    id: 1,
    title: "facebook",
    link: "https://facebook.com",
    src: "facebook.png",
  },
  {
    id: 2,
    title: "instagram",
    link: "https://instagram.com",
    src: "instagram.png",
  },
  {
    id: 3,
    title: "dribbble",
    link: "https://dribbble.com",
    src: "instagram.png",
  },
  {
    id: 5,
    title: "youtube",
    link: "https://youtube.com",
    src: "youtube.png",
  },
];

function Navbar() {
  return (
    <div className="navbar">
      <Sidebar />

      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          Azhar Ali
        </motion.span>
        <div className="social">
          {socialLinks.map((item) => (
            <a key={item.id} href={item.link} target="_blank">
              <motion.img
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                src={`/${item.src}`}
                alt={item.title}
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
