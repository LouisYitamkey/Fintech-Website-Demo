import {
  ThemeIcon,
  Text,
  Title,
  Container,
  SimpleGrid,
  createStyles,
  rem,
} from '@mantine/core'
import {
  IconGauge,
  IconCookie,
  IconUser,
  IconMessage2,
  IconLock,
} from '@tabler/icons-react'

export const MOCKDATA = [
  {
    icon: IconGauge,
    title: 'Extreme performance',
    description:
      'This dust is actually a powerful poison that will  ake it faster.',
  },
  {
    icon: IconUser,
    title: 'Privacy focused',
    description:
      'This dust is actually a powerful poison that will  ake it faster',
  },
  {
    icon: IconCookie,
    title: 'No third parties',
    description:
      'This dust is actually a powerful poison that will  ake it faster',
  },
  {
    icon: IconLock,
    title: 'Secure by default',
    description:
      'This dust is actually a powerful poison that will  ake it faster',
  },
  {
    icon: IconMessage2,
    title: '24/7 Support',
    description:
      'This dust is actually a powerful poison that will  ake it faster',
  },
  {
    icon: IconMessage2,
    title: '24/7 Support',
    description:
      'This dust is actually a powerful poison that will  ake it faster',
  },
  {
    icon: IconMessage2,
    title: '24/7 Support',
    description:
      'This dust is actually a powerful poison that will  ake it faster',
  },
]

export function Feature({ icon: Icon, title, description }) {
  return (
    <div>
      <ThemeIcon variant="light" size={40} radius={40}>
        <Icon size="1.1rem" stroke={1.5} />
      </ThemeIcon>
      <Text className="pt-3 pb-2  tracking-wide text-lg md:text-xl font-bold">
        {title}
      </Text>
      <Text size="md" color="dimmed" sx={{ lineHeight: 1.6 }}>
        {description}
      </Text>
    </div>
  )
}

const useStyles = createStyles((theme) => ({
  wrapper: {
    paddingTop: `calc(${theme.spacing.xl} * 4)`,
    paddingBottom: `calc(${theme.spacing.xl} * 4)`,

    paddingLeft: 0, // Adjust the left spacing as needed
    paddingRight: 0,
  },

  //   title: {
  //     fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  //     fontWeight: 900,
  //     marginBottom: theme.spacing.md,
  //     textAlign: 'center',

  //     [theme.fn.smallerThan('sm')]: {
  //       fontSize: rem(28),
  //       textAlign: 'left',
  //     },
  //   },

  description: {
    textAlign: 'center',

    [theme.fn.smallerThan('sm')]: {
      textAlign: 'left',
    },
  },
}))

export function FeaturesGrid({ title, description, data = MOCKDATA }) {
  const { classes } = useStyles()
  const features = data.map((feature, index) => (
    <Feature {...feature} key={index} />
  ))

  return (
    <Container className={classes.wrapper}>
      <Title className="md:text-2xl text-xl   md:pl-1 text-[#093554]  md:font-bold text-center">
        {title}
      </Title>

      <Container size={560} p={0}>
        <Text
          size="sm"
          className="md:text-5xl text-center hidden md:block text-[#093554] md:py-6  text-4xl pl-10 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[39px] md:leading-[50px] "
        >
          {description}
        </Text>
      </Container>

      <SimpleGrid
        mt={60}
        cols={3}
        verticalSpacing={100}
        spacing={120}
        breakpoints={[
          { maxWidth: 980, cols: 2, spacing: 'xl' },
          { maxWidth: 755, cols: 1, spacing: 'xl' },
        ]}
      >
        {features}
      </SimpleGrid>
    </Container>
  )
}
