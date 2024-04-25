import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaBitcoin, FaGithub, FaMusic, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  logo: Logo,
  seo: {
    // title: ' SaasUI',
    // description: 'The React component library for startups',
  } as NextSeoProps,
  termsUrl: '#',
  privacyUrl: '#',
  header: {
    links: [
      {
        id: 'features',
        label: 'Szolgáltatások',
      },
      {
        id: 'pricing',
        label: 'Árak',
      },
      {
        id: 'faq',
        label: 'FAQ',
      },
      {
        // label: 'Belépés',
        // href: '/login',
      },
      {
        label: 'Rendelés',
        href: 'mailto:muzsikai.planner984@simplelogin.com',
        variant: 'primary',
      },
    ],
  },
  footer: {
    copyright: (
      <>
        {/* Built by{' '}
        <Link href="https://twitter.com/Pagebakers">Eelco Wiersma</Link> */}
      </>
    ),
    links: [
      {
        href: 'mailto:muzsikai.planner984@simplelogin.com',
        label: 'Elérhetőség',
      },
      {
        href: 'mailto:muzsikai.planner984@simplelogin.com',
        label: <FaMusic size="14" />,
      },
      {
        // href: 'mailto:muzsikai.planner984@simplelogin.com',
        // label: <Famu size="14" />,
      },
    ],
  },
  signup: {
    title: 'Start building with Saas UI',
    features: [
      {
        icon: FiCheck,
        title: 'Accessible',
        description: 'All components strictly follow WAI-ARIA standards.',
      },
      {
        icon: FiCheck,
        title: 'Themable',
        description:
          'Fully customize all components to your brand with theme support and style props.',
      },
      {
        icon: FiCheck,
        title: 'Composable',
        description:
          'Compose components to fit your needs and mix them together to create new ones.',
      },
      {
        icon: FiCheck,
        title: 'Productive',
        description:
          'Designed to reduce boilerplate and fully typed, build your product at speed.',
      },
    ],
  },
}

export default siteConfig
