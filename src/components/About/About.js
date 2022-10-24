
import "./About.css";
import Card from "../Card/Card";
import { motion } from "framer-motion";
import ButtonContact from "../Buttons/ButtonContact";
import Blur from "../Blur/Blur";
import imgOne from "../../assets/1.jpg"
import imgTwo from "../../assets/2.jpg"
import imgThree from "../../assets/3.jpg"


const Services = () => {
  const transition = {
    duration: 1,
    type: "spring",
  };

  return (
    <div className="services" id="services">

      <div className="awesome">
 
        <span>UPIORNE ZABAWY</span>
        <span>których nie zapomnisz!</span>
        <spane>
        Przygotuj się na noc, pełną wrażeń!
          <br />
          Zarejestruj się na Halloween Festival 2023
        </spane>
        <a href={'/'} >
          <ButtonContact />
        </a>
        <Blur />
      </div>
  
      <div className="cards">

        <motion.div
          initial={{ left: "40rem" }}
          whileInView={{ left: "30rem" }}
          transition={transition}
        >
          <Card
            picture={imgOne}
          />
        </motion.div>

        <motion.div
          initial={{ left: "3rem", top: "12rem" }}
          whileInView={{ left: "8rem" }}
          transition={transition}
        >
          <Card
            picture={imgThree}
          />
        </motion.div>

        <motion.div
          initial={{ top: "19rem", left: "40rem" }}
          whileInView={{ left: "28rem" }}
          transition={transition}
        >
          <Card
            picture={imgTwo}

            color="rgba(252, 166, 31, 0.45)"
          />
        </motion.div>
       
      </div>
    </div>
  );
};

export default Services;