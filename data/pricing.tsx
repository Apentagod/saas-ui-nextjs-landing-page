import { HStack, Text } from '@chakra-ui/react'

export default {
  title: 'Árak és Csomagok',
  description:
    'Kérlek, add meg az info@muzsikai.com e-mail címre vagy a "Rendelés" gombra kattintás után, melyik csomagot választod, és oszd meg a hozzá tartozó preferenciákat. Amint elkészülnek a zenék, elküldjük neked a DEMO verziót a kívánt dalaidból. Ha elnyerik a tetszésedet a művek, az utalást követően megküldjük a teljes dalokat. A folyamat általában 2-3 napot vesz igénybe, mire a zenék a kezedben lehetnek!',
  plans: [
    {
      id: 'oss',
      title: 'Harmónia Start',
      description: 'Kezdőcsomag azoknak, akik első lépéseiket teszik a zeneszerzés világában.',
      price: '3000,- Ft / 3 Dal',
      features: [
        {
          title: 'Személyre szabott dalok generálása - Lehetőség egyedi zenék és dallamok létrehozására személyes igények és preferenciák alapján',
        },
        {
          title: 'Több nyelven elérhető - A felhasználók különböző nyelveken hozhatnak létre és módosíthatnak dalokat, növelve ezzel a zenei alkotások sokszínűségét',
        },
        {
          title: 'Generált és saját dalszövegek - Opció a saját szövegek beillesztésére vagy az automatikusan generált szövegek használatára a zenékhez',
        },
        {
          title: '3db Egyedi és személyre szabott dal',
        },
        // {
        //   // title: 'Hotkeys',
        // },
        // {
        //   title: 'Web3 components',
        // },
        // {
        //   title: 'And much more...',
        // },
      ],
      action: {
        href: 'mailto:info@muzsikai.com',
      },
    },
    {
      id: 'bootstrap',
      title: 'Ritmus Revolúció',
      description: 'Haladó csomag több zene igényléséhez bátrabb kísérletezők számára.',
      price: '10 000,- Ft / 12 Dal',
      isRecommended: true,
      features: [
        {
          title: 'Személyre szabott dalok generálása - Lehetőség egyedi zenék és dallamok létrehozására személyes igények és preferenciák alapján',
        },
        {
          title: 'Több nyelven elérhető - A felhasználók különböző nyelveken hozhatnak létre és módosíthatnak dalokat, növelve ezzel a zenei alkotások sokszínűségét',
        },
        {
          title: 'Generált és saját dalszövegek - Opció a saját szövegek beillesztésére vagy az automatikusan generált szövegek használatára a zenékhez',
        },
        {
          title: '12db Egyedi és személyre szabott dal',
        },
        // {
        //   title: 'Next.js and Electron boilerplates',
        // },
        // {
        //   title: 'Private discord community',
        // },
        // {
        //   title: '1 year of updates',
        // },
        // null,
        // {
        //   title: 'Private beta access',
        //   iconColor: 'green.500',
        // },
      ],
      action: {
        href: 'mailto:info@muzsikai.com',
      },
    },
    {
      id: 'startup',
      title: 'Melódia Mester',
      description: 'Profi csomag komplex zenei kihívásokhoz, tökéletes, ha egy konkrét albumot szeretnél készíteni vagy csak minél több dalt szeretnél kapni.',
      price: (
        <HStack>
          <Text textDecoration="line-through" fontSize="sm" color="gray.400">
          24 999,- Ft
          </Text>
          <Text>20 000,- Ft / 25 Dal</Text>
        </HStack>
      ),
      features: [
        {
          title: 'Személyre szabott dalok generálása - Lehetőség egyedi zenék és dallamok létrehozására személyes igények és preferenciák alapján',
        },
        {
          title: 'Több nyelven elérhető - A felhasználók különböző nyelveken hozhatnak létre és módosíthatnak dalokat, növelve ezzel a zenei alkotások sokszínűségét',
        },
        {
          title: 'Generált és saját dalszövegek - Opció a saját szövegek beillesztésére vagy az automatikusan generált szövegek használatára a zenékhez',
        },
        {
          title: '1-2 nap-os feldolgozási idő',
        },
        null,
        {
          title: 'VIP sorban állás',
          iconColor: 'green.500',
        },
      ],
      action: {
        href: 'mailto:info@muzsikai.com',
      },
    },
  ],
}
