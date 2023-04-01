import React from "react";
import { Card ,CardImg , CardTitle , CardImgOverlay , CardBody , CardText , Button, CardSubtitle} from "reactstrap";
class Product extends React.Component{
    render(){
        const Item = this.props.productdetails.map((item) => {
            return (
                <div key={ item.id } className="col-12 col-md-4">    
                    <Card className=" m-3 m  shadow-lg p-3 mb-5 bg-white rounded  "  >

                        <CardImg height={400} width="100%" src={ item.images } alt={ item.name } />
                        
                        
                                   
                               
                       
                        <CardBody>
                        <CardTitle className="text-center"> { item.name }</CardTitle>
                        <CardText className="text-center">{item.description}</CardText>
                        <CardSubtitle className="text-center">{item.Price}</CardSubtitle>
                        <CardSubtitle className="text-center">{item.ratings}</CardSubtitle>
                        <CardSubtitle className="text-center">{item.weight}</CardSubtitle>
                        </CardBody>
                        <div className="btn-grp">
                        <Button className="btn btn-info" >Buy</Button>
                        <Button className="btn btn-danger" >Add to cart</Button>
                        </div>
                       
                        
                    </Card>                
                </div>
            );
        });
        
        return(<div className="container">
              <h4 className="text-center text-uppercase mt-4">Shop With Us</h4>
              <hr/>
            <div className="row">

              
                {Item}
            </div>


        </div>);
    }
}
export default Product;