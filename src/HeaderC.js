import React from 'react';

import { NavigationBar } from './components/NavigationBar';
import { Jumbotron } from './components/Jumbotron';
import styled from 'styled-components';
import pencils from './assets/pencils.jpg';



const Container = styled.div`
    background: url(${pencils}) no-repeat fixed bottom;
    background-size: cover;
    color: #efefef;
    height: 600px;
    width:100%;
    position: relative;
    z-index:3;
`;


export const HeaderC = () => {
    return (
          
            <Container fluid="true"> 
            <NavigationBar />
            <Jumbotron />
            
                
            </Container>
    )
}

