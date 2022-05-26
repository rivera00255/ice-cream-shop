import React, { useEffect, useState } from 'react';
import Carousel from '../components/Carousel';
import styled from 'styled-components';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    @media screen and (max-width: 1200px) {
      width: 100%;
  }
`;

const Wrapper = styled.div`
    width: 100%;
    height: 300px;
    margin: ${props => props.margin || '0'};
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* flex-wrap: nowrap; */
`;

const Title = styled.div`
    text-align: center;
    font-weight: 700;
    font-size: 1.8em;
    margin: 100px 0 24px 0;
`;

const Product = styled.div`
    width: 240px;
    height: 290px;
    cursor: pointer;
    overflow: hidden;
    &:hover {
        text-decoration: underline;
    }
`;

const Image = styled.img`
    width: 100%;
    height: auto;
`;

const Text = styled.div`
    width: 100%;
    text-align: center;
`;

const Banner = styled.div`
    width: 100%;
    height: 320px;
    background: url('https://rivera00255.github.io/ice-cream-shop/assets/images/main/banner_bg.jpg') no-repeat;
    background-size: cover;
    margin-bottom: 40px;
`;

const SubTitle = styled(Title)`
    padding-top: 60px;
    font-size: 4rem;
    p {
        font-size: 0.9rem;
        font-weight: 500;
        margin: 0.4rem 0;
    }
`;

const Ingredient = styled.div`
    width: 240px;
    height: 240px;
    border-radius: 50%;
`;

const IngredientImg = styled.img`
    width: 100%;
    height: auto;
    border-radius: 50%;
`;

const Desc = styled.div`
    width: 80%;
    margin: 0 auto;
    margin-bottom: 120px;
    p {
        color: #444;
        margin: 1em 0;
    }
    strong {
        font-weight: 700;
        font-size: 1.2rem;
        line-height: 2.4rem;
    }
`;

function Main() {

    const navigate = useNavigate();
    const [product, setProduct] =  useState([]);

    const ingredientArr = ['01', '02', '03', '04'];

    const onClick = () => {
        navigate('/product');
    }

    useEffect(() => {
        axios.get('https://rivera00255.github.io/ice-cream-shop/data/data.json')
        .then(res => setProduct(res.data.slice(0, 4)))
        .catch(err => console.log(err));
    }, []);

    return ( 
        <>
            <Carousel />
            <Container>
                <Title>New Arrival</Title>
                <Wrapper margin={'0 0 100px 0'}>
                    {
                        product &&
                        product.map(item => (
                            <Product onClick={onClick}>
                                <Image src={`https://rivera00255.github.io/ice-cream-shop/assets/images/product/${item.url}`} alt='ice cream' />
                                <Text>
                                    {item.name}
                                </Text>
                            </Product>
                        ))
                    }
                </Wrapper>
                <Banner>
                    <SubTitle>
                        <p>
                            <strong>
                                가장 최소한의 원료로<br />
                                가장 최상의 맛을 만들기 위한 노력
                            </strong><br/>
                        </p>
                        Ingredients
                        {/* <p>
                            하겐다즈의 특별한 퀄리티는 무엇을 넣는 것에서 
                            오는 것이 아닌 덜어내는 것에서부터 옵니다.
                        </p> */}
                    </SubTitle>
                </Banner>
                <Wrapper>
                    {
                        ingredientArr.map(ingredient => (
                            <Ingredient key={ingredient}>
                                <IngredientImg src={`https://rivera00255.github.io/ice-cream-shop/assets/images/main/ingredient${ingredient}.jpg`} alt='ingredient' />
                            </Ingredient>
                        ))
                    }
                </Wrapper>
                <Desc>
                    <p>
                        <strong>비교할 수 없는 퀄리티</strong><br/>
                        1960년부터 하겐다즈는 비교할 수 없는 퀄리티의 아이스크림을 만들어 오고 있습니다.
                        창립자인 루벤 매투스는 고품질의 엄선된 원료만을 사용하여 세계 최고의 아이스크림을 만드는 것을 하겐다즈의 비전으로 삼았습니다.
                        ‘아이스크림이란 차갑고 달콤하기만 한 것이 아닌 만족스러운 경험 그 자체를 제공해야한다’ 라는 그의 비전과 철학은 지금까지도 이어져 오고있습니다.
                    </p>
                    <p>
                        <strong>최상의 퀄리티를 향한 노력</strong><br/>
                        루벤의 목표는 세상에서 가장 맛있는 아이스크림을 만드는 것이었고, 그의 노력은 아이스크림에 대한 사람들의 생각을 바꿔놓았습니다.
                        하겐다즈 철학은 지금도 동일합니다.
                        우리는 모든 사람이 아이스크림을 통해 진정한 기쁨을 경험할 수 있다고 믿으며, 이 믿음이 하겐다즈의 원동력입니다.
                    </p>
                </Desc>
            </Container>
        </>
     );
}

export default Main;