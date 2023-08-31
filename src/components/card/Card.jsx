import React from "react";
import styles from "./card.module.css";
import Button from "../button/Button";

/**Asert import */
//import { ReactComponent as Icon } from "../../images/icon-sedans.svg";

const Card = ({ title = "SEDANS", description, style, btnStyle, Icon, label }) => {
  const Logo = () => (
    <div>
      {<Icon />}
    </div>
  );
  const CardTitle = () => (
    <div className={styles.card_title}>
      <h1>{title}</h1>
    </div>
  );

  const CardDescription = () => (
    <div className={styles.card_description}>
      <p>{description}</p>
    </div>
  );

  const CardContainer = ({ children }) => (
    <div className={`${styles.card_container} ${style}`}>{children}</div>
  );

  return (
    <div>
      <div>
        <CardContainer>
          {Icon && (
            <Logo />
          )}
          <CardTitle />
          <CardDescription />
          <Button label={label} btnStyle={btnStyle} />
        </CardContainer>
      </div>
    </div>
  );
};

export default Card;
