import React from 'react'
import styled from 'styled-components'

const IntroduceSection = () => {
  return (
    <Container>
      <Introduce>
        <Title>
          <SubTitleText>소개</SubTitleText>
          <TitleText>상상을 현실로 만드는 힘</TitleText>
        </Title>
        <Description>
          콘텐츠디자인과에서는 컴퓨터그래픽, 미디어콘텐츠, 영상편집 등의
          디자인과 연관된 다양한 분야에 기본 능력과 소양을 갖춘 인력을 육성하며
          <br />
          디자인, 미디어, 영상학, 언론홍보 등 디자인적 소양을 토대로 한 다양한
          학부에 진학할 수 있고, 그래픽디자이너, 일러스트레이터, <br />웹
          디자이너, 영상제작, 게임제작 등의 콘텐츠를 개발하고 구현해 낼 수 있는
          인재를 양성합니다.
        </Description>
        <ViewButton>
          <img src={'/images/play.svg'} alt={'재생'} />
          소개 영상 보기
        </ViewButton>
      </Introduce>
    </Container>
  )
}

const ViewButton = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  width: 154px;
  height: 47px;
  background: #f6f7f9;
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
  background: var(--justWhite);
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

export default IntroduceSection
