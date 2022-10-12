import styled from 'styled-components'
import { Flex, Text, TicketFillIcon, PredictionsIcon } from '@pancakeswap/uikit'
import { useTranslation } from '@pancakeswap/localization'
import useTheme from 'hooks/useTheme'
import ColoredWordHeading from '../ColoredWordHeading'
import IconCard, { IconCardData } from '../IconCard'
import PredictionCardContent from './PredictionCardContent'
import LotteryCardContent from './LotteryCardContent'
import CompositeImage from '../CompositeImage'

const TransparentFrame = styled.div<{ isDark: boolean }>`
  background: ${({ theme }) => (theme.isDark ? 'rgba(8, 6, 11, 0.6)' : ' rgba(255, 255, 255, 0.6)')};
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.cardBorder};
  box-sizing: border-box;
  backdrop-filter: blur(12px);
  border-radius: 72px;

  ${({ theme }) => theme.mediaQueries.md} {
    padding: 40px;
  }
`

const BgWrapper = styled.div`
  z-index: -1;
  overflow: hidden;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0px;
  left: 0px;
`

const BottomLeftImgWrapper = styled(Flex)`
  position: absolute;
  left: 0;
  bottom: -64px;
  max-width: 192px;

  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 100%;
  }
`

const TopRightImgWrapper = styled(Flex)`
  position: absolute;
  right: 0;
  top: -64px;

  max-width: 192px;

  ${({ theme }) => theme.mediaQueries.md} {
    max-width: 100%;
  }
`

const PredictionCardData: IconCardData = {
  icon: <PredictionsIcon width="36px" color="inverseContrast" />,
  background: 'linear-gradient(180deg, #ffb237 0%, #ffcd51 51.17%, #ffe76a 100%);',
  borderColor: '#ffb237',
  rotation: '-2.36deg',
}

const LotteryCardData: IconCardData = {
  icon: <TicketFillIcon color="white" width="36px" />,
  background: ' linear-gradient(180deg, #7645D9 0%, #5121B1 100%);',
  borderColor: '#3C1786',
  rotation: '1.43deg',
}

const bottomLeftImage = {
  path: '/images/home/prediction-cards/',
  attributes: [
    { src: 'launch', alt: 'CAKE card' },
    { src: 'updown', alt: 'Green CAKE card with up arrow' },
    { src: 'bull', alt: 'Red Cake card with down arrow' },
    { src: 'tool', alt: 'CAKE card' },
  ],
}

const topRightImage = {
  path: '/images/home/lottery-balls/',
  attributes: [
    { src: 'green', alt: 'Lottery ball number 2' },
    { src: 'pink', alt: 'Lottery ball number 4' },
    { src: 'red', alt: 'Lottery ball number 6' },
    { src: 'yellow', alt: 'Lottery ball number 7' },
    { src: 'blue', alt: 'Lottery ball number 9' },
  ],
}

const WinSection = () => {
  const { t } = useTranslation()
  const { theme } = useTheme()

  return (
    <>
      <BgWrapper>
        <BottomLeftImgWrapper>
          <CompositeImage {...bottomLeftImage} />
        </BottomLeftImgWrapper>
        <TopRightImgWrapper>
          <CompositeImage {...topRightImage} />
        </TopRightImgWrapper>
      </BgWrapper>
      <TransparentFrame isDark={theme.isDark}>
        <Flex flexDirection="column" alignItems="center" justifyContent="center">
          <ColoredWordHeading textAlign="center" text={t('Win millions in prizes')} />
          <Text color="textSubtle">{t('Provably fair, on-chain games.')}</Text>
          <Text mb="40px" color="textSubtle">
            {t('Win big with PancakeSwap.')}
          </Text>
          <Flex m="0 auto" flexDirection={['column', null, null, 'row']} maxWidth="600px">
            <Flex
              flex="1"
              maxWidth={['275px', null, null, '100%']}
              mr={[null, null, null, '24px']}
              mb={['32px', null, null, '0']}
            >
              <IconCard {...PredictionCardData}>
                <PredictionCardContent />
              </IconCard>
            </Flex>
            <Flex flex="1" maxWidth={['275px', null, null, '100%']}>
              <IconCard {...LotteryCardData}>
                <LotteryCardContent />
              </IconCard>
            </Flex>
          </Flex>
        </Flex>
      </TransparentFrame>
    </>
  )
}

export default WinSection
