import React from "react";
import "./_service_item.scss"
function ServiceItem(props) {
  return (
    <div className="service-item">
      <div className="service-img">
        <img
          src={props.data.url}
          alt=""
        />
      </div>
      <div className="service-content">
        <div className="service-title">
          <h3>{props.data.name}</h3>
        </div>
        <div className="service-intro">
          <p>
{props.data.desc}
          </p>
        </div>
        <div className="upload-date">{props.data.date}</div>
      </div>
    </div>
  );
}

export default ServiceItem;
