import axios from "axios";
import { useEffect, useState } from "react";
import {PATHS} from "../../config/filePath"
import {useNavigate} from "react-router-dom"
const FETCH_TYPES = {
  CITIES: "FETCH_CITIES",
  DISTRICTS: "FETCH_DISTRICTS",
  WARDS: "FETCH_WARDS",
};

async function fetchLocationOptions(fetchType, locationId) {
  let url;
  switch (fetchType) {
    case FETCH_TYPES.CITIES: {
      url = PATHS.CITIES;
      break;
    }
    case FETCH_TYPES.DISTRICTS: {
      url = `${PATHS.DISTRICTS}/${locationId}.json`;
      break;
    }
    case FETCH_TYPES.WARDS: {
      url = `${PATHS.WARDS}/${locationId}.json`;
      break;
    }
    default: {
      return [];
    }
  }
  const locations = (await axios.get(url)).data["data"];
  return locations.map(({ id, name }) => ({ value: id, label: name }));
}

async function fetchInitialData() {
  const { cityId, districtId} = (await axios.get(PATHS.LOCATION)).data;
  const [cities, districts] = await Promise.all([
    fetchLocationOptions(FETCH_TYPES.CITIES),
    fetchLocationOptions(FETCH_TYPES.DISTRICTS, cityId),

  ]);
  return {
    cityOptions: cities,
    districtOptions: districts,
    selectedCity: cities.find((c) => c.value === 297),
    selectedDistrict: null,
   
  };
}

function useLocationForm(shouldFetchInitialLocation) {
  const [state, setState] = useState({
    cityOptions: [],
    districtOptions: [],
    selectedCity: null,
    selectedDistrict: null,
    numberPeople:0,
  });
  
  const { selectedCity, selectedDistrict,numberPeople} = state;
  const navigate = useNavigate();


  useEffect(() => {
    (async function () {
      if (shouldFetchInitialLocation) {
        const initialData = await fetchInitialData();
        setState(initialData);
      } else {
        const options = await fetchLocationOptions(FETCH_TYPES.CITIES);
        setState({ ...state, cityOptions: options });
      }
    })();
  }, []);

  useEffect(() => {
    (async function () {
      if (!selectedCity) return;
      const options = await fetchLocationOptions(
        FETCH_TYPES.DISTRICTS,
        selectedCity.value
      );
      setState({ ...state, districtOptions: options });
    })();
  }, [selectedCity]);



  function onCitySelect(option) {
    setState({
      ...state,
      districtOptions: [],
      selectedCity: option,
      selectedDistrict: null,
      
    });
  }
  
   function onPeopleSelect(option) {
     setState({
       ...state,
       numberPeople:option
     });
   }

  function onDistrictSelect(option) {
    setState({
      ...state,
      selectedDistrict: option,
    
    });
  }

  

  function handleSubmit(e) {
    e.preventDefault();
    //window.location.reload();
    navigate("/area")
    console.log(state)
  }

  return { state, onCitySelect, onDistrictSelect,onPeopleSelect,handleSubmit };
}

export default useLocationForm;
