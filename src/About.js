import React from 'react';
import { Breadcrumb, BreadcrumbItem, Card, Media,Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {HeaderC} from './HeaderC';
import {Container} from 'react-bootstrap'; 
import { FooterC } from './FooterC';

export const About = () => (
  <><HeaderC/>
  <Container fluid className="ml-auto">
    
  <div className="row">
      <Breadcrumb>
          <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>About Us</BreadcrumbItem>
      </Breadcrumb>
      <div className="col-12">
          <h3>About Us</h3>
          <hr />
      </div>                
  </div>
  <div className="row row-content">
      <div className="col-12 col-md-6">
          <h2>Our History</h2>
          <p>Started in 2010, Ristorante con Fusion quickly established itself as a culinary icon par excellence in Hong Kong. With its unique brand of world fusion cuisine that can be found nowhere else, it enjoys patronage from the A-list clientele in Hong Kong.  Featuring four of the best three-star Michelin chefs in the world, you never know what will arrive on your plate the next time you visit us.</p>
          <p>The restaurant traces its humble beginnings to <em>The Frying Pan</em>, a successful chain started by our CEO, Mr. Peter Pan, that featured for the first time the world's best cuisines in a pan.</p>
      </div>
      <div className="col-12 col-md-5">
      <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src="holder.js/100px180" />
          <Card.Body>
            <Card.Title>Card Title</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of
              the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
</Card>
      </div>
      <div className="col-12">
          <Card>
              <Card.Body className="bg-faded">
                  <blockquote className="blockquote">
                      <p className="mb-0">You better cut the pizza in four pieces because
                          I'm not hungry enough to eat six.</p>
                      <footer className="blockquote-footer">Yogi Berra,
                      <cite title="Source Title">The Wit and Wisdom of Yogi Berra,
                          P. Pepe, Diversion Books, 2014</cite>
                      </footer>
                  </blockquote>
              </Card.Body>
          </Card>
      </div>
  </div>
  <div className="row row-content">
      
      <div className="col-4 md-1">
          <h2>Corporate Leadership</h2>
      </div>
      <div className="col-12">
      <Media>
    <img
      width={64}
      height={64}
      className="align-self-start mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Media Heading</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>

  <Media>
    <img
      width={64}
      height={64}
      className="align-self-center mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Media Heading</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p>
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>

  <Media>
    <img
      width={64}
      height={64}
      className="align-self-end mr-3"
      src="holder.js/64x64"
      alt="Generic placeholder"
    />
    <Media.Body>
      <h5>Media Heading</h5>
      <p>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
        ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
        tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
        fringilla. Donec lacinia congue felis in faucibus.
      </p>

      <p className="mb-0">
        Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
        leo. Cum sociis natoque penatibus et magnis dis parturient montes,
        nascetur ridiculus mus.
      </p>
    </Media.Body>
  </Media>

      </div>
  </div>
  </Container>
  <FooterC/>
</>
)
