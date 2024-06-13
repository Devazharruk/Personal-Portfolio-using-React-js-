import { motion } from "framer-motion"

// Variants for the sidebar animation
const variants = {
  open:{
    transition:{
      staggerChildren : 0.1,
    }
  },
  closed:{
    transition:{
      staggerChildren :0.05,
      staggerDirection : -1,
    }
  }
}

// Variants for individual items in the sidebar
const itemsVarients = {
  open:{
    y:0,
    opacity:1,
  },
  closed:{
    y:50,
    opacity:0,
  }
}

// List of items in the sidebar
const items = [
  "Homepage",
  "Services",
  "Portfolio", 
  "Contact",
  "About",
]


function Links() {

  

  return (
    <motion.div className="links" variants={variants}>
      {
        items.map((item)=>
         <motion.a  href={`#${item}`} key={item} variants={itemsVarients} whileHover={{scale:1.1}} whileTap={{scale:0.9}}>{item}   </motion.a>
        )
      }
    </motion.div>
  )
}

export default Links