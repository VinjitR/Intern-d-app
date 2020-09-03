import React from 'react';
import { Jumbotron as Jumbo, Container ,Form,Link,Col, Button,InputGroup,FormControl} from 'react-bootstrap';
import styled from 'styled-components';



const Styles = styled.div`
  .jumbo {
    background:transparent;
    height: 400px;
    position: relative;
    
  padding:70px 80px 70px 30px;
  margin:0px auto;
  color:floralwhite;

    
  }
  .form-h {
   margin-top:40px;
   margin-left:auto;
  }

  .header-c{
    width:auto
  }
  h1{
    font-family:sans-serif;
    font-size: 45px;
    color: black;
   
    
  }
  .f-input{
      color: #000;
  }
`;

export const Jumbotron = () => (
  <Styles>
    <Jumbo fluid className="jumbo">
    <Container className="header-c">
    <div className='row row-header'>
                            <div className="col-lg-10 ">
                                <h1 >FRONT END DEVELOPER CONFERENCE</h1>
                                </div>
                                </div>
      
        
      
  <Form className=" mx-auto col-lg-10 form-h ">

    <Form.Row className="align-items-center mx-auto">
    
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInputGroup" srOnly>
        Email
      </Form.Label>
      <InputGroup className="mb-2 ">
        <InputGroup.Prepend>
          <InputGroup.Text>@</InputGroup.Text>
        </InputGroup.Prepend>
        <FormControl 
        id="inlineFormInputGroup"
        classNAme="f-input"
         placeholder="Email" />
      </InputGroup>
    </Col>
    <Col xs="auto">
      <Form.Label htmlFor="inlineFormInput" srOnly>
        Password
      </Form.Label>
      <Form.Control
        className="mb-2 f-input"
        id="inlineFormInput"
        placeholder="password"
        
      />
    </Col>
    <Col xs="auto">
      <Form.Check
        type="checkbox"
        id="autoSizingCheck"
        className="mb-2 f-input"
        label="Remember me"
      />
    </Col>
    <Col xs="auto">
    <Button variant="dark">Login</Button>
    </Col>
  </Form.Row>
</Form>
      
      </Container>
    </Jumbo>
  </Styles>
)
