import React from 'react'
import {FcViewDetails} from "react-icons/fc"
import {MdOutlineBedroomParent} from "react-icons/md"
import { useNavigate } from 'react-router';
import "./_house_item.scss"
function HouseItem(props) {
    const navigate =useNavigate();
    const handleClick = ()=>{
        navigate("/area/1/2");
    }
  return (
    <div className="house-item" onClick={handleClick}>
      <div className="house-img">
        <img
          src={props.data.url}
          alt=""
        />
      </div>
      <div className="house-content">
        <div className="house-name">
          <h3>{props.data.name}</h3>
        </div>
        <div className="house-intro">
          <div className="intro-item">
            <p>
            {props.data.desc}
            </p>
          </div>
          <div className="intro-price">
            <div className="house-price">{props.data.price}</div>
            <button>Xem chi tiết</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HouseItem