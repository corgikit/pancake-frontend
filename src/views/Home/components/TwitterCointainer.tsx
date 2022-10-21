import { TwitterTimelineEmbed } from 'react-twitter-embed'
import { useTheme } from 'styled-components'

const TwitterContainer = () => {
  const theme = useTheme()
  const bgColor = theme.isDark ? 'dark' : 'light'
  return (
    <section className="twitterContainer">
      <div className="twitter-embed">
        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="PancakeSwap"
          options={{
            tweetLimit: '10',
            width: '100%',
            height: '850px',
          }}
          theme={bgColor}
        />
      </div>
    </section>
  )
}

export default TwitterContainer
