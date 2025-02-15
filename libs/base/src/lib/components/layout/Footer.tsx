import Discord from '@apps/icons/social/discord.svg'
import Email from '@apps/icons/social/email.svg'
import Github from '@apps/icons/social/github.svg'
import Medium from '@apps/icons/social/medium.svg'
import Twitter from '@apps/icons/social/twitter.svg'
import { ViewportWidth } from '@apps/theme'
import { APP_NAME } from '@apps/types'
import styled from 'styled-components'

import { useBaseCtx } from '../../BaseProviders'

import type { FC } from 'react'

const Link = styled.a`
  color: ${({ theme }) => theme.color.bodyAccent};
`

const RiskLink = styled(Link)`
  font-size: 0.75rem;
  margin-top: 0.5rem;
`

const Links = styled.ul`
  align-items: center;
  color: ${({ theme }) => theme.color.bodyAccent};

  b {
    color: ${({ theme }) => theme.color.body};
    font-weight: 500;
  }

  a {
    color: ${({ theme }) => theme.color.bodyAccent};
  }

  li {
    display: inline-block;
    margin-right: 0.75rem;
  }
`

const SocialIcons = styled(Links)`
  a {
    border-bottom: 0;
  }

  img {
    width: 20px;
    height: 20px;
    opacity: 0.8;
    filter: sepia(0%) saturate(300%) brightness(250%);
  }
`

const Version = styled.div`
  font-size: 0.6rem;

  span {
    font-weight: bold;
  }
`

const Gubbins = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const Inner = styled.div`
  padding: 1rem;

  > div {
    width: 100%;
  }

  > div > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.75rem;

    @media (min-width: ${ViewportWidth.m}) {
      flex-direction: row;
      justify-content: space-between;
    }
  }
`

const Container = styled.div`
  display: grid;
  overflow-x: hidden;
  grid-template-columns:
    1fr
    min(1000px, 100%)
    1fr;

  > * {
    grid-column: 2;
  }

  border-top: 1px solid ${({ theme }) => theme.color.lightBorder};
`

const socialIcons = [
  { title: 'Github', icon: Github, href: 'https://github.com/mstable' },
  { title: 'Discord', icon: Discord, href: 'https://discord.gg/pgCVG7e' },
  { title: 'Twitter', icon: Twitter, href: 'https://twitter.com/mstable_' },
  { title: 'Medium', icon: Medium, href: 'https://medium.com/mstable' },
  { title: 'Email', icon: Email, href: 'mailto:info@mstable.org' },
]

export const Footer: FC = () => {
  const [{ appName }] = useBaseCtx()

  const label = appName === APP_NAME.GOVERNANCE ? 'Protocol app' : 'Governance app'
  const href = appName === APP_NAME.GOVERNANCE ? 'https://mstable.app/#/' : 'https://staking.mstable.app/'

  return (
    <Container>
      <Inner>
        <div>
          <div>
            <div>
              <b>mStable</b>&nbsp;|&nbsp;
              <Link href={href} target="_blank" rel="noreferrer">
                {label}&nbsp;<span>↗</span>
              </Link>
            </div>
            <SocialIcons>
              {socialIcons.map(({ title, href, icon }) => (
                <li key={href}>
                  <a href={href} target="_blank" rel="noopener noreferrer">
                    <img src={icon} alt={title} />
                  </a>
                </li>
              ))}
            </SocialIcons>
          </div>
          <Gubbins>
            <div>
              <Version />
            </div>
          </Gubbins>
        </div>
        <RiskLink href="https://docs.mstable.org/advanced/app-usage-terms-and-conditions" target="_blank" rel="noopener noreferrer">
          Learn more about risk ↗
        </RiskLink>
      </Inner>
    </Container>
  )
}
