/**
 * HeaderOptions.ts
 * This file contains the configuration for the header links in the application.
 */
export const HeaderOptions: HeaderOptionsType = {
  links: [
    {
      label: 'Cadastro de Monstros',
      path: '/cadastro',
      icon: '📋',
    },
    {
      label: 'Arena de Batalha',
      path: '/batalhas',
      icon: '⚔️',
    },
  ],
  getLinkClass: (path: string): string => {
    const currentPath = window.location.pathname
    return currentPath === path ? 'site-header-link active' : 'site-header-link'
  },
}

export type HeaderLink = {
  label: string
  path: string
  icon: string
}

type HeaderOptionsType = {
  links: HeaderLink[]
  getLinkClass: (path: string) => string
}
