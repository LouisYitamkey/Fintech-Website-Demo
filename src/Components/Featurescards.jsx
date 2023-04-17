import React from "react";
import Button from '@mui/material/Button';
import { BiChevronRight } from "react-icons/bi";
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
  import { IconGauge, IconUser, IconCookie } from '@tabler/icons-react';
  
  const mockdata = [
    {
      title: 'Verify payments',
      description: 'Use verified account information to guarantee  source and destination of funds. Prevent payments from failing due to user error. ',
      icon: IconGauge,
    },
    {
      title: 'Onboard new users',
      description: ' Use real-time data sourced from your users bank to instantly confirm or challenge account ownership',
      icon: IconUser,
    },
    {
      title: ' Onboard new sellers',
      description: 'Verify that funds and payouts are going into the right account to protect both sellers and shoppers ',
      icon: IconCookie,
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
  
  export function FeaturesCards() {
    const { classes, theme } = useStyles();
    const features = mockdata.map((feature) => (
      <Card key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
        <feature.icon size={rem(50)} stroke={2} color={theme.fn.primaryColor()} />
        <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
          {feature.title}
        </Text>
        <Text className="text-lg" fz="sm" c="dimmed" mt="sm">
          {feature.description}
        </Text>
      </Card>
    ));
  
    return (
      <Container className=" py-10 md:py-28" size="xl" py="xl">
       
  
        <Title  order={2}  className={`${classes.title} text-[#093554] font-bold`} ta="left" mt="sm">
        Use Cases
        </Title>
  
        
  
        <SimpleGrid cols={3} spacing="xl" mt={50} breakpoints={[{ maxWidth: 'md', cols: 1 }]}>
          {features}
        </SimpleGrid>

        <div className=' hidden md:flex justify-center items-center mt-10 md:mt-20 space-x-5 '>
<Button className=" bg-[#f7ab1b] border-[#f7ab1b]  text-base hover:border-[#f7ab1b] hover:bg-[#f38d00]  text-white px-6 py-2 " variant="outlined"> Contact Us <BiChevronRight size={30} /> </Button>
<Button className=" text-[#f7ab1b] border-[#f7ab1b] hover:text-white hover:border-[#f7ab1b] hover:bg-[#f38d00] text-base  px-6 py-3 " variant="outlined"> Documentation  </Button>
</div>

{/* For Mobile */}
<div className=' pt-10 md:hidden'>
    <div className='w-full h-full mb-5  '>
    <button  class="fluid ui button orange ">  Contact Us </button>
    </div>
    <div className='w-full h-full mb-5 '>
    <button  class="fluid ui button blue "> Documentation </button>
    </div>

</div>
      </Container>
    );
  }