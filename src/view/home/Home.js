import React from 'react'
import homeImage from "../../asset/hero.png"
import SearchForm from '../../component/Search/SearchForm';
import "./_home.scss"
function Home() {
  return (
    <section className="hero">
      <div className="hero-background">
        <img src={homeImage} alt="" />
      </div>
      <div className="hero-content">
        <div className="title">
          <h1>TRAVEL TO EXPLORE</h1>
          {/*<p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            natus, enim ipsam magnam odit deserunt itaque? Minima earum velit
            tenetur!
  </p>*/}
        </div>
        <SearchForm/>
      </div>
    </section>
  );
}

export default Home