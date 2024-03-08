import { motion } from "framer-motion";
import { useState } from "react";
import { useMediaQuery } from "../utils/useMediaQuery";
import { AlignRight } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5,
    },
  },
};
const slideIn = {
  hidden: { x: -20, opacity: 0 },
  show: {
    x: 20,
    opacity: 1,
  },
};

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const MenuToggle = function () {
    setToggle(!toggle);
  };

  const matches = useMediaQuery("(min-width: 768px)");
  return (
    <NavigationMenu className=" p-4 transition ease-out">
      {matches && (
        <NavigationMenuList className=" gap-3 uppercase transition-all ease-out  ">
          <a
            href="/"
            className=" p-1 rounded-sm  font-black  hover:scale-110  "
          >
            About
          </a>
          <a
            href="/work/"
            className=" p-1 rounded-sm  font-black  hover:scale-110  "
          >
            work
          </a>

          <a
            href="/contact/"
            className=" p-1 rounded-sm  font-black hover:scale-110   "
          >
            contact
          </a>
          <a
            href="/blog/"
            className=" p-1 rounded-sm  font-black hover:scale-110   "
          >
            blogs
          </a>
        </NavigationMenuList>
      )}
      {!matches && (
        <AlignRight
          onClick={MenuToggle}
          className=" ease-in-out transition hover:scale-125 cursor-pointer"
        />
      )}
      {!matches && toggle ? (
        <motion.div
          onClick={MenuToggle}
          variants={container}
          initial="hidden"
          animate="show"
          className=" transition-all  flex flex-col  dark:bg-purple-950 justify-center text-center gap-14 fixed left-0 bottom-0 w-full h-screen bg-purple-400 "
        >
          <motion.a
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
            variants={slideIn}
            href="/"
            className=" hover:text-5xl uppercase  font-black text-3xl "
          >
            About
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.8 }}
            variants={slideIn}
            whileHover={{ scale: 1.2 }}
            href="/contact/"
            className=" hover:text-5xl uppercase  font-black text-3xl "
          >
            contact
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
            variants={slideIn}
            href="/work/"
            className="hover:text-5xl uppercase text-3xl font-black "
          >
            work
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
            variants={slideIn}
            href="/blog/"
            className="hover:text-5xl uppercase text-3xl font-black "
          >
            blogs
          </motion.a>
        </motion.div>
      ) : (
        ""
      )}
    </NavigationMenu>
  );
}
export default Navbar;
