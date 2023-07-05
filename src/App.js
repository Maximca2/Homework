
import './App.css';
import React from 'react';
import MainPage from './components/MainPage/MainPage';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import imf from './components/MainPage/img/bag_rose.jpg' 

// import { Button } from 'react-bootstrap';

const product = [
  {
    name: 'Сумка',
    price:'1500',
    descr:'Some descr',
    id:0,
    img:imf
  },
  {
    name: 'Сумка 1',
    price:'1000',
    descr:'Some descr',
    id:1,
    img:imf
  },
  {
    name: 'Сумка 3',
    price:'1200',
    descr:'Some descr',
    img:imf,
    id:2,
  },
  {
    name: 'Сумка 2',
    price:'1300',
    descr:'Some descr',
    img:imf,
    id:3,
  },
]



function App() {
  return (
    <div className="App">
      <Container>
      {/* {setTimeout(() => {
        <MainPage dataProduct={product}/>
      }, 2000)} */}
      <MainPage dataProduct={product}/>
      </Container>
      
      
    </div>
  );
}

export default App;
