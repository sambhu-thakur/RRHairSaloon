import React from "react";
import { Card ,CardImg , CardTitle , CardImgOverlay , CardBody , CardText , Button} from "reactstrap";
class OurTeam extends React.Component{
    render(){
        const menu = this.props.aboutdetails.map((details) => {
            return (
                <div key={ details.id } className="col-12 col-md-4">    
                    <Card className=" m-3 m  shadow-lg p-3 mb-5 bg-light rounded  "  >

                        // <CardImg width="100%" src={ details.images } alt={ details.name } />
                        
                        
                                   
                               
                       
                        <CardBody>
                        <CardTitle className="text-center tex-uppercase"> { details.name }</CardTitle>
                        <CardText className="text-center">{details.description}</CardText>
                        </CardBody>
                        <Button  >Book {details.name}</Button>
                        
                    </Card>                
                </div>
            );
        });
        
        return(<div className="container">
              <h4 className="text-center mt-4">MEET OUR TEAM</h4>
              <hr/>
            <div className="row">

              
                {menu}
            </div>


        </div>);
    }
}
export default OurTeam;
