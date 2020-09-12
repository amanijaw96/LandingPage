import React from "react";
import { HeroBox } from "./styled";
import Trends from "./components/Trends";

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
      <HeroBox></HeroBox>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-12 text-left mb-2">
            <span className="title"> Trends</span>
            <span className="dot ml-2" style={{ fontSize: 30 }}>
              .
            </span>
          </div>
          <div className="col-12 text-left mb-4 d-flex flex-row justify-content-between align-items-center">
            <h3 className="font-weight-bold">
              Check out some of the most popular packages
            </h3>
            <span className="ViewAll font-weight-bold">
              <span>{"View all"} </span>
              <i className="ml-2 fa fa-angle-right"></i>
            </span>
          </div>
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
  );
}
