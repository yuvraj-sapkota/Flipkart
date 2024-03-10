import BestDealsPh from "../public/Componets/BestDealsPh";
import HeadItems from "../public/Componets/HeadItems";
import "./App.css";

function App() {
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

  return (
    <>
      <div className="headItems">
        {headItemsData.map((hid) => {
          return (
            <HeadItems
              headItemsPhoto={hid.headItemsPhoto}
              headItemsName={hid.headItemsName}
            />
          );
        })}
      </div>

      <div className="fullCardBDSP">
        <div>
          <h3> Best Deals on Smartphones</h3>
        </div>

        <div className="bestDealsPh">
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
    </>
  );
}

export default App;
