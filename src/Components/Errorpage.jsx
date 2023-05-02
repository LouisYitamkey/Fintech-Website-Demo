import {
    createStyles,
    Image,
    Container,
    Title,
    Text,
    Button,
    SimpleGrid,
    rem,
  } from '@mantine/core';
  import { Link } from 'react-router-dom';
  import Logo from '../images/404image.jpg'
  

  
  const useStyles = createStyles((theme) => ({
    root: {
      paddingTop: rem(260),
      paddingBottom: rem(80),
    },
  
    title: {
      fontWeight: 900,
      fontSize: rem(34),
      marginBottom: theme.spacing.md,
      fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  
      [theme.fn.smallerThan('sm')]: {
        fontSize: rem(32),
      },
    },
  
    control: {
      [theme.fn.smallerThan('sm')]: {
        width: '100%',
      },
    },
  
    mobileImage: {
      [theme.fn.largerThan('sm')]: {
        display: 'none',
      },
    },
  
    desktopImage: {
      [theme.fn.smallerThan('sm')]: {
        display: 'none',
      },
    },
  }));
  
  export function NotFoundImage() {
    const { classes } = useStyles();
  
    return (
      <Container className={classes.root}>
        <SimpleGrid spacing={80} cols={2} breakpoints={[{ maxWidth: 'sm', cols: 1, spacing: 40 }]}>
         
          <img src={Logo} className={classes.mobileImage}  alt="" />
          <div>
            <Title className={classes.title}>Something is not right...</Title>
            <Text color="dimmed" size="lg">
              Page you are trying to open does not exist. You may have mistyped the address, or the
              page has been moved to another URL. If you think this is an error contact support.
            </Text>
            <Button variant="outline" size="md" mt="xl" className={classes.control}>
            <Link to='/'> Get back to home page </Link>
            </Button>
          </div>
          <img src={Logo} className={classes.desktopImage}  alt="" />
        </SimpleGrid>
      </Container>
    );
  }