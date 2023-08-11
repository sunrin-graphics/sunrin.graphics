import React from 'react'
import styled from 'styled-components'
import Card from './Card'

interface CardProps {
  image: string
  title: string
  description: string
  subtitle: string
  link: string
}

const Data: CardProps[] = [
  {
    title: 'thisPlay!',
    subtitle: '2023 · 4회',
    description:
      '상상을 현실로 만드는 힘을 가진 우리의 놀이터에서 새롭게 꿈을 펼칠 여러분을 위해 작은 선물을 준비했어요!',
    link: 'https://www.instagram.com/p/CIJZ6Z3n5ZI/',
    image: '/images/bg_picture_2023.png'
  },
  {
    title: '飛 : 날 비',
    subtitle: '2022 · 3회',
    description:
      '상상을 현실로 만드는 힘을 가진 우리의 놀이터에서 새롭게 꿈을 펼칠 여러분을 위해 작은 선물을 준비했어요!',
    link: 'https://www.instagram.com/p/CIJZ6Z3n5ZI/',
    image: '/images/bg_picture_2023.png'
  },
  {
    title: '시작',
    subtitle: '2021 · 2회',
    description:
      '상상을 현실로 만드는 힘을 가진 우리의 놀이터에서 새롭게 꿈을 펼칠 여러분을 위해 작은 선물을 준비했어요!',
    link: 'https://www.instagram.com/p/CIJZ6Z3n5ZI/',
    image: '/images/bg_picture_2023.png'
  },
  {
    title: 'st, ART',
    subtitle: '2020 · 1회',
    description:
      '상상을 현실로 만드는 힘을 가진 우리의 놀이터에서 새롭게 꿈을 펼칠 여러분을 위해 작은 선물을 준비했어요!',
    link: 'https://www.instagram.com/p/CIJZ6Z3n5ZI/',
    image: '/images/bg_picture_2023.png'
  }
]

const DemonstrationSection = () => {
  return (
    <Container>
      <Introduce>
        <Title>
          <SubTitleText>콘텐츠디자인과</SubTitleText>
          <TitleText>시연회</TitleText>
        </Title>
        <Description>
          콘텐츠디자인과 시연회는 2020년부터 매년 신입생들을 위해 준비하는
          행사입니다. 시연회를 통해 신입생들은 앞서 입학한 선배들의 작품을{' '}
          <br /> 감상하고, 앞으로의 동아리 선택부터 콘텐츠디자인과 생활까지에
          대해 힌트를 얻을 수 있습니다.
        </Description>
        <ViewButton>
          <img src={'/images/instagram.svg'} alt={'재생'} />
          시연회 인스타그램
        </ViewButton>
      </Introduce>
      <DemoGrid>
        {Data.map((v, index) => (
          <Card
            title={v.title}
            subtitle={v.subtitle}
            description={v.description}
            link={v.link}
            image={v.image}
          />
        ))}
      </DemoGrid>
    </Container>
  )
}

const DemoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  max-width: 1200px;
  width: 100%;
`

const ViewButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  height: 47px;
  background: var(--justWhite);
  border-radius: 24px;
  border: none;
  font-weight: 500;
  font-size: 15px;
  line-height: 150%;
  color: var(--deepDark);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 0 144px;
  gap: 48px;
  background: var(--coolSurface);
`

const Introduce = styled.div`
  gap: 28px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  gap: 8px;
`

const SubTitleText = styled.div`
  font-weight: 600;
  font-size: 15px;
  line-height: 150%;
  text-align: center;
  color: var(--blueIshGray);
`

const TitleText = styled.div`
  font-weight: 600;
  font-size: 36px;
  line-height: 150%;
  text-align: center;
  color: var(--deepDark);
`

const Description = styled.div`
  font-weight: 400;
  font-size: 15px;
  line-height: 150%;
  text-align: center;
  color: var(--deepDark);
`

export default DemonstrationSection
