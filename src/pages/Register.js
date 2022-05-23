import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
    min-height: 90vh;
    padding: 80px 0;
    @media screen and(max-width: 1200px) {
        width: 100%;
    }
`;

const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
`;

const Form = styled.form`
    width: 100%;
    height: 480px;
    padding: 4em 12em;
    /* background: #fafafa; */
    border-radius: 40px;
    box-shadow: 4px 4px 10px #ddd;
`;

const InputItem = styled.div`
    margin-bottom: 2em;
`;

const Label = styled.label`
    font-weight: 700;
    margin-right: 2em;
`;

const Input = styled.input`
    width: 32em;
    padding: 0.4rem;
    border: none;
    border-bottom: 1px solid #444;
`;

const ButtonWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4em;
`;

const Button = styled.button`
    padding: 0.4rem 2rem;
`;

function Register() {
    return ( 
        <Container>
            <Wrapper>
                <Form>
                    <InputItem>
                        <Label>상품명</Label>
                        <Input type='text' />
                    </InputItem>
                    <InputItem>
                        <Label>사이즈</Label>
                        <Input type='text' />
                    </InputItem>
                    <InputItem>
                        <Label>가 격</Label>
                        <Input type='number' />
                    </InputItem>
                    <InputItem>
                        <Label>이미지</Label>
                        <Input type='file' />
                    </InputItem>
                    <ButtonWrapper>
                        <Button>등 록</Button>
                    </ButtonWrapper>
                </Form>
            </Wrapper>
        </Container>
     );
}

export default Register;