import React from "react";
import { useNavigate } from "react-router";
import "./_area_item.scss"
// TODO : xoay ngang hoac xoay doc / sua file area.scss
function AreaItem(props) {
  const navigate = useNavigate();
  const handleClick = ()=>{
    navigate("/area/1");
  }
  return (
    <div className="area-item" onClick={handleClick}>
      <div className="area-img">
        <img
          src={props.data.url}
          alt=""
        />
      </div>
      <div className="area-content">
        <div className="area-name">
          <h1>{props.data.name}</h1>
        </div>
        <h3 className="area-price">{props.data.price}</h3>
      </div>
    </div>
  );
}

export default AreaItem;
