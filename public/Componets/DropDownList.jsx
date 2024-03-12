import React from "react";
import Select from "react-select/dist/declarations/src/Select";

const DropDownList = () => {
  const options = [
    { value: "Men's Bottom Wear", label: "Men's Bottom Wear" },
    { value: "Women Ethnic", label: "Women Ethnic" },
    { value: "Women Western", label: "Women Western" },
    { value: "Men Footwear", label: "Men Footwear" },
    { value: "Women Footwear", label: "Women Footwear" },
    { value: "Watches and Accessories", label: "Watches and Accessories" },
    { value: "Bags, Suitcases & Luggage", label: "Bags, Suitcases & Luggage" },
    { value: "Kids", label: "Kids" },
    { value: "Essentials", label: "Essentials" },
    { value: "Winter", label: "Winter" },
  ];

  return (
    <div>
      <Select options={options} />
    </div>
  );
};

export default DropDownList;
