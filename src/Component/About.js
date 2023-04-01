import React from "react";
class About extends React.Component{
    render(){
        
    
        
    return (
        <div> 
           
    <div className="container">
    <h1>About us</h1>
    <hr/>
        <div className="row mb-5 mt-4">
            <div className="col-12 col-md-6" >
                <img src="assets/images/bg1.jpg" width='100%' height={580}/>
            </div>
            <div className="col-12 col-md-6" >
            <h1>Our History</h1>
                
               <p className="p-3 About-text"> RR Saloon was the first saloon in Imphal , it start its journey in 1980's  <br/>
                   Initialy it was first started and  managed by tow brothers Ram Kumar Thakur and Raj Kumar Thakur
                   the founder of RR Saloon,  and later it started giving employment to the people who were dedicated
                   and mastering the art of hairstyling. And from the begning till noww RR saloon has been awarded and
                   reacognized as the best saloon services provide in Imphal. <br/>
                   Orginally RR saloon is populary  known as R.k Hair Cutting Saloon .
                 
                   
               </p>
            </div>
            <i class="fas fa-quote-left fa-xs text-primary"></i>
               <p>
                  We are the top 1 Hair Saloon services provide with mor the <span>40+</span> years of experince.we belif in providing top customer satifaction in Grooming and makeup  </p> 
                <i class="fas fa-quote-right fa-xs text-primary"></i>
                <blockquote class="blockquote">
                <p class="pb-3">
                  <i class="fas fa-quote-left fa-xs text-primary"></i>
                  <span class="lead font-italic">Many of life's failures are people who did not realize how close they were to success when they gave up.</span>
                  <i class="fas fa-quote-right fa-xs text-primary"></i>
                </p>
              </blockquote>
        
        </div>                
    </div>
        <div className="row">
            <div className="col-12 opening-hours ">
                <h3>Opening Hours </h3>
                    <p>Monday : <span>9:00 A.M - 10:00 P.M</span></p>
                    <p>TUESDAY: <span>9:00 A.M - 10:00 P.M</span></p>
                    <p>WEDNESDAY : <span>9:00 A.M - 10:00 P.M</span></p>
                    <p>THURSDAY: <span>9:00 A.M - 10:00 P.M</span></p>
                    <p>FRIDAY : <span>9:00 A.M - 10:00 P.M</span></p>
                    <p>SATURDAY : <span>9:00 A.M - 10:00 P.M</span></p>
                    <p>SUNDAY: <span>9:00 A.M - 10:00 P.M</span></p>
                    <p>EVERY MONTH LAST TUESDAY CLOSED</p>

            </div>
        </div>
    </div>)
}
}
export default About;