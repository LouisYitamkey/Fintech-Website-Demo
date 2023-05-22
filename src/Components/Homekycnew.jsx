import {
    createStyles,
    Title,
    SimpleGrid,
    Text,
    ThemeIcon,
    Grid,
    Col,
    rem,
  } from '@mantine/core';
  import { IconReceiptOff, IconFlame, IconCircleDotted, IconFileCode, IconZoomCheckFilled , IconUsers, IconCreditCard, IconShieldChevron, IconBuildingBank} from '@tabler/icons-react';
  import Secondvideo from '../video/secondvideo.mp4'
  import { Button } from '@mui/material'
  import { BiChevronRight } from "react-icons/bi";
  
  const useStyles = createStyles((theme) => ({
    wrapper: {
      padding: `calc(${theme.spacing.xl} * 2) ${theme.spacing.xl}`,
    },
  
    title: {
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
      fontSize: rem(36),
      fontWeight: 900,
      lineHeight: 1.1,
      marginBottom: theme.spacing.md,
      color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    },
  }));
  
  const features = [
    {
      icon: IconZoomCheckFilled,
      title: 'Phone Number Verification',
      description: 'Verify the identity of your users with just an ID number, so users spend less time onboarding and more time transacting.',
    },
    {
      icon: IconFileCode,
      title: 'ID Verification',
      description: 'Build type safe applications, all components and hooks export types',
    },
   
    {
      icon: IconUsers,
      title: 'Consent Verification',
      description:
        'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
    },
   
      {
        icon: IconBuildingBank,
        title: 'Employment Verification',
        description:
          'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
      },
      
      {
        icon: IconCreditCard,
        title: 'Income Verification',
        description:
          'Customize colors, spacing, shadows, fonts and many other settings with global theme object',
      },
      {
        icon: IconCircleDotted,
        title: 'Address Verification ',
        description:
          'With new :focus-visible selector focus ring will appear only when user navigates with keyboard',
      },
      
    
    
  
  ];
  
  export function FeaturesTitle() {
    const { classes } = useStyles();
  
    const items = features.map((feature) => (
      <div key={feature.title}>
        <ThemeIcon
          size={44}
          radius="md"
          variant="gradient"
        
          color='red'
        >
          <feature.icon size={rem(26)} stroke={1.5} />
        </ThemeIcon>
        <Text  mt="sm" fw={500}>
          {feature.title}
        </Text>
        
      </div>
    ));
  
    return (
      <div  className={classes.wrapper} >
        <Grid  gutter={80} >
          <Col  span={12} md={5}>
          <span className='md:text-xl text-base ml-3  md:hidden bg-sky-500 px-5    rounded-full text-white  md:font-bold '> Enhanced KYC</span> 
         
             <h1 className='md:text-7xl md:hidden text-[#093554]  md:pb-10 pt-6  text-4xl  md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[30px] md:leading-[60px] '> The easiest way to Verify and Onboard users. </h1>

           <div className='md:pt-20 pt-10 flex justify-center items-center'>
           <video  className='w-80 border-8    rounded-3xl border-slate-200 ' autoPlay muted loop src={Secondvideo} />

           </div>
            
           
  
            
          </Col>
          <Col className='md:pt-32 md:pb-24' span={12} md={7}>
            <div className='hidden md:block'> 
            <span className='md:text-xl text-2xl  bg-sky-500 px-5    rounded-full text-white  md:font-bold '> Credit Infrastructure</span> 

            </div>

        
          <h1 className='md:text-5xl hidden text-[#093554] md:block  md:py-6 tracking-wide text-4xl pl-10 md:pl-0 font-extrabold md:font-bold ss:leading-[100.8px] leading-[39px] md:leading-[50px] '>The easiest way to  Verify and Onboard  users. </h1>

       <p className=' md:pt-1 pb-10 md:pb-8 text-lg    md:leading-[30px]  md:px-0  ' >
       Verify Phone Numbers, ID Cards, and Addresses. Verify  the user’s  <br className='hidden md:block'/>  consent in real-time with consent verification. Know  that people <br className='hidden md:block'/>are who  they say they are, Faster.  </p>
            <SimpleGrid cols={3} verticalSpacing={50} spacing={30} breakpoints={[{ maxWidth: 'md', cols: 3, }]}>
              {items} 
            
            </SimpleGrid>

          <div className='hidden md:block pt-14 pl-24'>
          <Button className="  bg-sky-600 text-base   hover:bg-sky-500  text-white px-6 py-2 " variant="outlined" > Contact Us <BiChevronRight size={30} /> </Button> &nbsp; &nbsp; &nbsp; &nbsp; 
          <Button className="  border-sky-600 text-base hover:text-white  hover:bg-sky-600   px-6 py-3 " variant="outlined" > Documentation  </Button>

          </div>

          <div className='md:hidden'>
          <div className=' pt-14 md:hidden'>
    <div className='w-full h-full mb-5 '>
    <button  class="fluid ui button blue ">  Contact Us </button>
    </div>
    <div className='w-full h-full '>
    <button  class="fluid ui button  "> Documentation </button>
    </div>

      </div>

          </div>
          </Col>
        
        </Grid>
        
      </div>
    );
  }