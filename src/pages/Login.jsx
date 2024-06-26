import React from "react";
import styled from "styled-components";
import Clock from "./Clock";
import { Link } from "react-router-dom";

const Login = ({ isLoggedIn, onLogout }) => {
  return (
    <Header>
      <Buttons>
        <Clock />
        <SignUpButton>회원가입</SignUpButton>
        {isLoggedIn ? (
          <Button onClick={onLogout}>로그아웃</Button>
        ) : (
          <Button>로그인</Button>
        )}
      </Buttons>
      <Navbar>
        <TextBox>
          <Text>
            <Link to="chart">입원/퇴원 관리</Link>
          </Text>
          <Text>동물등록</Text>
          <Text>
            <Link to="announcement">공지사항</Link>
          </Text>
        </TextBox>
      </Navbar>
    </Header>
  );
};

export default Login;

const Header = styled.header`
  width: 100%;
  height: 30px;
  background-color: var(--color-black);
  position: sticky;
  top: 0;
  z-index: 1000;
  margin-bottom: 5rem;
`;

const Buttons = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

const SignUpButton = styled.p`
  color: var(--color-darkgray);
  font-size: 13px;
  padding-top: 3px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: #fff;
  }
`;

const Button = styled.button`
  width: 60px;
  height: 20px;
  margin: 5px 20px;
  padding-top: 3px;
  border-radius: 5px;
  border: none;
  background-color: var(--color-prime);
  text-align: center;
  font-size: 13px;
  font-family: var(--font-weight-light);
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: var(--color-brown);
    color: #e3e2de;
  }
`;
const Navbar = styled.div`
  width: 100%;
  height: 60px;
  top: 30px;
  background-color: #fff;
  position: absolute;
  display: flex;
  box-shadow: 1px 1px 7px var(--color-darkgray);

  &::before {
    content: "";
    display: inline-block;
    vertical-align: middle;
    width: 150px;
    margin-left: 30px;
    background: url("/petcam_logo.svg") no-repeat center center;
  }
`;
const TextBox = styled.div`
  display: flex;
  margin-left: 40px;
`;
const Text = styled(Link)`
  font-family: var(--font-weight-bold);
  color: var(--color-black);
  margin: auto 25px;
  font-size: 15px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    color: var(--color-darkgray);
  }
`;
