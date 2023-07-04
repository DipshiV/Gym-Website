import React from "react";
import styles from "../../../styles/Carousal.module.css"
import  {data } from "../../../Data/UserDetails"
const Carousal = () => {
  return (
    <>
      <h1 className={styles.heading}>All Trainer List</h1>
      <div className={styles.slider}>
        {data.map((trainer) => (
          <div className={styles.slide}>
            <img src={trainer.urls.regular} alt={trainer.alt_description} />
          </div>
        ))}
      </div>
    </>
  );
};

export default Carousal;