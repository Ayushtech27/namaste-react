import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRarbFGOA8xl_IGcaB291JF16ZfgqEnfC5OxZn9xRFS&s"
        />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const resList = {
  info: {
    id: "17518",
    name: "KFC",
    cloudinaryImageId: "56c9ab92bd79745fd152a30fa2525426",
    locality: "Kalkaji",
    areaName: "Kalkaji",
    costForTwo: "₹400 for two",
    cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
    avgRating: 4.1,
    feeDetails: {
      restaurantId: "17518",
      fees: [
        {
          name: "BASE_DISTANCE",
          fee: 4500,
        },
        {
          name: "BASE_TIME",
        },
        {
          name: "ANCILLARY_SURGE_FEE",
        },
      ],
      totalFee: 4500,
    },
    parentId: "547",
    avgRatingString: "4.1",
    totalRatingsString: "10K+",
    sla: {
      deliveryTime: 19,
      lastMileTravel: 1.7,
      serviceability: "SERVICEABLE",
      slaString: "19 mins",
      lastMileTravelString: "1.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2023-10-24 03:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "UPTO ₹50",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        mediaType: "ADS_MEDIA_ENUM_IMAGE",
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
  },
  analytics: {},
  cta: {
    link: "https://www.swiggy.com/restaurants/kfc-kalkaji-delhi-17518",
    type: "WEBLINK",
  },
};

const RestaurantCard = (props) => {
  const { resData } = props;
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1024/tye1xtotij68ujusnw8c"
      />
      <h3>{resData.info.name}</h3>
      <h4>{resData.info.cuisines.join(", ")}</h4>
      <h4>{resData.info.avgRating} Stars</h4>
      <h4>{resData.info.costForTwo}</h4>
      <h4>{resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

const Body = () => {
  return (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        <RestaurantCard resData={resList} />
      </div>
    </div>
  );
};

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
