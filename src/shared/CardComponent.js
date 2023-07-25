import React from "react";
import { Card , CardImg , CardGroup } from "reactstrap";
function  CardComponent () {
  
        return(<div>  
           <div className="row row-cols-1 row-cols-md-3 g-4">
  <div className="col shadow-lg p-1 mb-1 bg-white rounded ">
    <div className="card ">
      // <img src="assets/images/highlight.jpg" class="card-img-top" alt="..." height={340}/>
   
    </div>
  </div>
  <div className="col shadow-lg p-1 mb-1 bg-white rounded  ">
    <div className="card ">
      // <img src="assets/images/style1.jpg" class="card-img-top" alt="..." height={350}/>
   
    </div>
  </div>
  <div className="col  shadow-lg p-1 mb-1 bg-white rounded  ">
    <div className="card ">
      <img src="assets/images/Haircut.jpg" class="card-img-top" alt="..." height={350}/>
   
    </div>
  </div>
  <div className="col shadow-lg p-1 mb-1 bg-white rounded  ">
    <div className="card ">
      // <img src="assets/images/Fade-Hairstyles.jpg" class="card-img-top" alt="..." height={350}/>
   
    </div>
  </div>
  <div className="col  shadow-lg p-1 mb-1 bg-white rounded  ">
    <div className="card ">
      // <img src="assets/images/color.jpg" class="card-img-top" alt="..." height={350}/>
   
    </div>
  </div>
  <div className="col  shadow-lg p-1 mb-1 bg-white rounded  ">
    <div className="card h-100">
      // <img src="assets/images/style1.jpg" class="card-img-top" alt="..." height={350}/>
   
    </div>
  </div>
  </div>
        </div>)
    }

export default  CardComponent ;
