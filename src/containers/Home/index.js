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
          {trends.map((trend) => {
            return (
              <div className="col-lg-4">
                <Trends trend={trend}></Trends>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
