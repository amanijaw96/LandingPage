import React from "react";
import "./Tabs.scss";

export default function Tabs() {
  const [active, setActive] = React.useState(0);
  return (
    <div className="d-flex">
      <span
        className={
          active === 0
            ? "activeTab SearchTabs font-weight-bold"
            : "SearchTabs font-weight-bold"
        }
        onClick={() => setActive(0)}
      >
        Travel
      </span>
      <span
        className={
          active === 1
            ? "activeTab SearchTabs font-weight-bold"
            : "SearchTabs font-weight-bold"
        }
        onClick={() => setActive(1)}
      >
        Stay
      </span>
    </div>
  );
}
