import { DogApiResponse } from "@/types/DogTypes";
import React from "react";
import * as styles from "./DogCard.module.scss";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { AnimatePresence, motion } from "framer-motion";
import { AnimatedLeftDogCard, AnimatedRightDogCard } from "../models/Motion.model";
import TrashSvg from "./svg/TrashSvg";
import LikeSvg from "./svg/LikeSvg";
import store from "@/store/Store";
import InfoLine from "./InfoLine";

interface IDog {
  dog: DogApiResponse;
  duration: number;
  index: number;
}

const DogCard: React.FC<IDog> = ({ dog, duration, index }) => {
  const dogInfo = dog.breeds[0];
  const anim = index % 2 === 0 ? AnimatedLeftDogCard : AnimatedRightDogCard;

  return (
    <AnimatePresence>
      <motion.div className={styles.dog} {...anim} transition={{ duration: duration }}>
        <Card className={styles.dog_card}>
          <CardMedia
            className={styles.image}
            height={180}
            width={180}
            component={"img"}
            image={dog.url}
            alt={dogInfo.name}
          />
          <CardContent className={styles.content}>
            <Typography className={styles.name} variant="body1" component={"div"}>
              {dogInfo.name}
            </Typography>

            <InfoLine desc={dogInfo.life_span} title="Lifetime:" />
            <InfoLine desc={dogInfo.height.metric + " cm"} title="Height:" />
            <InfoLine desc={dogInfo.weight.metric + " kg"} title="Weight:" />
          </CardContent>
          <footer className={styles.footer}>
            <button
              style={{ padding: 0, width: "20px", height: "20px" }}
              className={styles.trash_btn}
            >
              <LikeSvg />
            </button>
            <button onClick={() => store.removeDog(dog)} className={styles.trash_btn}>
              <TrashSvg />
            </button>
          </footer>
        </Card>
      </motion.div>
    </AnimatePresence>
  );
};

export default DogCard;
