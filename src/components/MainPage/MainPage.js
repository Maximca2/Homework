import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
// не дефолт імп не юзати по дефолту
import {Col,Row} from 'react-bootstrap/esm'; 

import Basket from '../Basket';

import logo from '../MainPage/img/logo.png'

import style from './MainPage.module.scss'
// правильна структура


const MainPage = (props) => {
    const product = props.dataProduct;
    
    const [show, setShow] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [likes, setLikes] = useState([]);
    


    const addToLikes = (product) => {
        setCartItems([...cartItems, product]);
    };
    const addToCart = (product) => {
        setCartItems([...cartItems, product]);
    };

    function showBasket(cond) {
        setShow(cond)
    }

    return (
        <div>
            <Container>
                <div className={style.box}>

                    <header className={style.box__header}>
                        <div className={style.box__ofheader}>
                            <div className="">
                                <img src={logo} alt="logo" />
                            </div>
                            <div className={style.box__nameofCompany}>
                                Bags
                            </div>
                        </div>
                    </header>

                    <main>
                        <div className={style.box__list}>
                            {product.map((it, i) => {
                                // console.log(it.id)
                                return <div key={i} className={style.box__card}>
                                    <div className="">

                                        <i className="fa fa-heart" style={{ fontSize: 24, textAlign: 'right', color: '#fff' }} onClick={() => addToLikes(it)} />
                                    </div>
                                    <div className={style.box__img}>
                                        <img src={it.img} alt="img_bags" />
                                    </div>
                                    <div className="">
                                        {it.name}
                                    </div>
                                    <div className="">
                                        {it.price}
                                    </div>

                                    <Button className={style.button41} onClick={() => addToCart(it)}>
                                        SHOP NOW!
                                    </Button>
                                </div>

                            })}
                        </div>

                    </main>
                    <div className={style.box__navigation}>
                        <div className={style.box__search}>
                            Шукати
                        </div>
                        <div className={style.box__search}>
                            Подобається
                        </div>
                        <div onClick={() => showBasket(true)} className={style.box__search}>
                            Корзина {cartItems.length}
                        </div>

                    </div>
                    <Basket setProducts ={setCartItems} dataProduct={cartItems} showsBasket={show} />
                </div>
            </Container>
        </div>
    );
};

export default MainPage;