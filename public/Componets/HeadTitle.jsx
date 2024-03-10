import "./HeadTitle.css";
import { CiSearch } from "react-icons/ci";
import { VscAccount } from "react-icons/vsc";
import { IoIosArrowDown } from "react-icons/io";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FaCartShopping } from "react-icons/fa6";
import { AiOutlineShop } from "react-icons/ai";

function HeadTitle() {
  return (
    <>
      <div className="HeadTitle">
        <div className="HeadTitle-left">
          <div className="image">
            <img
              src="https://static-assets-web.flixcart.com/batman-returns/batman-returns/p/images/fkheaderlogo_exploreplus-44005d.svg"
              alt=""
            />
          </div>
          <div className="searchbar">
            <div className="search-icon">
              <CiSearch className="icon" />
            </div>
            <div className="search-input">
              <input
                type="text"
                placeholder="Search for products, Brands and More"
              />
            </div>
          </div>
        </div>

        <div className="HeadTitle-right">
          <div className="login ">
            <VscAccount className="login-logo hr-logo" />
            <p className="login-text hr-text">Login</p>
            <IoIosArrowDown className="down-logo" />
          </div>
          <div className="cart">
            <FaCartShopping className="cart-logo hr-logo" />
            <p className="cart-text hr-text">Cart</p>
          </div>
          <div className="seller">
            <AiOutlineShop className="seller-logo hr-logo" />
            <p className="seller-text hr-text">Become a Seller</p>
          </div>
          <div className="option">
            <BiDotsVerticalRounded />
          </div>
        </div>
      </div>
    </>
  );
}

export default HeadTitle;
