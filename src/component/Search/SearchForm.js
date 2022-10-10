import React, { useState } from "react";
import "./_search.scss";
import useLocationForm from "./useLocationForm";
import Select from "react-select";
import {FaCity} from "react-icons/fa"
import {HiOutlineLocationMarker} from "react-icons/hi"
import {IoPeopleOutline} from "react-icons/io5"
import {BsSearch} from "react-icons/bs"
import useScroll from "../../hooks/useScroll";
const style = {
  control: (base) => ({
    ...base,
    width:160,
    border: 0,
    // This line disable the blue border
    boxShadow: "none",
  }),
};

function SearchForm() {
  const { state, onCitySelect, onDistrictSelect, onPeopleSelect,handleSubmit } =
    useLocationForm(true);

  const { cityOptions, districtOptions, selectedCity, selectedDistrict } =
    state;
  const [visible, setVisible] = useScroll(50);

  return (
    <form onSubmit={handleSubmit}>
      <div className= {`search ${visible ? "fixed" : ""}`}>
        <div className="hero-container">
          <FaCity />
          <Select
            className="select"
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            styles={style}
            name="cityId"
            key={`cityId_${selectedCity?.value}`}
            isDisabled={cityOptions.length === 0}
            options={cityOptions}
            onChange={(option) => onCitySelect(option)}
            placeholder="Tỉnh/Thành"
            defaultValue={selectedCity}
          />
        </div>
        <div className="vertical"></div>
        <div className="hero-container">
          <HiOutlineLocationMarker />
          <Select
            className="select"
            styles={style}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            name="districtId"
            key={`districtId_${selectedDistrict?.value}`}
            isDisabled={districtOptions.length === 0}
            options={districtOptions}
            onChange={(option) => onDistrictSelect(option)}
            placeholder="Quận/Huyện"
            defaultValue={selectedDistrict}
          />
        </div>
        <div className="vertical"></div>
        <div className="hero-container">
          <IoPeopleOutline />
          <Select
            name="number"
            className="select"
            styles={style}
            components={{
              DropdownIndicator: () => null,
              IndicatorSeparator: () => null,
            }}
            options={peopleOptions}
            onChange={(option) => onPeopleSelect(option)}
            placeholder="Số lượng"
          />
        </div>
        <button type="submit"><BsSearch/></button>
      </div>
    </form>
  );
}

export default SearchForm;

const peopleOptions = [
  { value: "5", label: "0-5 người" },
  { value: "25", label: "5-25 người" },
  { value: "50", label: "25-50 người" },
  { value: "100", label: "50-100 người" },
];
