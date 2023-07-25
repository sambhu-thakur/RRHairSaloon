import React from "react";

import { Card ,CardImg , CardTitle , CardImgOverlay , CardBody , CardText , Button} from "reactstrap";
class Services extends  React.Component{

    
   
    render(){
    
    
   
            
    const service = this.props.servicedetails.map((details) => {
        return (<div key={details.id} className=" col-12 col-md-4" >
           
             
             
            <Card    className=" m-3 m  shadow-lg p-3 mb-5 bg-light rounded  "  >
               // <CardImg width="100%" height={400} src={details.images} alt={details.name} />
                <CardBody>
                    
                
                </CardBody>
                <Button  >{details.name}</Button>

            </Card>


        </div>)
    });
    return ( <div className="services">

  
    <div className="container ">

         
            <h1 className="text-center" > SERVICES</h1>
           <div className="row">
               {service}
              
           </div>
     
           </div>  
       
    </div>)
}
}
export default Services;
