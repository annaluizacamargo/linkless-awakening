import { Divider, Link } from '@mui/material'
import { HeaderOptions } from '@utils/constants/HeaderOptions'
import { stringToMd5 } from '@utils/helpers/String.helper'
import type { HeaderLink } from '@utils/constants/HeaderOptions'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import GoldLogo from '@assets/logo/linkless-awakening-logo-gold.svg'
import React from 'react'
import './styles.css'

/**
 * Header component
 * @returns {JSX.Element} Header component
 */
export default function Header(): React.JSX.Element {
  return (
    <header className="site-header">
      <Box className="site-header-content">
        <Link href="/">
          <img src={GoldLogo} alt="Linkless Awakening Logo" className="logo" height={4} />
        </Link>

        <Container className="site-header-container desktop">
          {HeaderOptions.links.map((link: HeaderLink, index: number) => (
            <React.Fragment key={stringToMd5(link.path + 'section')}>
              <Link
                key={stringToMd5(index + link.path)}
                href={link.path}
                color="inherit"
                underline="none"
                className={HeaderOptions.getLinkClass(link.path)}
              >
                {link.icon} {link.label}
              </Link>

              {index < HeaderOptions.links.length - 1 && (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ backgroundColor: '#212732', width: '2px' }}
                  key={stringToMd5('divider' + index)}
                />
              )}
            </React.Fragment>
          ))}
        </Container>

        <Container className="site-header-container mobile">
          {HeaderOptions.links.map((link: HeaderLink, index: number) => (
            <React.Fragment key={stringToMd5(link.path + 'section')}>
              <Link
                key={stringToMd5(index + link.path)}
                href={link.path}
                color="inherit"
                underline="none"
                className={HeaderOptions.getLinkClass(link.path)}
              >
                {link.icon}
              </Link>

              {index < HeaderOptions.links.length - 1 && (
                <Divider
                  orientation="vertical"
                  flexItem
                  sx={{ backgroundColor: '#212732', width: '2px' }}
                  key={stringToMd5('divider' + index)}
                />
              )}
            </React.Fragment>
          ))}
        </Container>
      </Box>
    </header>
  )
}
