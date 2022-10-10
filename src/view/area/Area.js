import React from 'react'
import SearchForm from "../../component/Search/SearchForm";
import "./_area.scss"
import AreaItem from "../../component/Area/AreaItem"
function Area() {
  // Dispatch du lieu chat
  
  return (
    <section className="area">
      <div className="container">
        <div className="area-container">
          <SearchForm />
        </div>
        <div className="area-results">
          <div className="title">
            <h1>Đã tìm thấy 7 khu nghỉ dưỡng</h1>
          </div>
          <div className="area-lists">
           {datas.map((data)=>(
               <AreaItem data={data}/>
           ))

           }
          </div>
        </div>
      </div>
    </section>
  );
}

export default Area

const datas = [
  {
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
    name: "Onsen Villas Resort, Dân Hòa, Kỳ Sơn, Hoà Bình",
    price: "1.300.000 ~ 4.500.000/đêm",
  },
  {
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
    name: "Onsen Villas Resort, Dân Hòa, Kỳ Sơn, Hoà Bình",
    price: "1.300.000 ~ 4.500.000/đêm",
  },
  {
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
    name: "Onsen Villas Resort, Dân Hòa, Kỳ Sơn, Hoà Bình",
    price: "1.300.000 ~ 4.500.000/đêm",
  },
  {
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
    name: "Onsen Villas Resort, Dân Hòa, Kỳ Sơn, Hoà Bình",
    price: "1.300.000 ~ 4.500.000/đêm",
  },
  {
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
    name: "Onsen Villas Resort, Dân Hòa, Kỳ Sơn, Hoà Bình",
    price: "1.300.000 ~ 4.500.000/đêm",
  },
  {
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
    name: "Onsen Villas Resort, Dân Hòa, Kỳ Sơn, Hoà Bình",
    price: "1.300.000 ~ 4.500.000/đêm",
  },
  {
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
    name: "Onsen Villas Resort, Dân Hòa, Kỳ Sơn, Hoà Bình",
    price: "1.300.000 ~ 4.500.000/đêm",
  }
];