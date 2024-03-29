import {
  createStyles,
  Header,
  HoverCard,
  Group,
  Button,
  UnstyledButton,
  Text,
  SimpleGrid,
  ThemeIcon,
  Anchor,
  Divider,
  Center,
  Box,
  Burger,
  Drawer,
  Collapse,
  ScrollArea,
  rem,
} from '@mantine/core'
import { MantineLogo } from '@mantine/ds'
import { useDisclosure } from '@mantine/hooks'
import {
  IconNotification,
  IconCode,
  IconBook,
  IconChartPie3,
  IconFingerprint,
  IconCoin,
  IconChevronDown,
} from '@tabler/icons-react'
import Logo from '../images/pavelonlogo.png'
import { Link } from 'react-router-dom'

const useStyles = createStyles((theme) => ({
  link: {
    display: 'flex',
    alignItems: 'center',
    height: '100%',
    paddingLeft: theme.spacing.md,
    paddingRight: theme.spacing.md,
    textDecoration: 'none',
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontWeight: 500,
    fontSize: 15,

    [theme.fn.smallerThan('sm')]: {
      height: rem(42),
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[6]
          : theme.colors.gray[0],
    }),
  },

  subLink: {
    width: '100%',
    padding: `${theme.spacing.xs} ${theme.spacing.md}`,
    borderRadius: theme.radius.md,

    ...theme.fn.hover({
      backgroundColor:
        theme.colorScheme === 'dark'
          ? theme.colors.dark[7]
          : theme.colors.gray[0],
    }),

    '&:active': theme.activeStyles,
  },

  dropdownFooter: {
    backgroundColor:
      theme.colorScheme === 'dark'
        ? theme.colors.dark[7]
        : theme.colors.gray[0],
    margin: `calc(${theme.spacing.md} * -1)`,
    marginTop: theme.spacing.sm,
    padding: `${theme.spacing.md} calc(${theme.spacing.md} * 2)`,
    paddingBottom: theme.spacing.xl,
    borderTop: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
    }`,
  },

  hiddenMobile: {
    [theme.fn.smallerThan('sm')]: {
      display: 'none',
    },
  },

  hiddenDesktop: {
    [theme.fn.largerThan('sm')]: {
      display: 'none',
    },
  },
}))

const mockdata = [
  {
    icon: IconCode,
    title: 'KYC',
    description: 'Conduct comprehension KYC with real time verification',
    path: '/kyc',
  },
  {
    icon: IconCoin,
    title: 'Digital Lending',
    description: 'The Next-Gen Platform For Automated Digital Lending.',
    path: '/digitalLending',
  },
  {
    icon: IconBook,
    title: 'Capital by API',
    description: 'Lend money to users at scale',
    path: '/capitalbyapi',
  },
  {
    icon: IconFingerprint,
    title: 'Digital Accounts API',
    description: 'Flexible and simple opening of accounts by users',
    //   path: '/digital-accounts-api'
  },
  {
    icon: IconChartPie3,
    title: 'Investment as a service',
    description: 'Grant your customers the ability to own investment',
    //   path: '/investment-as-a-service'
  },
  {
    icon: IconNotification,
    title: 'Banking as a service',
    description: 'Embed financial services in your platform or products.',
    //   path: '/banking-as-a-service'
  },
]

const mockdata2 = [
  {
    icon: IconBook,
    title: 'Buy Now Pay Later',
    description: 'Description for BNPL',
    path: '/new-feature-1',
  },
  {
    icon: IconChartPie3,
    title: 'Installment Loans',
    description: 'Description for installment loans',
    path: '/new-feature-2',
  },
  {
    icon: IconChartPie3,
    title: 'Payment Cards',
    description: 'Description for payment cards',
    path: '/new-feature-2',
  },
  {
    icon: IconChartPie3,
    title: 'Next Gen Constructs',
    description: 'Description for payment cards',
    path: '/new-feature-2',
  },
  // Add more items for additional links
]

export function HeaderMegaMenu() {
  const [
    drawerOpened,
    { toggle: toggleDrawer, close: closeDrawer },
  ] = useDisclosure(false)
  const [linksOpened, { toggle: toggleLinks }] = useDisclosure(false)
  const { classes, theme } = useStyles()

  const links = mockdata.map((item) => (
    <Link to={item.path} className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="md" fw={500}>
            {item.title}
          </Text>
          <Text size="sm" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </Link>
  ))

  const linksNewUseCases = mockdata2.map((item) => (
    <Link to={item.path} className={classes.subLink} key={item.title}>
      <Group noWrap align="flex-start">
        <ThemeIcon size={34} variant="default" radius="md">
          <item.icon size={rem(22)} color={theme.fn.primaryColor()} />
        </ThemeIcon>
        <div>
          <Text size="md" fw={500}>
            {item.title}
          </Text>
          <Text size="sm" color="dimmed">
            {item.description}
          </Text>
        </div>
      </Group>
    </Link>
  ))

  return (
    <Box>
      <Header height={90} className="md:px-52  px-3">
        <Group position="apart" sx={{ height: '100%' }}>
          <Link to="/">
            {' '}
            <img className="object-contain w-[124px]  h-[32px]" src={Logo} />
          </Link>

          <Group
            sx={{ height: '100%' }}
            spacing={0}
            className={classes.hiddenMobile}
          >
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Products
                    </Box>
                    <IconChevronDown size={16} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                <Group position="apart" px="md">
                  <Text fw={500}>Features</Text>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {links}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart"></Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>

            <a href="#" className={classes.link}>
              Solutions
            </a>
            <HoverCard
              width={600}
              position="bottom"
              radius="md"
              shadow="md"
              withinPortal
            >
              <HoverCard.Target>
                <a href="#" className={classes.link}>
                  <Center inline>
                    <Box component="span" mr={5}>
                      Use Cases
                    </Box>
                    <IconChevronDown size={16} />
                  </Center>
                </a>
              </HoverCard.Target>

              <HoverCard.Dropdown sx={{ overflow: 'hidden' }}>
                <Group position="apart" px="md">
                  <Text fw={500}>Features</Text>
                </Group>

                <Divider
                  my="sm"
                  mx="-md"
                  color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
                />

                <SimpleGrid cols={2} spacing={0}>
                  {linksNewUseCases}
                </SimpleGrid>

                <div className={classes.dropdownFooter}>
                  <Group position="apart"></Group>
                </div>
              </HoverCard.Dropdown>
            </HoverCard>
          </Group>

          <Group className={classes.hiddenMobile}>
            <Button className=" py-3" variant="default">
              Contact Us
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            className={classes.hiddenDesktop}
          />
        </Group>
      </Header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="md"
        title={<img src={Logo} alt="Logo" className="w-[120px] h-[32px]" />}
        className={classes.hiddenDesktop}
        zIndex={1000000}
      >
        <Divider
          my="sm"
          color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
        />

        <UnstyledButton className={classes.link} onClick={toggleLinks}>
          <Center inline>
            <Box component="span" mr={5}>
              Products
            </Box>
            <IconChevronDown size={16} color={theme.fn.primaryColor()} />
          </Center>
        </UnstyledButton>
        <Collapse onClick={toggleDrawer} in={linksOpened}>
          {links}
        </Collapse>
        <a href="#" className={classes.link}>
          Solutions
        </a>
        <a href="#" className={classes.link}>
          Use Cases
        </a>

        <Divider
          my="sm"
          color={theme.colorScheme === 'dark' ? 'dark.5' : 'gray.1'}
        />

        <Group position="center" grow pb="xl" py={50} px="md">
          <Button
            className="bg-sky-600 hover:bg-sky-500 text-white"
            onClick={() => (window.location.href = 'tel:+233541930635')}
            variant="default"
          >
            Contact Sales
          </Button>
        </Group>
      </Drawer>
    </Box>
  )
}
