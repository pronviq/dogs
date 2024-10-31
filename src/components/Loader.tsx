import store from "@/store/Store";
import * as styles from "./Loader.module.scss";
import { observer } from "mobx-react-lite";

const Loader = observer(() => {
  return store.isLoading ? (
    <div className={styles.loader_cont}>
      <div className={styles.loader} />
    </div>
  ) : null;
});

export default Loader;
