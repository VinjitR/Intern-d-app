import React from 'react';
import {Row,Col,Card,ListGroup,ListGroupItem} from 'react-bootstrap';
import styled from 'styled-components';
import { HeaderC } from './HeaderC';
import {FooterC} from './FooterC';
import c1 from './assets/c1.jpg';
import c2 from './assets/c2.jpg';
import c3 from './assets/c3.jpg';


const Container = styled.div`
background:#cccccc;
height:auto;

.card-c{
    margin-top:20px;
    margin-bottom:20px;
   
}`
;

export const Home = () => (
  
 <>
     <HeaderC/>
     <Container fluid expand="sm">
       <Row className="justify-content-center mt-auto" xs={3} md={1} lg={1} expand="md">
            <Col md={3} lg={3} className="card-c">
                <Card  bg ={'Dark'} style={{ width: 'auto', margin:'auto'}} border="dark">
                <Card.Img variant="top" src={c1} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col  md={3} lg={3} className="card-c">
                <Card bg ={'Light'} style={{ width: 'auto' ,margin:'auto'}} border="dark">
                <Card.Img variant="top" src={c2} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
            <Col  md={3} lg={3} className="card-c">
                <Card bg ={'Dark'}style={{ width: 'auto',margin:'auto' }} border="dark">
                <Card.Img variant="top" src={c3} />
                <Card.Body>
                    <Card.Title>Card Title</Card.Title>
                    <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                    </Card.Text>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
     <FooterC/>
  </>
   
  
)
