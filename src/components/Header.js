import React from "react";
import { Link } from "@reach/router";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const Header = () => {
  return (
    <nav className="header">
      {/* Logo */}
      <Link to="/">
        <img
          class="header__logo"
          src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
          alt=""
        />
      </Link>

      {/*  Search box */}
      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      {/* 3 Links and cart*/}
      <div className="header__nav">
        {/* 1st link */}
        <Link to="/login" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Hello User</span>
            <span className="header__optionLineTwo">Sign in</span>
          </div>
        </Link>

        {/* 2nd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>
        </Link>

        {/* 3rd link */}
        <Link to="/" className="header__link">
          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>
        </Link>

        {/* cart */}
        <Link to="/checkout" className="header__link">
          <div className="header__optionBasket">
            {/* Shopping basket icon */}
            <ShoppingCartIcon />

            {/* Number of items in the cart */}
            <span className="header__optionLineTwo header__basketCount">0</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
