import * as React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
const StyledHeader = styled.div`
  padding: 0 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
  img {
    width: 70px;
    height: 50px;
    border-radius: 50%;
  }
`;
export default function Header() {
  return (
    <StyledHeader className="header">
      <Image width={50} height={50} src="https://charancha.com/uploads/carimg/xxlarge/2023/b5362bf0-0e6a-49d3-9fee-2a81e4fd76a6.jpg?w=1200&h=675&f=webp" alt="Picture of me" />
      <h1>삼둥이 (그랜져 IG)</h1>
      <span>10 시간</span>
    </StyledHeader>
  );
}
