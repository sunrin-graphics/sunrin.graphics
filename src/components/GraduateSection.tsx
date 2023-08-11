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
    title: '항해; Voyage',
    subtitle: '2023 · 11회',
    description:
      '아무도 모르는 우리들의 미래, 항로를 정하기 위한 첫 여정.새로운 도전을 앞둔 우리들의 항해에 항로를 정할 우리들의 전시, 인생이라는 보물을 찾을 최적의 항해를 할 첫 여정에 여러분을 초대합니다.',
    link: 'http://sunrin.graphics/2023',
    image: '/images/bg_picture_2023.png'
  },
  {
    title: 'Beginning',
    subtitle: '2022 · 10회',
    description:
      '‘우리의 첫 걸음에 초대합니다’\n' +
      '첫 번째 콘텐츠디자인과, 첫 번째 전시, 앞으로 처음 느끼게 될 다양한 첫 번째 경험들을 이겨내고 화려하게 시작하는 저희의 모습을 보여준다는 의미를 담았습니다.',
    link: 'http://sunrin.graphics/2022',
    image: '/images/bg_picture_2022.png'
  },
  {
    title: 'CONTÉ',
    subtitle: '2021 · 9회',
    description:
      "'우리라는 미술 재료로 인생이라는 예술 작품을'\n" +
      '<CONTÉ>는 흑연을 점토와 섞어 다져 구운 것으로, 우리 한 사람 한 사람이 미술 재료가 되어 인생이라는 예술 작품을 그려나가는 의미를 담았습니다.',
    link: 'http://sunrin.graphics/2021',
    image: '/images/bg_picture_2021.png'
  },
  {
    title: '파란: 새 물결을 일으키다',
    subtitle: '2020 · 8회',
    description:
      '그 누구도 상상한 적 없었던 이야기를 선보입니다. 우리의 남다름을 보여주려 합니다. 가느다란 물줄기를 모아 시대를 바꿀 커다란 파란을 일으키자는 생각으로 달려왔습니다. 아름다운 변화를 만들어낼 새로운 파도가 이제 밀려옵니다.',
    link: 'http://sunrin.graphics/2020',
    image: '/images/bg_picture_2020.png'
  },
  {
    title: 'What',
    subtitle: '2019 · 7회',
    description:
      '제 7회 선린인터넷고등학교 멀티미디어과 졸업전시회의 주제는 ‘What’입니다. ‘What’은 우리말로 ‘뭐라고?’의 의미와 통용되며 본인의 길을 걸어감에 있어 ’주변의 편견과 간섭에 목표를 내려놓지 마라’라는 의미로 사용하게 되었습니다.',
    link: 'http://sunrin.graphics/2019',
    image: '/images/bg_picture_2019.png'
  },
  {
    title: '20 : Miracle of Millenium',
    subtitle: '2018 · 6회',
    description:
      '전시 주제인 Miracle of millenium은 2000년생들이 보여드릴 기적을 상징하며, 10대를 마무리 하고 20대를 준비하는 우리들의 열정을 쏟은 작품입니다.',
    link: 'http://sunrin.graphics/2018',
    image: '/images/bg_picture_2018.png'
  },
  {
    title: '爛裝辦',
    subtitle: '2017 · 5회',
    description:
      '전시 주제인 ‘난장판’은 학생들이 빛나는 (爛) 열정으로 가꾸고 (裝) 힘써온 (辦) 선린에서의 경험이자, 그들한데 뒤섰어 표현한 각각의 작품을 상징합니다.',
    link: 'http://sunrin.graphics/2017',
    image: '/images/bg_picture_2017.png'
  },
  {
    title: 'CURTAIN CALL',
    subtitle: '2016 · 4회',
    description:
      '커튼콜은 커튼 속의 우리들의 모습이 비치는 그림자의 붉은 빛깔이 타오르는 해가 지는 모습에 대해 고찰하여 3년이 종결되는 모습입니다.',
    link: 'http://sunrin.graphics/2016',
    image: '/images/bg_picture_2016.png'
  },
  {
    title: 'SPECTRUM',
    subtitle: '2015 · 3회',
    description:
      '빛이 프리즘을 통해 다채로운 색을 발산하듯이 멀티미디어과 학생들의 개개인의 끼와 개성을 살린 작품을 이번 전시에 선보이겠다는 뜻을 가지고 있습니다.',
    link: 'http://sunrin.graphics/2015',
    image: '/images/bg_picture_2015.png'
  },
  {
    title: '쉼',
    subtitle: '2014 · 2회',
    description:
      '‘쉼’은 문장끼리 이어주는 역할을 하는 쉼표의 의미를 살려 다양한 미디어가 연결되어 하나의 창조물을 만드는 것처럼, 멀티미디어과 학생들이 전시라는 하나의 뜻으로 연결된다는 의미를 지니고 있습니다.',
    link: 'http://sunrin.graphics/2014',
    image: '/images/bg_picture_2014.png'
  }
]

const GraduateSection = () => {
  return (
    <Container>
      <Introduce>
        <Title>
          <SubTitleText>콘텐츠디자인과</SubTitleText>
          <TitleText>졸업전시회</TitleText>
        </Title>
        <Description>
          콘텐츠디자인과 졸업전시회는 2013년부터 매년 5월~6월에 진행되는 가장 큰
          콘텐츠디자인과 행사입니다. 3학년 학생들이 3년 간 <br /> 배운 내용을
          바탕으로 다양한 종류의 작품을 전시하며, 매년 새로운 콘셉트와 높은
          수준의 작품을 만나볼 수 있습니다.
        </Description>
        <ViewButton>
          <img src={'/images/instagram.svg'} alt={'재생'} />
          졸업전시회 인스타그램
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
  padding: 144px 0;
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

export default GraduateSection
