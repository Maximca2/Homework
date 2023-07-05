import React, { useEffect, useState } from 'react';
import style from './Basket.module.scss'
import Button from 'react-bootstrap/esm/Button';

const defaultCards = ['apple1','apple2','apple3','apple4'];

const Basket = (props) => {
    const {
        dataProduct:products,
        setProducts
        
    } =props 
    
    const count = props.dataProduct.map(it=>parseFloat(it.price));
    

    const [counter,setCounter] = useState([])

    useEffect(()=>{
       

            if(count.length===0){
                setCounter(0)
                return
            }
            console.log(count)
            const otherCounFull = count.reduce((acc,cur)=>acc+cur)
            
            setCounter(otherCounFull)
        
    },[count])
    

    const showBaskety = props.showsBasket;
    
    function deleteIt(id) {
        
        const data = products.filter(it=>it.id!==id)
        
        
        setProducts(data)
        
    }

    return (
        <div>
            Корзина
            <div className={style.basket} style={showBaskety ? { transition: `all ${1}s ease-out`, backgroundColor: `rgb${(193, 193, 240)})`, transform: `translate(${0}px, ${0}px)` } :
                { transform: `translate(${-5000}px, ${0}px)`, transition: `all ${1}s ease-out` }}>
                <div className={style.basket__list}>
                    
                    {products.length === 0 ? 'Корзина пуста' : products.map(({img,name,price},i) => (
                        <div key={i} className={style.basket__card}>
                        <div className="">
                            <img src={img} alt="curimg" />
                        </div>
                        {name}
                        <div className="">
                            {price}
                        </div>
                        <Button className={style.button41}>Купити</Button>
                        <Button onClick={() => deleteIt(i)} className={style.button42}>Видалити</Button>
                    </div>
                    )
                    )}
                {counter}
                </div>
            </div>
        </div>
    );
};

export default Basket;