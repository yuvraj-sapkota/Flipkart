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

  // const bestDealsPhData = [
  //   {
  //     bestDealsPhPhoto:
  //       "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/m/g/-original-imagxaqtqng2hpxn.jpeg?q=70",
  //     bestDealsPhName: "redmi 12 5G",
  //   },
  //   {
  //     bestDealsPhPhoto:
  //       "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/h/d/9/-original-imagtc2qzgnnuhxh.jpeg?q=70",
  //     bestDealsPhName: "Iphone 15 pro max",
  //   },

  //   {
  //     bestDealsPhPhoto:
  //       "https://rukminim2.flixcart.com/image/400/400/xif0q/mobile/w/i/d/-original-imagwzrguaee4pz6.jpeg?q=70",
  //     bestDealsPhName: "Poco x6 pro",
  //   },
  //   {
  //     bestDealsPhPhoto:
  //       "https://rukminim2.flixcart.com/image/400/400/xif0q/mobile/5/y/8/-original-imagtt4mhqrzjs9r.jpeg?q=70",
  //     bestDealsPhName: "vivo t2 pro",
  //   },
  //   {
  //     bestDealsPhPhoto:
  //       "https://rukminim2.flixcart.com/image/400/400/xif0q/mobile/9/x/f/-original-imagxtnehfg5pcwt.jpeg?q=70",
  //     bestDealsPhName: "infinix hot 40i",
  //   },
  //   {
  //     bestDealsPhPhoto:
  //       "https://rukminim2.flixcart.com/image/400/400/xif0q/mobile/n/m/f/g34-5g-pb1v0002in-motorola-original-imagwu4rayqhgfjh.jpeg?q=70",
  //     bestDealsPhName: "moto g34",
  //   },
  //   {
  //     bestDealsPhPhoto:
  //       "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/m/g/-original-imagxaqtqng2hpxn.jpeg?q=70",
  //     bestDealsPhName: "redmi 12 5G",
  //   },
  //   {
  //     bestDealsPhPhoto:
  //       "https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/b/m/g/-original-imagxaqtqng2hpxn.jpeg?q=70",
  //     bestDealsPhName: "redmi 12 5G",
  //   },
  // ];

  const sqCardsData1 = [
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

  const sqCardsData2 = [
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/1f2e2549a466b88e.jpg?q=20",
    },
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/8c847eea35140ed6.jpg?q=20",
    },
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/3614e4f686524e06.jpg?q=20",
    },
  ];

  const sqCardsData3 = [
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/c12fadf31cbf9dbe.jpg?q=20",
    },
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/a2eea9122e7f6156.jpg?q=20",
    },
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/8294a573a7c58c88.jpg?q=20",
    },
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/bdfc3ca72ec76c07.jpg?q=20",
    },
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/7fa4e6cb5f895b93.jpeg?q=20",
    },
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/f8e8dadcd62818a3.jpeg?q=20",
    },
  ];

  const sqCardsData4 = [
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6453a761ceed71e9.jpg?q=20",
    },
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/6ddec3e3f7045ea0.jpg?q=20",
    },
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/09907533ef85933f.jpg?q=20",
    },
  ];

  const sqCardsData5 = [
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/d29f07670584cd8c.jpg?q=20",
    },
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/f2641edeba76d2d1.jpg?q=20",
    },
    {
      sqCardPhoto:
        "https://rukminim2.flixcart.com/fk-p-flap/520/280/image/c71cffc8efff3aa1.jpg?q=20",
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

        <BestDealsPh />
      </div>

      <div className={styles.sqCardsContainer}>
        <div className={styles.sqCards}>
          {sqCardsData1.map((scd) => {
            return <SqCards sqCardPhoto={scd.sqCardPhoto} />;
          })}
        </div>
      </div>

      {/* //this is for featured brands */}
      <div className={styles.sqCardsContainer}>
        <div className={styles.sqCards}>
          {sqCardsData2.map((scd) => {
            return <SqCards sqCardPhoto={scd.sqCardPhoto} />;
          })}
        </div>
      </div>

      {/* //this is for smart gadgets */}
      <div className={styles.sqCardsContainer}>
        <div className={styles.sqCards}>
          {sqCardsData3.map((scd) => {
            return <SqCards sqCardPhoto={scd.sqCardPhoto} />;
          })}
        </div>
      </div>

      {/* //this is for some gadgates portion */}
      <div className={styles.sqCardsContainer}>
        <div className={styles.sqCards}>
          {sqCardsData4.map((scd) => {
            return <SqCards sqCardPhoto={scd.sqCardPhoto} />;
          })}
        </div>
      </div>

      {/* //this is for last portion component card */}
      <div className={styles.sqCardsContainer}>
        <div className={styles.sqCards}>
          {sqCardsData5.map((scd) => {
            return <SqCards sqCardPhoto={scd.sqCardPhoto} />;
          })}
        </div>
      </div>
    </>
  );
};

export default MasterContainer;
