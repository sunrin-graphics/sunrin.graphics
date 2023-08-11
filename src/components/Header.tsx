import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <Container>
      <Wrapper>
        <Row spacing={8}>
          <img
            src="/images/sunrin.svg"
            alt="선린 로고"
            width={13}
            height={16}
          />
          <Logo>
            선린인터넷고등학교 <Regular>콘텐츠디자인과</Regular>
          </Logo>
        </Row>
        <Links>
          <li>
            <Link>홈</Link>
          </li>
          <li>
            <Link>소개</Link>
          </li>
          <li>
            <Link>졸업전시회</Link>
          </li>
          <li>
            <Link>시연회</Link>
          </li>
        </Links>
      </Wrapper>
    </Container>
  )
}

const Links = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  list-style: none;
`

const Link = styled.a`
  color: var(--deepDark);
  font-size: 15px;
  font-weight: 400;
  line-height: 150%;
`

const Logo = styled.span`
  color: var(--deepDark);
  font-size: 15px;
  font-weight: 600;
`

const Regular = styled.span`
  font-size: 15px;
  font-weight: 400;
`

const Row = styled.div<{ spacing: number }>`
  display: flex;
  align-items: center;
  gap: ${(props) => props.spacing}px;
`

const Container = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 55px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--transparent);
  backdrop-filter: blur(3px);
  z-index: 9999;
`

const Wrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export default Header
