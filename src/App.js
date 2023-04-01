import './App.css';
import React from 'react';
import Header from './Component/Header';
import Footer from './Component/FooterComponent';
import Home from './Component/Home';
import About from './Component/About';
import Services from './Component/Services';
import Contact from './Component/contact';
import Product from './Component/product';
import OurTeam from './Component/TeamComponent';

import { ServiceDetails } from './shared/servicesDetails';
import { BrowserRouter as Router , Routes, Route , Navigate} from 'react-router-dom';
import { AboutDetails } from './shared/aboutdetails';

import { ProductDetails } from './shared/productdetail';
import HairStyle from './Component/Hairstyle';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      aboutdetails : AboutDetails,
      servicedetails: ServiceDetails,
      productdetails: ProductDetails,
      
     
    }
  }
  render(){

  
  return (
    <div className="App">
     

      <Router>
      <Header/>
      <Routes>
          
          <Route path='/home' exact element={<Home/>} ></Route>
          <Route path='/About' exact  element={<About/>} ></Route>
          <Route path='/services' exact element={<Services servicedetails ={this.state.servicedetails}  />} ></Route>
          <Route path='/Contact'  exact element={<Contact/>} ></Route>
          <Route path='/product'  exact element={<Product productdetails = {this.state.productdetails} />} ></Route>
          <Route path='/ourteam' exact element= {<OurTeam  aboutdetails = {this.state.aboutdetails} />}> </Route>
          
          <Route path='/hairstyle'  exact element={<HairStyle/>} ></Route>
          <Route path="*" element={<Navigate to ="/home" />}/>
        </Routes> 
    
      <Footer/>
      </Router>
     
     

   
    </div>
  );
}
}

export default App;
