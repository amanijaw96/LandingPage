import React from "react";
import { HeroBox } from "./styled";
import Trends from "./components/Trends";
import Search from "./components/Search";
import "./Home_scss.scss";
import Tabs from "./components/Tabs";

export default function Home(props) {
  const [trends, setTrends] = React.useState([
    {
      images: [
        "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1485415009267-44562f07e23f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1498063401574-13cbee350467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      ],
      title: "Indulge in a weekend gataway at Park Hyatt",
      Information: ["3 Nights", "Adults"],
      Location: ["Beirut", "Amman", "Cairo", "Japan", "china", "london"],
      Data: [
        {
          icon: "fa fa-bell",
          Info: ["Park Hyatt Beirut", "5 Stars", "luxurious"],
        },
        {
          icon: "fa fa-bed",
          Info: ["Suite", "Breakfast"],
        },
        {
          icon: "fa fa-car",
          Info: ["Premuim Car"],
        },
        {
          icon: "fa fa-puzzle-piece",
          Info: ["Spa"],
        },
      ],
      User: {
        firstName: "Cathy",
        Lastname: "Al Tayer",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      },
      price: "AED 685",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1485415009267-44562f07e23f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1498063401574-13cbee350467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      ],
      title: "Indulge in a weekend gataway at Park Hyatt",
      Information: ["3 Nights", "Adults"],
      Location: ["Beirut", "Amman", "Cairo", "Japan", "china", "london"],
      Data: [
        {
          icon: "fa fa-bell",
          Info: ["Park Hyatt Beirut", "5 Stars", "luxurious"],
        },
        {
          icon: "fa fa-bed",
          Info: ["Suite", "Breakfast"],
        },
        {
          icon: "fa fa-car",
          Info: ["Premuim Car"],
        },
        {
          icon: "fa fa-puzzle-piece",
          Info: ["Spa"],
        },
      ],
      User: {
        firstName: "Cathy",
        Lastname: "Al Tayer",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      },
      price: "AED 685",
    },
    {
      images: [
        "https://images.unsplash.com/photo-1498307833015-e7b400441eb8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1485415009267-44562f07e23f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
        "https://images.unsplash.com/photo-1498063401574-13cbee350467?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      ],
      title: "Indulge in a weekend gataway at Park Hyatt",
      Information: ["3 Nights", "Adults"],
      Location: ["Beirut", "Amman", "Cairo", "Japan", "china", "london"],
      Data: [
        {
          icon: "fa fa-bell",
          Info: ["Park Hyatt Beirut", "5 Stars", "luxurious"],
        },
        {
          icon: "fa fa-bed",
          Info: ["Suite", "Breakfast"],
        },
        {
          icon: "fa fa-car",
          Info: ["Premuim Car"],
        },
        {
          icon: "fa fa-puzzle-piece",
          Info: ["Spa"],
        },
      ],
      User: {
        firstName: "Cathy",
        Lastname: "Al Tayer",
        image:
          "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60",
      },
      price: "AED 685",
    },
  ]);

  return (
    <div>
      <HeroBox>
        <div className="container mt-5 pt-5">
          <h1 className="HeroText text-left pb-3">
            Stays tailored to your every need
          </h1>
          <p className="HeroSubText text-left  pb-3 mb-5 d-none d-md-inline">
            Dont waste hours searching generic holiday sites,we'll help you
            create the perfect stay hassle free.
          </p>
          <Tabs className="mt-5"></Tabs>
          <Search></Search>
        </div>
      </HeroBox>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12 text-left mb-2">
            <span className="title"> Trends</span>
            <span className="dot ml-2" style={{ fontSize: 30 }}>
              .
            </span>
          </div>
          <div className="col-12 text-left mb-4 d-flex flex-md-row flex-column justify-content-md-between align-md-items-center align-items-start">
            <h3 className="TrendingTitle font-weight-bold">
              Check out some of the most popular packages
            </h3>
            <span className="ViewAll font-weight-bold">
              <span>{"View all"} </span>
              <i className="ml-2 fa fa-angle-right"></i>
            </span>
          </div>
          <div
            className="col-12 pl-4 pl-lg-3 pr-lg-3 scrollRow"
            style={{ overflow: "auto" }}
          >
            <div className="row" style={{ minWidth: 1115 }}>
              {trends.map((trend) => {
                return (
                  <div className="col-4">
                    <Trends trend={trend}></Trends>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
