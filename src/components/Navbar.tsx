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
    <NavigationMenu className=" p-4 ">
      {matches && (
        <NavigationMenuList className=" gap-3 uppercase transition-all ease-out  ">
          <NavigationMenuItem className="  hover:scale-110">
            <NavigationMenuLink className=" p-1 rounded-sm border-black dark:border-white border-solid border-2 ">
              <a href="/">About</a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="  hover:scale-110     ">
            <NavigationMenuLink>
              <a
                href="/work"
                className=" p-1 rounded-sm border-black border-solid border-2 dark:border-white "
              >
                work
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem className="  hover:scale-110     ">
            <NavigationMenuLink>
              <a
                href="/contact"
                className=" p-1 rounded-sm border-black border-solid border-2 dark:border-white "
              >
                contact
              </a>
            </NavigationMenuLink>
          </NavigationMenuItem>
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
          className=" transition-all  flex flex-col  dark:bg-purple-950 justify-center text-center gap-16 fixed left-0 bottom-0 w-full h-screen bg-purple-400 t"
        >
          <motion.a
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
            variants={slideIn}
            href="/"
            className=" hover:text-xl uppercase  dark:border-white "
          >
            About
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.8 }}
            variants={slideIn}
            whileHover={{ scale: 1.2 }}
            href="/contact"
            className=" hover:text-xl uppercase  dark:border-white "
          >
            contact
          </motion.a>
          <motion.a
            whileTap={{ scale: 0.8 }}
            whileHover={{ scale: 1.2 }}
            variants={slideIn}
            href="/work"
            className="hover:text-xl uppercase  dark:border-white "
          >
            work
          </motion.a>
        </motion.div>
      ) : (
        ""
      )}
    </NavigationMenu>
  );
}
export default Navbar;
