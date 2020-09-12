import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./trends_styled.scss";

const renderInfo = (Information) => {
  return Information.map((info, index) => {
    return index < 3 ? (
      <span>
        <span
          className={index === 0 ? "mr-2 text-left" : "mr-2 text-left ml-2 "}
        >
          {info}
        </span>
        {index !== Information.length - 1 && index !== 2 ? (
          <span className="dot">.</span>
        ) : null}
      </span>
    ) : null;
  });
};

const renderdata = (data) => {
  return (
    <div className="d-flex mt-2 mb-2 align-items-center">
      <i className={`${data.icon} mr-3`}></i>
      {data.Info.map((info, index) => {
        return index < 2 ? (
          <>
            <span
              className={
                index === 0 ? "mr-2 text-left" : "mr-2 text-left ml-2 "
              }
            >
              {info}
            </span>
            {index !== data.Info.length - 1 && index !== 1 ? (
              <span>.</span>
            ) : null}
          </>
        ) : (
          "+ other"
        );
      })}
    </div>
  );
};

export default function Trends(props) {
  return (
    <div className="trends card" style={{ minHeight: 500 }}>
      <Carousel showArrows={false} showThumbs={false} showStatus={false}>
        {props.trend.images.map((img) => {
          return (
            <div className="h-100">
              <img className="h-100" alt="img" src={img} />
            </div>
          );
        })}
      </Carousel>
      <div className="p-3 text-left">
        <p className="title text-left mt-2 font-weight-bold mb-1 ">
          {props.trend.title}
        </p>
        {renderInfo(props.trend.Information)}
        {props.trend.Information.length > 3
          ? `+ ${props.trend.Information.length - 3} More`
          : null}
        <br></br>
        <div className="mt-3">
          {renderInfo(props.trend.Location)}
          {props.trend.Location.length > 3
            ? `+ ${props.trend.Location.length - 3} More`
            : null}
        </div>
        <div className="mt-3">
          {props.trend.Data.map((data) => {
            return renderdata(data);
          })}
        </div>
        <div className="d-flex justify-content-between align-items-center mt-5 pb-2">
          <div className="d-flex align-items-center">
            <div className="profileImage ">
              <img
                src={props.trend.User.image}
                alt="profile"
                className="profileImage w-100 h-100"
              />
            </div>
            <div className="d-flex flex-column ml-3 ">
              <span className="font-weight-bold">
                {props.trend.User.firstName}
              </span>
              <span>{props.trend.User.Lastname}</span>
            </div>
          </div>

          <div className="d-flex flex-column ml-3 priceBox">
            <span>From</span>
            <span className="font-weight-bold">{props.trend.price}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
