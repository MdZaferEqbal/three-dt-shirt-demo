import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";
import { headContainerAnimation, slideAnimation, headContentAnimation, 
  headTextAnimation} from "../config/motion";

import state from "../store";
import { CustomButton } from "../components";
import TShirtIcon from "../assets/TShirtIcon.jsx";

const Home = () => {
  const snap = useSnapshot(state);
  const customTextColor = {
    color: snap.color === "#000000" || snap.color === "#353934" ? "#ffffff" : snap.color,
  }

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation('left')}>
          <motion.header {...slideAnimation('down', "opacity-0")}>
            <TShirtIcon/>
          </motion.header>
          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text" style={customTextColor}>LET'S<br className="xl:block hidden"/> DO IT.</h1>
            </motion.div>
            <motion.div className="flex flex-col gap-5" {...headContentAnimation}>
              <p className="max-w-md font-normal text-base" style={customTextColor}>
                Create your unique and exclusive shirt with our brand-new 3D customization tool. 
                <strong> Unleash your imagination</strong>{" "} and define your own style.
              </p>
              <CustomButton type="filled" title="Customize It" handleClick={() => state.intro = false}
                customStyles="w-fit px-4 py-2.5 font-bold text-sm"/>
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  )
}

export default Home
