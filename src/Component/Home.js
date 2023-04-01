import React from "react";
import CardComponent from "../shared/CardComponent";
import './home.css'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
class Home extends React.Component{
    render(){
        return(<div>
              <div className="jumbotron p-2"  >
         <div className="container">
                <div className="row row-header">
                    <div className="col-6">
                     <h1>RR Saloon</h1>
                     <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                     </div>
                     <div className="col-6  text-center">
                     <img src="assets/images/Logo.Png" height={200}/>
                     </div>
                     

                  

                 

                </div>
            </div>
         </div>
           <div className="container-fluid">
           <div className="row row-home" >
          <div className="col-6   " >
          <img src="assets/images/bg.Jpg" width='100%'/>
          </div>
          <div className="col-6 row-text ">
           <h1> Look amazing and fell unique at 
             RR Saloon
           </h1>
          </div>
        </div>
           </div>
             
           
        <div className="container">    
        
          
          
             <h3 className="text-center text-uppercase mt-5" >Our Vision & Team</h3>
             <div className="row">
             <div className="col-12  text-center ">
               <p className="text-capitalize"> Our Vision is to provide you a door step services for your comfortness in a single click</p>
               </div>
               <div className="col-12 text-center ">
             <p>  An artistic hair salon with a new approach and where our clients expectations are consistently surpassed.</p>
             </div>
             </div>
             <div className="row " >
               <h2 className="text-uppercase">Our Works</h2>
             <CardComponent/>
             

             </div>
           
             <h1 className="text-center text-uppercase mt-5" >What our clients says</h1>  
             </div>
             <div className="mb-5">
             <Carousel 
        showArrows={true}
        infiniteLoop={true}
        showThumbs={false}
        showStatus={false}
        autoPlay={true}
        interval={6100}
      >
        <div>
          <img src="assets/images/cimage1.Png" />
          <div className="myCarousel">
            <h3>Shirley Fultz</h3>
            <h4>Designer</h4>
            <p>
              It's freeing to be able to catch up on customized news and not be
              distracted by a social media element on the same site
            </p>
          </div>
        </div>

        <div>
          <img src="assets/images/cimage2.Png"  />
          <div className="myCarousel">
            <h3>Daniel Keystone</h3>
            <h4>Designer</h4>
            <p>
              The simple and intuitive design makes it easy for me use. I highly
              recommend Fetch to my peers.
            </p>
          </div>
        </div>

        <div>
          <img src="assets/images/cimage3.Png"  />
          <div className="myCarousel">
            <h3>Theo Sorel</h3>
            <h4>Designer</h4>
            <p>
              I enjoy catching up with Fetch on my laptop, or on my phone when
              I'm on the go!
            </p>
          </div>
        </div>
      </Carousel>
             </div>
           
            
         

        </div>
        )
    }
}
export default Home;