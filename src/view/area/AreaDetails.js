import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import HouseItem from "../../component/House/HouseItem";
import ServiceItem from "../../component/House/ServiceItem";
import ImageList from "../../component/ImageList/ImageList";
import useScroll from "../../hooks/useScroll";
import "./_area_detail.scss";
import { useParams } from "react-router";
import Modal
 from "../../component/Modal/Modal";
//tach service list thanh component rieng
function AreaDetails() {
  const [visible, setVisible] = useScroll(600);
   const [openModal, setOpenModal] = useState(false);
   const {areaId} = useParams();
  const navigate = useNavigate();
  console.log("Areaid:"+areaId);
   const handleClick = ()=>{
      setOpenModal(true);
    // navigate("/chat");
   }
  
  return (
    <>
     <Modal open={openModal} onClose={() => setOpenModal(false)} />
    <section className="area-details">
      {visible && (
        <div className="area-sticky">
          <div className="area-name">
            <p className="name-title">Giá từ</p>
            <p className="area-price">400.000 - 500.000 đ</p>
            <p className="name-title">/đêm</p>
          </div>
          <button onClick={handleClick}>Tư vấn ngay</button>
        </div>
      )}
      <div className="container">
        <div className="area-info">
          <div className="area-name">
            <h1>Onsen Villas Resort</h1>
          </div>
          <div className="area-desc">
            <p>
              Đỗ xe và Wi-Fi luôn miễn phí, vì vậy quý khách có thể giữ liên
              lạc, đến và đi tùy ý. Nằm ở vị trí trung tâm tại Phu?c M? của Đà
              Nẵng, chỗ nghỉ này đặt quý khách ở gần các điểm thu hút và tùy
            </p>
          </div>
          <div className="button">
            <button onClick={handleClick}>Tư vấn ngay</button>
          </div>
        </div>

        {/* tao component itemList */}
        <ImageList name={"Ảnh quang cảnh"} />
        <ImageList name={"Ảnh dịch vụ"} />
        <div className="houses">
          <div className="heading">
            <h1 className="title">Danh sách căn</h1>
          </div>
          <div className="house-lists">
            {houses.map((house) => (
              <HouseItem data={house} />
            ))}
          </div>
        </div>

        <div className="services">
          <div className="heading">
            <h1 className="title">Dịch vụ</h1>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <ServiceItem data={service} />
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default AreaDetails;

const houses = [
  {
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
    name: "Delux family",
    desc: " Đặt KHÔNG cần thanh toán trước! Tiết kiệm cho đến khi nhận phòng! Đặt KHÔNG cần thanh toán trước! Tiết kiệm cho đến khi nhận phòng! Đặt",
    price: "404.800 đ",
  },
  {
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
    name: "Delux family",
    desc: " Đặt KHÔNG cần thanh toán trước! Tiết kiệm cho đến khi nhận phòng! Đặt KHÔNG cần thanh toán trước! Tiết kiệm cho đến khi nhận phòng! Đặt",
    price: "404.800 đ",
  },
  {
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
    name: "Delux family",
    desc: " Đặt KHÔNG cần thanh toán trước! Tiết kiệm cho đến khi nhận phòng! Đặt KHÔNG cần thanh toán trước! Tiết kiệm cho đến khi nhận phòng! Đặt",
    price: "404.800 đ",
  },
  {
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
    name: "Delux family",
    desc: " Đặt KHÔNG cần thanh toán trước! Tiết kiệm cho đến khi nhận phòng! Đặt KHÔNG cần thanh toán trước! Tiết kiệm cho đến khi nhận phòng! Đặt",
    price: "404.800 đ",
  },
  {
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
    name: "Delux family",
    desc: " Đặt KHÔNG cần thanh toán trước! Tiết kiệm cho đến khi nhận phòng! Đặt KHÔNG cần thanh toán trước! Tiết kiệm cho đến khi nhận phòng! Đặt",
    price: "404.800 đ",
  },
  {
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
    name: "Delux family",
    desc: " Đặt KHÔNG cần thanh toán trước! Tiết kiệm cho đến khi nhận phòng! Đặt KHÔNG cần thanh toán trước! Tiết kiệm cho đến khi nhận phòng! Đặt",
    price: "404.800 đ",
  },
  {
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
    name: "Delux family",
    desc: " Đặt KHÔNG cần thanh toán trước! Tiết kiệm cho đến khi nhận phòng! Đặt KHÔNG cần thanh toán trước! Tiết kiệm cho đến khi nhận phòng! Đặt",
    price: "404.800 đ",
  },
  {
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
    name: "Delux family",
    desc: " Đặt KHÔNG cần thanh toán trước! Tiết kiệm cho đến khi nhận phòng! Đặt KHÔNG cần thanh toán trước! Tiết kiệm cho đến khi nhận phòng! Đặt",
    price: "404.800 đ",
  },
 
];

const services = [
  {
    name: "Life Is A Journey,Not A Destination",
    desc: "Lorem imsum Dolor Sit Amet Consectetur ADIPISICING eLIT.pARIATUR,nATUS",
    date: "23/09/2022",
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
  },
  {
    name: "Life Is A Journey,Not A Destination",
    desc: "Lorem imsum Dolor Sit Amet Consectetur ADIPISICING eLIT.pARIATUR,nATUS",
    date: "23/09/2022",
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
  },
  {
    name: "Life Is A Journey,Not A Destination",
    desc: "Lorem imsum Dolor Sit Amet Consectetur ADIPISICING eLIT.pARIATUR,nATUS",
    date: "23/09/2022",
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
  },
  {
    name: "Life Is A Journey,Not A Destination",
    desc: "Lorem imsum Dolor Sit Amet Consectetur ADIPISICING eLIT.pARIATUR,nATUS",
    date: "23/09/2022",
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
  },
  {
    name: "Life Is A Journey,Not A Destination",
    desc: "Lorem imsum Dolor Sit Amet Consectetur ADIPISICING eLIT.pARIATUR,nATUS",
    date: "23/09/2022",
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
  },
  {
    name: "Life Is A Journey,Not A Destination",
    desc: "Lorem imsum Dolor Sit Amet Consectetur ADIPISICING eLIT.pARIATUR,nATUS",
    date: "23/09/2022",
    url: "https://nghiduongngoaio.com/wp-content/uploads/2022/02/canh-quan-48.jpg",
  },
];
