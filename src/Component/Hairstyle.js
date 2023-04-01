import React from "react";
import { TopHairstyledetails } from "../shared/TopHairstyledetails";
import { Card, CardImg , CardBody , Button, CardTitle, CardSubtitle, CardText } from "reactstrap";
class HairStyle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            stlyledetails: TopHairstyledetails
        }
    }



render(){
    const styledetails =this.state.stlyledetails.map((style)=>{
        return(<div key={style.id} className="col-12 col-md-4">
                 
            <Card    className=" m-3 m  shadow-lg p-3 mb-5 bg-light rounded  "  >
               <CardImg height={350} width="100%" src={style.images} alt={style.service} />
                <CardBody>
                    <CardTitle className="text-uppercase">{style.service}</CardTitle>
                    <CardSubtitle >{style.Price}</CardSubtitle>
                    <CardText>Time: {style.duration}</CardText>
                
                </CardBody>
                <Button  >Book Appointment</Button>
                

            </Card>

        </div>)
    })
    return(<div className='container'>
        <h4 className="mt-4"> TOP HARI STYLES</h4>
        <hr/>   
        <div className="row">
            {styledetails}
        </div>

    </div>)
}
}
export default HairStyle;