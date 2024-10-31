import { Typography } from "@mui/material";
import * as styles from "./InfoLine.module.scss";
import EditSvg from "./svg/EditSvg";
import React, { useRef, useState } from "react";

interface IInfoLine {
  title: string;
  desc: string;
}

const InfoLine: React.FC<IInfoLine> = ({ title, desc }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [info, setInfo] = useState<string>(desc);
  const [isEditing, setEditing] = useState<boolean>(false);

  const switchEditing = () => {
    setEditing(true);
    setTimeout(() => {
      inputRef.current.focus();
    }, 0);
  };

  return (
    <Typography className={styles.text} variant="body1" component={"div"}>
      <span>{title}</span>
      {isEditing ? (
        <input
          onBlur={() => setEditing(false)}
          ref={inputRef}
          type="text"
          value={info}
          className={styles.text_info}
          onChange={(e) => setInfo(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              setEditing(false);
            }
          }}
        />
      ) : (
        <span className={styles.text_info}>{info}</span>
      )}
      <button onClick={switchEditing} className={styles.edit}>
        <EditSvg />
      </button>
    </Typography>
  );
};

export default InfoLine;
