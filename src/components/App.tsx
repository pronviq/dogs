import { observer } from "mobx-react-lite";
import * as styles from "./App.module.scss";
import DogList from "./DogList";
import Loader from "./Loader";
import DogLooking from "./svg/DogLooking";
import Thought from "./svg/Thought";
import Heart from "./svg/Heart";
import HeaderDogs from "./HeaderDogs";

const App = observer(() => {
  return (
    <div className={styles.app}>
      <HeaderDogs />
      <DogList />
      <Loader />
      <div className={styles.thought}>
        <div className={styles.love}>
          <Heart />
        </div>
        <Thought />
      </div>
      <div className={styles.dog_looking}>
        <DogLooking />
      </div>
    </div>
  );
});

export default App;
