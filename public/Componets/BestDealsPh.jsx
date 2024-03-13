import React from "react";
import styles from "./BestDealsPh.module.css";
import SqCards from "./SqCards";
const BestDealsPh = (props) => {
  const bestDealsPhData = [
    {
      bestDealsPhPhoto:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/m/g/-original-imagxaqtqng2hpxn.jpeg?q=70",
      bestDealsPhName: "redmi 12 5G",
    },
    {
      bestDealsPhPhoto:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
      bestDealsPhName: "Iphone 15 pro max",
    },

    {
      bestDealsPhPhoto:
        "https://rukminim2.flixcart.com/image/400/400/xif0q/mobile/w/i/d/-original-imagwzrguaee4pz6.jpeg?q=70",
      bestDealsPhName: "Poco x6 pro",
    },
    {
      bestDealsPhPhoto:
        "https://rukminim2.flixcart.com/image/400/400/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70",
      bestDealsPhName: "vivo t2 pro",
    },
    {
      bestDealsPhPhoto:
        "https://rukminim2.flixcart.com/image/400/400/xif0q/mobile/9/x/f/-original-imagxtnehfg5pcwt.jpeg?q=70",
      bestDealsPhName: "infinix hot 40i",
    },
    {
      bestDealsPhPhoto:
        "https://rukminim2.flixcart.com/image/400/400/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70",
      bestDealsPhName: "moto g34",
    },
    {
      bestDealsPhPhoto:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/m/g/-original-imagxaqtqng2hpxn.jpeg?q=70",
      bestDealsPhName: "redmi 12 5G",
    },
    {
      bestDealsPhPhoto:
        "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/m/g/-original-imagxaqtqng2hpxn.jpeg?q=70",
      bestDealsPhName: "redmi 12 5G",
    },
  ];

  return (
    <>
      <div className={styles.bestDealsPhotoCSS}>
        {bestDealsPhData.map((s) => {
          return (
            <div className={styles.bestDealsImg}>
              <img src={s.bestDealsPhPhoto} alt="" />
              <p>{s.bestDealsPhName}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BestDealsPh;
