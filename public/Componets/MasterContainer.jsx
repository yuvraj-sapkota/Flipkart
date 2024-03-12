import HeadTitle from "./HeadTitle";
import HeadItems from "./HeadItems";
import BestDealsPh from "./BestDealsPh";
import styles from "./MasterContainer.module.css";
import SqCards from "./SqCards";

const MasterContainer = () => {
  const headItemsData = [
    {
      headItemsPhoto:
        "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",

      headItemsName: "Grocery",
    },

    {
      headItemsPhoto:
        "https://rukminim2.flixcart.com/flap/128/128/image/22fddf3c7da4c4f4.png?q=100",

      headItemsName: "Mobiles",
    },
    {
      headItemsPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/128/128/image/0139228b2f7eb413.jpg?q=100",

      headItemsName: "Appiances",
    },

    {
      headItemsPhoto:
        "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",

      headItemsName: "Grocery",
    },
    {
      headItemsPhoto:
        "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",

      headItemsName: "Grocery",
    },
    {
      headItemsPhoto:
        "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",

      headItemsName: "Grocery",
    },
    {
      headItemsPhoto:
        "https://rukminim2.flixcart.com/flap/128/128/image/29327f40e9c4d26b.png?q=100",

      headItemsName: "Grocery",
    },
  ];

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

  const sqCardsData = [
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/8f93c8d6e486e2a3.jpg?q=20",
    },
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/b5cf664dece6236c.jpg?q=20",
    },
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/5a396d1080e7beb6.jpg?q=20",
    },
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/f499fc8607c6fef2.jpg?q=20",
    },
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/cb76b063540f90fc.jpg?q=20",
    },
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/320/170/image/ec6cf773ae886bd7.jpg?q=20",
    },
  ];
  return (
    <>
      <HeadTitle />
      {/* <HeadingItems /> */}
      <div className={styles.headItems}>
        {headItemsData.map((hid) => {
          return (
            <HeadItems
              headItemsPhoto={hid.headItemsPhoto}
              headItemsName={hid.headItemsName}
            />
          );
        })}
      </div>

      <div className={styles.fullCardBDSP}>
        <div>
          <h3 className={styles.bestDealsTitle}> Best Deals on Smartphones</h3>
        </div>

        <div className={styles.bestDealsPh}>
          {bestDealsPhData.map((bdpd) => {
            return (
              <BestDealsPh
                bestDealsPhPhoto={bdpd.bestDealsPhPhoto}
                bestDealsPhName={bdpd.bestDealsPhName}
              />
            );
          })}
        </div>
      </div>

      <div className={styles.sqCardsContainer}>
        <div className={styles.sqCards}>
          {sqCardsData.map((scd) => {
            return <SqCards sqCardPhoto={scd.sqCardPhoto} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MasterContainer;
