import React from "react";
import DogCard from "./DogCard";
import * as styles from "./DogList.module.scss";
import Observer from "./Observer";
import { observer } from "mobx-react-lite";
import store from "@/store/Store";

const DogList = observer(() => {
  return (
    <div className={styles.doglist}>
      {store.dogs.map((dog, i) => (
        <React.Fragment key={i}>
          {i === store.dogs.length - 4 && <Observer />}
          <DogCard index={i} duration={0.2 * ((i - (i % 2)) % 8)} dog={dog} key={i} />
        </React.Fragment>
      ))}
      {store.dogs.length === 0 && <Observer />}
    </div>
  );
});

export default DogList;
