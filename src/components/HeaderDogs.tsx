import * as styles from "./HeaderDogs.module.scss";

const HeaderDogs = () => {
  return (
    <div className={styles.headerdogs}>
      <img
        className={styles.headerdog1}
        src="https://val-alt.github.io/cats-dogs/assets/template/img/puppy_dogs_02.png"
        alt=""
      />
      <img
        className={styles.headerdog2}
        src="https://val-alt.github.io/cats-dogs/assets/template/img/puppy_dogs_03.png"
        alt=""
      />
      <img
        className={styles.headerdog3}
        src="https://val-alt.github.io/cats-dogs/assets/template/img/puppy_dogs_04.png"
        alt=""
      />
      <img
        className={styles.headerdog4}
        src="https://val-alt.github.io/cats-dogs/assets/template/img/puppy_dogs_05.png"
        alt=""
      />
      <img
        className={styles.headerdog5}
        src="https://val-alt.github.io/cats-dogs/assets/template/img/puppy_dogs_06.png"
        alt=""
      />
      <img
        className={styles.headerdog6}
        src="https://val-alt.github.io/cats-dogs/assets/template/img/puppy_dogs_07.png"
        alt=""
      />
    </div>
  );
};

export default HeaderDogs;
