import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { decreaseItem, deleteCart, increaseItem } from '../modules/cartReducer';

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    min-height: 90vh;
    @media screen and(max-width: 1200px) {
        width: 100%;
    }
`;

const Wrapper = styled.div`
    width: 100%;
    margin-top: 80px;
`;

const List = styled.div`
    width: 100%;
`;

const Item = styled.div`
    width: 70%;
    height: 120px;
    margin: 0 auto;
    border: 1px solid #888;
    border-radius: 40px;
    padding: 0 4rem;
    margin-bottom: 1rem;
    display: flex;
`;

const ItemInfo = styled.div`
    width: 70%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const Desc = styled.div`
    strong {
        font-size: 1.2rem;
        font-weight: 700;
    }
`;

const Image = styled.div`
    width: 100px;
    height: 100px;
    img {
        width: 100%;
        height: auto;
    }
`;

const OrderInfo = styled.div`
    width: 30%;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const PriceInfo = styled.div`
    width: 100%;
    text-align: center;
`;

const Count = styled.h4`
    margin-right: 2rem;
`;

const CountBtn = styled.button`
    width: 32px;
    height: 32px;
    margin: 0 0.1rem;
    font-size: 1.2rem;
`;

const DeleteBtn = styled(CountBtn)`
    width: 20px;
    height: 20px;
    font-size: 0.8rem;
    background: #444;
    color: #fff;
    border: none;
    margin-left: 0.5rem;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    margin: 40px 0;
    display: flex;
    justify-content: center;
`;

const Button = styled.button`
    padding: 0.4rem 1rem;
`;

function Order() {

    const product = useSelector(state => state.cartReducer.cart);
    const total = useSelector(state => state.cartReducer.totalPrice);

    const dispatch = useDispatch();

    return ( 
        <Container>
            <Wrapper>
                <List>
                    {
                        product &&
                        product.map(item => (
                            <Item key={item.id}>
                                <ItemInfo>
                                    <Desc>
                                        <p>
                                            <strong>{item.name}</strong><br />
                                            {item.price}원
                                        </p>
                                    </Desc>
                                    <Image>
                                        <img src={`https://rivera00255.github.io/ice-cream-shop/assets/images/product/${item.url}`} alt='product' />
                                    </Image>
                                </ItemInfo>
                                <OrderInfo>
                                    <Count>{item.quantity}</Count>
                                    <CountBtn onClick={() => dispatch(decreaseItem(item))}>-</CountBtn>
                                    <CountBtn onClick={() => dispatch(increaseItem(item))}>+</CountBtn>
                                    <DeleteBtn onClick={() => dispatch(deleteCart(item))}>x</DeleteBtn>
                                </OrderInfo>
                            </Item>
                        ))
                    }
                    <PriceInfo>
                        <p>총 주문 금액 : {total}원</p>
                    </PriceInfo>
                </List>
                <ButtonWrapper>
                    <Button>주문하기</Button>
                </ButtonWrapper>
            </Wrapper>
        </Container>
     );
}

export default Order;