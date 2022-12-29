import WoW from '@assets/games/wow.png'
import Hearthstone from '@assets/games/hearthstone.png'
import Diablo4 from '@assets/games/diablo4.png'
import DiabloImmortal from '@assets/games/diabloimmortal.png'
import Starcraft2 from '@assets/games/starcraft2.png'

import Diablo4Banner from '@assets/banner/games/diablo-bg.png'
import HearthstoneBanner from '@assets/banner/games/hearthstone-bg.png'
import WoWBanner from '@assets/banner/games/wow-bg.png'

import Diablo4Logo from '@assets/banner/games/diablo-logo.png'
import HearthstoneLogo from '@assets/banner/games/hearthstone-logo.png'
import WoWLogo from '@assets/banner/games/wow-logo.png'

import Diablo4Gif from '@assets/banner/games/diablo-animation.gif'
import HearthstoneGif from '@assets/banner/games/hearthstone-animation.gif'
import WoWGif from '@assets/banner/games/wow-animation.gif'

import Diablo4Cover from '@assets/banner/games/diablo-animation-cover.png'
import HearthstoneCover from '@assets/banner/games/hearthstone-animation-cover.png'
import WoWCover from '@assets/banner/games/wow-animation-cover.png'

export const banner = [
  {
    name: 'Diablo® IV',
    icon: Diablo4,
    img: Diablo4Banner,
    logo: Diablo4Logo,
    animation: Diablo4Gif,
    cover: Diablo4Cover,
    title: 'Retorna à escuridão com o game Diablo IV',
    subtitle: 'O retorno de Lilith traz uma era de escuridão e sofrimento',
    button: 'Jogue agora',
  },
  {
    name: 'Hearthstone®',
    icon: Hearthstone,
    img: HearthstoneBanner,
    logo: HearthstoneLogo,
    animation: HearthstoneGif,
    cover: HearthstoneCover,
    title: 'Novo pacote de expansão de Hearthstone',
    subtitle: 'A Horda e a Aliança se encontraram no Vale Alterac para lutar',
    button: 'Reserve agora na pré-venda',
  },
  {
    name: 'World of Warcraft®',
    icon: WoW,
    img: WoWBanner,
    logo: WoWLogo,
    animation: WoWGif,
    cover: WoWCover,
    title: 'Desbrave as Terras Sombrias em Shadowlands!',
    subtitle: 'O que jaz além do mundo que você conhece?',
    button: 'Reserve agora na pré-venda',
  },
  {
    name: 'Diablo® Immortal',
    icon: DiabloImmortal,
  },
  {
    name: 'StarCraft® II',
    icon: Starcraft2,
  },
]
