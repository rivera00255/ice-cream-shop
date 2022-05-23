import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import styled from 'styled-components';
import { addCart } from '../modules/cartReducer';

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    min-height: 90vh;
    padding: 80px 0;
    @media screen and(max-width: 1200px) {
        width: 100%;
    }
`;

const ButtonWrapper = styled.div`
    width: 50%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
`;

const Button = styled.button`
    padding: 0.8rem 2rem;
    border: none;
    color: #444;
    background: #fff;
    border-bottom: 2px solid #444;
    &:hover {
        background: #444;
        color: #fff;
    }
    &:active {
        background: #444;
        color: #fff;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    margin-top: 80px;
`;

const List = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;

const Image = styled.img`
    width: 240px;
    height: auto;
`;

const Cover = styled.div`
    width: 100%;
    height: 72px;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: rgba(255, 255, 255, 0.8);
    font-size: 0.9rem;
    position: absolute;
    left: 0;
    bottom: 0;
    transform: translateY(80px);
    transition: 0.8s;
    p {
        margin-right: 1rem;
    }
`;

const AddCartBtn = styled.button`
    padding: 0.2rem 0.5rem;
    background: #000;
    color: #fff;
    border-radius: 20px;
    &:hover {
        border: 1px solid #000;
        background: #fff;
        color: #000;
    }
    &:active {
        border: 1px solid #000;
        background: #fff;
        color: #000;
    }
`;

const Item = styled.div`
    width: 240px;
    height: 240px;
    margin: 0 0.1rem;
    margin-bottom: 5rem;
    position: relative;
    overflow: hidden;
    &:hover {
        box-shadow: 4px 4px 8px #cbcbcb;
    }
    &:hover ${Cover} {
        transform: translateY(0);
    }
`;


function Product() {

    const [product, setProduct] = useState([]);

    const dispatch = useDispatch();

    useEffect(() => {
        axios.get('http://localhost:3000/data/data.json')
        .then(res => {
            setProduct(res.data);
        }).catch(err => console.log(err));
    }, []);

    return ( 
        <Container>
            <ButtonWrapper>
                <Button>전체</Button>
                <Button>파인트</Button>
                <Button>미니컵</Button>
                <Button>스틱</Button>
            </ButtonWrapper>
            <Wrapper>
                <List>
                    {
                        product &&
                        product.map(item => (
                            <Item key={item.id}>
                                <Image src={`../assets/images/product/${item.url}`} alt='ice cream' />
                                <Cover>
                                    <p>
                                        <strong>{item.name}</strong><br/>
                                        {item.price}원
                                    </p>
                                    <AddCartBtn onClick={() => dispatch(addCart(item))}>+ cart</AddCartBtn>
                                </Cover>
                            </Item>
                        ))
                    }
                </List>
            </Wrapper>
        </Container>
     );
}

export default Product;