import React from 'react'
import styled from 'styled-components'

interface CardProps {
  image: string
  title: string
  description: string
  subtitle: string
  link: string
}

const Card = (props: CardProps) => {
  return (
    <Container>
      <Image src={props.image} />
      <Contents>
        <Column>
          <Subtitle>{props.subtitle}</Subtitle>
          <Title>{props.title}</Title>
        </Column>
        <Description>{props.description}</Description>
      </Contents>
      <WebButton href={props.link} target={'_blank'}>
        <Icon>
          <img src="/images/link.svg" alt="웹 아이콘" />
        </Icon>
        웹사이트
      </WebButton>
    </Container>
  )
}

const WebButton = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  background: var(--coolSurface);
  border-radius: 24px;
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  color: var(--deepDark);
  border: none;
  cursor: pointer;
  &:hover {
    filter: brightness(0.9);
    text-decoration: underline;
  }
  text-decoration: none;
`

const Icon = styled.div`
  display: inline-flex;
  width: 20px;
  height: 20px;
  justify-content: center;
  align-items: center;
`

const Description = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  color: var(--deepDark);
`

const Subtitle = styled.span`
  font-weight: 600;
  font-size: 15px;
  line-height: 150%;
  color: var(--blueIshGray);
`

const Title = styled.span`
  font-weight: 600;
  font-size: 24px;
  line-height: 150%;
  color: var(--deepDark);
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const Contents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0 8px;
  gap: 12px;
  width: 100%;
`

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 16px 24px;
  gap: 24px;
  width: 100%;
  background: var(--justWhite);
`

export default Card
