import { Button } from '@chakra-ui/react'
import { Link } from '@saas-ui/react'
import { NextSeoProps } from 'next-seo'
import { FaBitcoin, FaGithub, FaMusic, FaTwitter } from 'react-icons/fa'
import { FiCheck } from 'react-icons/fi'
import { Logo } from './logo'

const siteConfig = {
  // logo: Logo,
  seo: {
    title: "MuzsikAI",
    titleTemplate: "%s | Dal létrehozása szövegből",
    defaultTitle: "AI Dalgenerátor - Szövegekből zene készítése azonnal",
    themeColor: "#4a90e2",
    noindex: false,
    nofollow: false,
    robotsProps: {
        maxSnippet: -1,
        maxImagePreview: 'large',
        maxVideoPreview: -1,
    },
    description: "Generálj zenét a saját szövegeidből a legmodernebb AI technológia segítségével. Készíts saját dalt most!",
    canonical: "https://www.muzsikai.com",
    openGraph: {
      title: "AI Dalgenerátor - Szövegekből zene készítése azonnal",
      description: "Generálj zenét a saját szövegeidből a legmodernebb AI technológia segítségével. Készíts saját dalt most!",
      url: "https://www.muzsikai.com",
      type: 'website',
      images: [
          {
              url: 'https://www.muzsikai.com/og-image-hu.jpg',
              width: 800,
              height: 600,
              alt: 'AI dalalkotás vizualizáció',
          },
      ],
  },
    facebook: {
        appId: "",
    },
    twitter: {
        handle: '',
        site: '',
        cardType: '',
    },
    additionalMetaTags: [
        {
            name: 'viewport',
            content: 'width=device-width, initial-scale=1.0',
        },
        {
            name: 'keywords',
            content: 'AI Zene, Dalgenerátor, Zenei AI, Zene készítés, Szövegből dal, AI Zeneszerzés, Mesterséges Intelligencia, Mesterséges, AI, Mesterséges Intelligencia zene',
        },
    ],
    additionalLinkTags: [
        {
            rel: 'icon',
            href: '/favicon.ico',
        },
        {
            rel: 'apple-touch-icon',
            href: '/apple-touch-icon.png',
            sizes: '76x76',
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.googleapis.com',
        },
        {
            rel: 'preconnect',
            href: 'https://fonts.gstatic.com',
            crossorigin: true,
        },
        {
            rel: 'stylesheet',
            href: 'https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap',
        },
    ],
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
        href: 'mailto:info@muzsikai.com',
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
        href: 'mailto:info@muzsikai.com',
        label: 'Elérhetőség',
      },
      {
        href: 'mailto:info@muzsikai.com',
        label: <FaMusic size="14" />,
      },
      {
        // href: 'mailto:info@muzsikai.com',
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
