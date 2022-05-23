import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const MainFooter = styled.footer`
    width: 100%;
    height: 160px;
    background: #2b0002;
`;

const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
  @media screen and (max-width: 1200px) {
      width: 100%;
  }
`;

const Wrapper = styled.div`
    width: 80%;
    margin: 1rem auto;
    color: #fff;
`;

const Nav = styled.nav`
    width: 100%;
    padding-top: 2rem;
    ul {
        display: flex;
        justify-content: space-around;
    }
`;

const StyledLink = styled(Link)`
    color: #fff;
    font-size: 0.9rem;
`;

const CopyrightTxt = styled.div`
    text-align: center;
    margin-top: 2rem;
    span {
        color: #fff;
        font-size: 0.8rem;
        font-weight: 100;
    }
`;

function Footer() {
    return ( 
        <MainFooter>
            <Container>
                <Wrapper>
                    <Nav>
                        <ul>
                            <li><StyledLink to='/'>FAQ</StyledLink></li>
                            <li><StyledLink to='/'>매장안내</StyledLink></li>
                            <li><StyledLink to='/'>고객센터</StyledLink></li>
                        </ul>
                    </Nav>
                    <CopyrightTxt>
                        <span>주소: 서울특별시 강남구 테헤란로 311 (역삼동, 아남타워 6층)ㅣ사업자등록번호: 106-81-28964</span><br/>
                        <span>통신판매신고: 강남-8186ㅣ대표전화: 02-508-8500 ㅣ 개인정보관리책임자: 김미조 대표</span>
                    </CopyrightTxt>
                </Wrapper>
            </Container>
        </MainFooter>
     );
}

export default Footer;