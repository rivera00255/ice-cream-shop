import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

const MainHeader = styled.header`
  width: 100%;
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
      width: 100%;
  }
`;

const NavContainer = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.h1`
  width: 100px;
  height: auto;
  margin: 1rem 0;
  cursor: pointer;
`;

const Image = styled.img`
  width: 100%;
`;

const Nav = styled.nav`
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  background: #5e0024;
`;

const LocalNav = styled.nav`
  width: 300px;
  height: 100%;
  font-size: 0.8rem;
`;

const Ul = styled.ul`
  display: flex;
  justify-content: space-around;
`;

const Li = styled.li``;

const StyledLink = styled(Link)`
  color: #fff;
`;

const Button = styled.button`
  background: none;
  border: none;
  padding: 0 1rem;
  cursor: pointer;
  color: #fff;
`;

function Header() {

  const navigate = useNavigate();

  const onClick = () => {
    navigate('/');
  }

    return ( 
        <MainHeader>
          <Container>
            <NavContainer>
                <Logo onClick={onClick}>
                  <Image src='../assets/images/main/logo.png' alt='logo' />
                </Logo>
                <LocalNav>
                  <Ul>
                    <Li><Link to='/'>로그인</Link></Li>
                    <Li><Link to='/'>회원가입</Link></Li>
                    <Li><Link to='/order'>장바구니</Link></Li>
                    <Li><Link to='/'>주문배송조회</Link></Li>
                  </Ul>
                </LocalNav>
            </NavContainer>
          </Container>
          <NavContainer>
              <Nav>
                <Container>
                  <Ul>
                    <Li><Button>=</Button></Li>
                    <Li><StyledLink to='/product'>Products</StyledLink></Li>
                    <Li><StyledLink to='/'>Recipes</StyledLink></Li>
                    <Li><StyledLink to='/'>About</StyledLink></Li>
                  </Ul>
                </Container>
              </Nav>
          </NavContainer>
        </MainHeader>
     );
}

export default Header;