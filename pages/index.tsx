import * as React from "react";
import type { NextPage } from "next";
import Image from "next/image";
import {
  Container,
  Box,
  Stack,
  HStack,
  ButtonGroup,
  Button,
  Icon,
  Heading,
  Text,
  Wrap,
  Tag,
  useClipboard,
  IconButton,
  VStack,
  Flex,
} from "@chakra-ui/react";
import { SEO } from "components/seo/seo";

import { FallInPlace } from "components/motion/fall-in-place";
import { Hero } from "components/hero";
import { Link, Br } from "@saas-ui/react";
import { Em } from "components/typography";
import { NextjsLogo, ChakraLogo } from "components/logos";
import {
  FiAlertCircle,
  FiArrowRight,
  FiBox,
  FiCheck,
  FiCode,
  FiCopy,
  FiFlag,
  FiGrid,
  FiHelpCircle,
  FiLock,
  FiMusic,
  FiPackage,
  FiSearch,
  FiSettings,
  FiSliders,
  FiSmile,
  FiTerminal,
  FiThumbsUp,
  FiToggleLeft,
  FiTrendingUp,
  FiUser,
  FiUserPlus,
} from "react-icons/fi";
import { Features } from "components/features";
import { BackgroundGradient } from "components/gradients/background-gradient";
import { Faq } from "components/faq";
import { Pricing } from "components/pricing/pricing";

import { ButtonLink } from "components/button-link/button-link";
import { Testimonial, Testimonials } from "components/testimonials";

import faq from "data/faq";
import testimonials from "data/testimonials";
import pricing from "data/pricing";

import {
  Highlights,
  HighlightsItem,
  HighlightsTestimonialItem,
} from "components/highlights";
import { FaIceCream } from "react-icons/fa";

const Home: NextPage = () => {
  return (
    <Box>
      <SEO
        title="MuzsikAI"
        description="Free SaaS landingspage starter kit"
      />
      <Box>
        <HeroSection />

        <HighlightsSection />

        <FeaturesSection />

        <TestimonialsSection />

        <PricingSection />

        <FaqSection />
      </Box>
    </Box>
  );
};

const HeroSection: React.FC = () => {
  return (
    <Box position="relative" overflow="hidden">
      <BackgroundGradient height="100%" zIndex="-1" />
      <Container maxW="container.xl" pt={{ base: 40, lg: 60 }} pb="40">
        <Stack direction={{ base: "column", lg: "row" }} alignItems="center">
          <Hero
            id="home"
            justifyContent="flex-start"
            px="0"
            title={
              <FallInPlace>
                MuzsikAI
                <Br /> Ahol a zene intelligens húrokat penget
              </FallInPlace>
            }
            description={
              <FallInPlace delay={0.4} fontWeight="medium">
               Forradalmi zenei platform, ahol igényelhetsz <Em>MESTERSÉGES INTELLIGENCIA</Em>
                <Br /> által személyre szabott zenéket. 
              </FallInPlace>
            }
          >
            <FallInPlace delay={0.8}>
              {/* <HStack pt="4" pb="12" spacing="8">
                <NextjsLogo height="28px" /> <ChakraLogo height="20px" />
              </HStack> */}

              <ButtonGroup spacing={4} pt={8} alignItems="center">
                <ButtonLink colorScheme="primary" size="lg" href="mailto:muzsikai.planner984@simplelogin.com">
                  Rendelés
                </ButtonLink>
                {/* <ButtonLink
                  size="lg"
                  href="mailto:muzsikai.planner984@simplelogin.com"
                  variant="outline"
                  rightIcon={
                    <Icon
                      // as={FiArrowRight}
                      sx={{
                        transitionProperty: "common",
                        transitionDuration: "normal",
                        ".chakra-button:hover &": {
                          transform: "translate(5px)",
                        },
                      }}
                    />
                  }
                >
                   View demo 
                </ButtonLink> */}
              </ButtonGroup>
            </FallInPlace>
          </Hero>
          <Box
            height="600px"
            position="absolute"
            display={{ base: "none", lg: "block" }}
            left={{ lg: "60%", xl: "55%" }}
            width="80vw"
            maxW="1100px"
            margin="0 auto"
          >
            <FallInPlace delay={1}>
              <Box overflow="hidden" height="100%">
                <Image
                  src="/static/screenshots/kezdd.png"
                  layout="fixed"
                  width={1200}
                  height={762}
                  alt="Screenshot of a ListPage in Saas UI Pro"
                  quality="75"
                  priority
                />
              </Box>
            </FallInPlace>
          </Box>
        </Stack>
      </Container>

      <Features
        id="benefits"
        columns={[1, 2, 4]}
        iconSize={4}
        innerWidth="container.xl"
        pt="20"
        features={[
          {
            title: "Egyszerű",
            icon: FiSmile,
            description: "Egyszerű használattal tökéletes eredményeket érhet el.",
            iconPosition: "left",
            delay: 0.6,
          },
          {
            title: "Tematikus",
            icon: FiSliders,
            description:
              "Teljes mértékben személyre szabható dalszöveg, stílus, nyelv és téma.",
            iconPosition: "left",
            delay: 0.8,
          },
          {
            title: "Összeállítható",
            icon: FiGrid,
            description:
              "Az egyes elemeket tetszés szerint lehet kombinálni és új összeállításokat készíteni.",
            iconPosition: "left",
            delay: 1,
          },
          {
            title: "Produktív",
            icon: FiThumbsUp,
            description:
              "Gyorsan és hatékonyan lehet vele dolgozni, minimalizálva a felesleges munkát.",
            iconPosition: "left",
            delay: 1.1,
          },
        ]}
        reveal={FallInPlace}
      />
    </Box>
  );
};

const HighlightsSection = () => {
  const { value, onCopy, hasCopied } = useClipboard("yarn add @saas-ui/react");

  return (
    <Highlights>
      <HighlightsItem colSpan={[1, null, 2]} title="Hogy miért tőlünk rendelj?">
        <VStack alignItems="flex-start" spacing="8">
          <Text color="muted" fontSize="xl">
          Fedezd fel a MuzsikAI-t, ahol csak a <Em>zenei igényeidet kell elküldened</Em>, és mi elkészítjük a tökéletes dallamot számodra!
          Legyen szó <Em>bármilyen szövegről, stílusról, nyelvről vagy hangulatról</Em>, a MuzsikAI egyszerűen és gyorsan hozza el neked a kívánt zenét. Rendelj még ma, és tapasztald meg a zenei alkotás új dimenzióját!
          </Text>

          <Flex
            // rounded="full"
            // borderWidth="1px"
            // flexDirection="row"
            // alignItems="center"
            // py="1"
            // ps="8"
            // pe="2"
            // bg="primary.900"
            // _dark={{ bg: "gray.900" }}
          >
            {/* <Box>
              <Text color="yellow.400" display="inline">
                yarn add
              </Text>{" "}
              <Text color="cyan.300" display="inline">
                @saas-ui/react
              </Text>
            </Box>
            <IconButton
              icon={hasCopied ? <FiCheck /> : <FiCopy />}
              aria-label="Copy install command"
              onClick={onCopy}
              variant="ghost"
              ms="4"
              isRound
              color="white" */}
            {/* /> */}
          </Flex>
        </VStack>
      </HighlightsItem>
      <HighlightsItem title="Minden Korosztálynak">
        <Text color="muted" fontSize="lg">
        Nem arra törekszünk, hogy már a létező megoldásokat újraalkossuk, és ezt neked sem kell. A zenei szakma legkiválóbb és legelismertebb eszközei közül választottuk ki a legjobbakat, amelyekre alapozva hoztuk létre a MuzsikAI-t, így <Em>mindenki számára elérhető</Em>.
        </Text>
      </HighlightsItem>
      <HighlightsTestimonialItem
        name="Horváth Klaudia"
        description=""
        avatar="/static/images/avatar.jpg"
        gradient={["pink.200", "purple.500"]}
      >
        “A MuzsikAI olyan dalokat készített nekem, amiket már régóta szerettem volna megvalósítani. Sajnos nincs jó hangom és a zenei tudásom sem a legjobb, de a MuzsikAI-al végre ki tudom fejezni az érzelmeimet!”
      </HighlightsTestimonialItem>
      <HighlightsItem
        colSpan={[1, null, 2]}
        title="Indítsd el a következő zenei projektedet!"
      >
        <Text color="muted" fontSize="lg">
        A MuzsikAI gondoskodik minden alapvető zenei igényedről, így neked csak ezeket kell elküldened nekünk.
        </Text>
        <Wrap mt="8">
          {[
            "személyre szabott dalok bárkinek és bármire",
            "minden nyelven",
            "saját vagy generált dalszövegekkel",
            "bármilyen stílusban",
            "pop",
            "rock",
            "jazz",
            "elektronikus",
            "coronita",
            "diss-track",
            "elektronikus",
            "születésnapra",
            "ajándékba",
            "évfordulókra",
            "haveroknak",
            "nagyszülőknek",
            "egyszerű használat",
          ].map((value) => (
            <Tag
              key={value}
              variant="subtle"
              colorScheme="purple"
              rounded="full"
              px="3"
            >
              {value}
            </Tag>
          ))}
        </Wrap>
      </HighlightsItem>
    </Highlights>
  );
};

const FeaturesSection = () => {
  return (
    <Features
      id="features"
      title={
        <Heading
          lineHeight="short"
          fontSize={["2xl", null, "4xl"]}
          textAlign="left"
          as="p"
        >
          Nem Megszokott Zenei Sablon
          <Br /> 
        </Heading>
      }
      description={
        <>
          A MuzsikAI minden szükséges eszközt biztosít, hogy modern, személyre szabott zenéket hozz létre. Ideális alap a következő zenei projektjeidhez vagy a saját dallamrendszered megalkotásához.
          <Br />
          
        </>
      }
      align="left"
      columns={[1, 2, 3]}
      iconSize={4}
      features={[
        {
          title: "Funkciók.",
          icon: FiMusic,
          description:
            "Testre szabható zenei funkciók, amelyekkel saját ízlésed szerint alakíthatod a dalokat, bármilyen nyelven, stílusban, szöveggel.",
          variant: "inline",
        },
        {
          title: "Kezdőcsomagok.",
          icon: FiPackage,
          description:
            "Különböző zenei stílusokban készült dalok, amelyeket saját vagy generált dalszövegekkel látunk el. Ideális ajándék párodnak, barátodnak vagy ismerőseidnek különleges alkalmakra, mint például születésnap.",
          variant: "inline",
        },
        {
          title: "Dokumentáció.",
          icon: FiSearch,
          description:
            "Minden szükséges információ részletesen dokumentálva, beleértve a generált dalok zenei stílusát, szövegét, témáját.",
          variant: "inline",
        },
        {
          title: "Felhasználói bevezetés.",
          icon: FiUser,
          description:
            "Bevezető példák, amelyek segítenek a MuzsikAI rendszerének könnyű és gyors elsajátításában.",
          variant: "inline",
        },
        {
          title: "Up-to-date.",
          icon: FiTrendingUp,
          description:
            "Minden prémium zenei elem hozzáférhető a rendszerünkön, garantálva, hogy a zene mindig friss és személyre szabott maradjon.",
          variant: "inline",
        },
        {
          title: "Kreativitás.",
          icon: FaIceCream,
          description:
            "A MuzsikAI tökéletes eszköz arra, hogy inspirálódj és kibontakoztasd kreatív énedet.",
          variant: "inline",
        },
        {
          // title: "Themes.",
          // icon: FiToggleLeft,
          // description:
          //   "Includes multiple themes with darkmode support, always have the perfect starting point for your next project.",
          // variant: "inline",
        },
        {
          // title: "Generators.",
          // icon: FiTerminal,
          // description:
          //   "Extend your design system while maintaininig code quality and consistency with built-in generators.",
          // variant: "inline",
        },
        {
          // title: "Monorepo.",
          // icon: FiCode,
          // description: (
          //   <>
          //     All code is available as packages in a high-performance{" "}
          //     <Link href="https://turborepo.com">Turborepo</Link>, you have full
          //     control to modify and adjust it to your workflow.
          //   </>
          // ),
          // variant: "inline",
        },
      ]}
    />
  );
};

const TestimonialsSection = () => {
  const columns = React.useMemo(() => {
    return testimonials.items.reduce<Array<typeof testimonials.items>>(
      (columns, t, i) => {
        columns[i % 3].push(t);

        return columns;
      },
      [[], [], []]
    );
  }, []);

  return (
    <Testimonials
      title={testimonials.title}
      columns={[1, 2, 3]}
      innerWidth="container.xl"
    >
      <>
        {columns.map((column, i) => (
          <Stack key={i} spacing="8">
            {column.map((t, i) => (
              <Testimonial key={i} {...t} />
            ))}
          </Stack>
        ))}
      </>
    </Testimonials>
  );
};

const PricingSection = () => {
  return (
    <Pricing {...pricing}>
      <Text p="8" textAlign="center" color="muted">
        {/* VAT may be applicable depending on your location. */}
      </Text>
    </Pricing>
  );
};

const FaqSection = () => {
  return <Faq {...faq} />;
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      announcement: {
        // title: " Támogasson minket🚀Támo ",
        // description:
        //   '<img src="https://img.shields.io/github/stars/saas-js/saas-ui.svg?style=social&label=Star" />',
        // href: "https://github.com/saas-js/saas-ui",
        // action: false,
      },
    },
  };
}
