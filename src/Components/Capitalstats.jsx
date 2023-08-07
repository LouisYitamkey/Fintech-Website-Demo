import { createStyles, Text, rem } from '@mantine/core'

const useStyles = createStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: 'white',
    padding: `calc(${theme.spacing.xl} * 1.5)`,
    borderRadius: theme.radius.md,
    [theme.fn.smallerThan('sm')]: {
      flexDirection: 'column',
    },
  },

  title: {
    color: theme.black,
    textTransform: 'uppercase',
    fontWeight: 500,
    fontSize: theme.fontSizes.md,
  },

  count: {
    color: theme.black,
    fontSize: rem(40),
    lineHeight: 1,
    fontWeight: 700,
    marginBottom: theme.spacing.md,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },

  description: {
    color: 'ash',
    fontSize: theme.fontSizes.md,
    marginTop: rem(5),
  },

  stat: {
    flex: 1,

    '& + &': {
      paddingLeft: theme.spacing.xl,
      marginLeft: theme.spacing.xl,
      borderLeft: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,

      [theme.fn.smallerThan('sm')]: {
        paddingLeft: 0,
        marginLeft: 0,
        borderLeft: 0,
        paddingTop: theme.spacing.xl,
        marginTop: theme.spacing.xl,
        borderTop: `${rem(1)} solid ${theme.colors[theme.primaryColor][3]}`,
      },
    },
  },
}))

function StatsGroup({ data }) {
  const { classes } = useStyles()
  const stats = data.map((stat) => (
    <div key={stat.title} className={classes.stat}>
      <Text className={classes.count}>{stat.stats}</Text>
      <Text className={classes.title}>{stat.title}</Text>
      <Text className={classes.description}>{stat.description}</Text>
    </div>
  ))
  return <div className={classes.root}>{stats}</div>
}

export default StatsGroup
