import React from "react";
import "./Header.css";

const Header = () => (
  <header>
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>

        
        <div className="carousel-inner" role="listbox">
  
          <div className="carousel-item active carousel-item1" >
            <div className="carousel-caption d-none d-md-block">
              <h3>Where to Eat</h3>
             
            </div>
          </div>
        
          <div className="carousel-item carousel-item2" >
            <div className="carousel-caption d-none d-md-block">
              <h3>Where to Stay</h3>
             
            </div>
          </div>
       
          <div className="carousel-item carousel-item3" >
            <div className="carousel-caption d-none d-md-block">
              <h3>Where to Play</h3>
             
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    </header>
);
export default Header;

