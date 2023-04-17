import {
    createStyles,
    Badge,
    Group,
    Title,
    Text,
    Card,
    SimpleGrid,
    Container,
    rem,
  } from '@mantine/core';
  import { BiChevronRight } from "react-icons/bi";
  import Button from '@mui/material/Button';
  import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
  
  const mockdata = [
    {
      title: 'Boost conversion',
      description: 'Remove lengthy forms and manual paperwork, applicants can verify identityand account information in a few clicks ',
      icon: IconGauge,
    },
    {
      title: 'Combat fraud',
      description: 'Authenticate accounts and payments directly with the bank, slashing fraud and chargebacksand saving you 0.5% - 1% of revenues.',
      icon: IconUser,
    },
    {
      title: 'Reduce costs',
      description: 'Say goodbye to expensive data collection.  We use open banking infrastructure  to offer the most competitive rates.',
      icon: IconGauge,
    },
    {
        title: 'Bank grade security',
        description:
          'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
        icon: IconCookie,
      },
      {
        title: 'Completely customisable',
        description:
          'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
        icon: IconGauge,
      },
      {
        title: 'Completely customisable',
        description:
          'They’re popular, but they’re rare. Trainers who show them off recklessly may be targeted by thieves',
        icon: IconGauge,
      },
    
  ];
  
  const useStyles = createStyles((theme) => ({
    title: {
    
      fontWeight: 900,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(24),
      },
    },
  
    description: {
      maxWidth: 600,
      margin: 'auto',
  
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
        marginLeft: 'auto',
        marginRight: 'auto',
      },
    },
  
    card: {
      border: `${rem(1)} solid ${
        theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[1]
      }`,
    },
  
    cardTitle: {
      '&::after': {
        content: '""',
        display: 'block',
        backgroundColor: theme.fn.primaryColor(),
        width: rem(45),
        height: rem(2),
        marginTop: theme.spacing.sm,
      },
    },
  }));
  
  export function GrowthCards() {
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container className=' py-10 md:py-28' size="xl" py="xl">
       
  
        <Title order={2} className={`${classes.title} text-white `} ta="left" mt="sm">
        Your platform for growth
        </Title>
  
      
  
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>

        <div className=' pt-14  hidden md:flex justify-center items-center'>
        <Button className=" bg-[#f7ab1b] border-[#f7ab1b]  text-base hover:border-[#f7ab1b] hover:bg-[#f38d00]  text-white px-6 py-2 " variant="outlined"> Get In Touch <BiChevronRight size={30} /> </Button>
        </div>

     <div className='w-full h-full mt-10 mb-5 md:hidden'>
    <button  class="fluid ui button orange ">  Get in Touch </button>
    </div>


        
      </Container>
    );
  }