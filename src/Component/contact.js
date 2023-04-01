import React from "react";
import './Contact.css'
import {  Button , Col, FormGroup, Form, Label, Input  } from "reactstrap";
 
class Contact extends React.Component {
  constructor(props) {
    super(props);
  
    this.state={
      firstname: '',
      lastname:'',
      telnum:'',
      email:'',
      agree:false,
      contactType:'tel',
      message:''
  }
   this.handelSubmit =this.handelSubmit.bind(this);
   this.handelInputChange =this.handelInputChange.bind(this);
}
handelInputChange(event){
  const target = event.target;
  const value = target.type === 'checkbox' ? target.checked :target.value;
  const name = target.name
  this.setState({
      [name]: value
  })
}
handelSubmit(event){
  // console.log('current state '+ JSON.stringify(this.state));
  // alert('current state '+ JSON.stringify(this.state));
  alert('Feedback Submitted Succesfully')
event.preventDefault();
}
 
  render(){
    return (<div className=" container  gradient-custom ">
      <h1 className="text-center text-uppercase">Contact Us</h1>
      <div className="row row-content">
                <div className="col-12">
                    <h3>Send us your Feedback</h3>
                    <div className="col-12 col-md-9">
                        <Form onSubmit={this.handelSubmit}>
                            <FormGroup row>
                                <Label htmlFor= 'firstname' md={2}>First Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="firstname" name="firstname" placeholder="First Name" value={this.state.firstname}
                                    onChange={this.handelInputChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor= 'lastname' md={2}>Last Name</Label>
                                <Col md={10}>
                                    <Input type="text" id="lastname" name="lastname" placeholder="Last Name" value={this.state.lastname}
                                     onChange={this.handelInputChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor= 'telnum' md={2}>Contact</Label>
                                <Col md={10}>
                                    <Input type="tel" id="telnum" name="telnum" placeholder="Tel. Number" value={this.state.telnum}
                                     onChange={this.handelInputChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor= 'eamil' md={2}>Email</Label>
                                <Col md={10}>
                                    <Input type="email" id="email" name="email" placeholder="Email" value={this.state.email}
                                     onChange={this.handelInputChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:6, offset:2}}>
                                    <FormGroup check>
                                        <Label check>
                                            <Input type="checkbox" name="agree" checked={this.state.agree}
                                             onChange={this.handelInputChange}/> {''}
                                            <strong>May we contact?</strong>
                                        </Label>
                                    </FormGroup>
                                </Col>
                                <Col md={{size:3, offset:1}}>
                                    <Input type="select" name="contactType" value={this.state.contactType} onChange={this.handelInputChange}
                                    >
                                        <option>Tel.</option>
                                        <option>Email</option>
                                    </Input>
                                </Col>

                            </FormGroup>
                            <FormGroup row>
                                <Label htmlFor= 'feedback' md={2}>Your Feedback</Label>
                                <Col md={10}>
                                    <Input type="textarea" id="message" name="message" rows='12' value={this.state.message}
                                     onChange={this.handelInputChange}/>
                                </Col>
                            </FormGroup>
                            <FormGroup row>
                                <Col md={{size:10,offset:2}}>
                                    <Button type="sumbmit"  color="primary"> SendFeedback</Button>
                                </Col>

                            </FormGroup>
                        </Form>
                    </div>

                </div>
            </div>
        <div className="col-12 ">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14484.481863852467!2d93.9467588!3d24.8255536!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc0f9336c298233e9!2sOlympia%20Mall!5e0!3m2!1sen!2sin!4v1650816925686!5m2!1sen!2sin" width="100%" height='400'></iframe>
        </div>
        </div>
    )
  }
}
export default Contact;