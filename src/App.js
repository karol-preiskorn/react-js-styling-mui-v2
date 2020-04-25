import React from "react";
import sponsors from "./Sponsors";
import {
  Typography,
  Grid,
  CssBaseline,
  Avatar,
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  sponsorImage: {
    height: 64,
    width: 64,
    filter: "grayscale(1)",
    "&:hover": {
      filter: "grayscale(0)"
    }
  },
  headerBackground: {
    background:
      "url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60') no-repeat center center fixed",
    maxWidth: "100%",
    backgroundSize: "cover",
    height: 600
  },
  headerText: {
    textAlign: "right",
    fontSize: "4.5rem",
    marginRight: 24,
    fontWeight: 600,
    [theme.breakpoints.up("sm")]: {
      textAlign: "center"
    }
  },
  subHeader: {
    marginTop: 4
  },
  body: {
    marginBottom: 24
  },
  hr: {
    margin: "auto",
    background:
      "linear-gradient(90deg, rgba(163, 100, 217, 1) 0%, rgba(12, 215, 246, 1) 100%)",
    height: 1,
    border: 0,
    maxWidth: 900,
    marginBottom: 24,
    marginTop: 8
  },
  container: {
    maxWidth: 900,
    margin: "auto",
    padding: 24
  }
}));

const Header = () => {
  const classes = useStyles();
  return (
    <Grid
      className={classes.headerBackground}
      container
      alignItems="center"
      justify="center"
    >
      <Grid item xs={12} className={classes.container}>
        <Typography
          variant="h1"
          color="secondary"
          className={classes.headerText}
        >
          React JS <br /> Green Bay
        </Typography>
      </Grid>
    </Grid>
  );
};

const Sponsors = ({ sponsors }) => {
  const classes = useStyles();
  return (
    <Grid container justify="center" spacing={2}>
      {sponsors.map(sponsor => (
        <Grid item key={sponsor.id}>
          <Avatar
            className={classes.sponsorImage}
            src={sponsor.src}
            alt={sponsor.alt}
          />
        </Grid>
      ))}
    </Grid>
  );
};

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: "#FFFFFF"
    }
  }
});

export default function App() {
  const classes = useStyles();
  return (
    <CssBaseline>
      <ThemeProvider theme={theme}>
        <div>
          <Header />
          <section className={classes.container}>
            <Typography
              variant="h4"
              className={classes.subHeader}
              align="center"
            >
              Come Learn With Us!
            </Typography>
            <hr className={classes.hr} />

            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
              sagittis purus at nisl feugiat aliquet. Fusce interdum mauris
              felis, at scelerisque ante efficitur at. Nam elit magna, aliquet
              in faucibus eget, laoreet sed lectus. Nam placerat, turpis eget
              dictum finibus, lectus felis tincidunt nisl, vel mattis libero ex
              eget erat. In eget tortor tellus. Donec gravida eget nibh non
              sollicitudin. Mauris purus turpis, lobortis id tincidunt non,
              iaculis sit amet enim. Maecenas fermentum, ligula id semper
              euismod, magna metus ultrices massa, in scelerisque odio mauris in
              risus. Nulla facilisis maximus mi convallis blandit. Sed diam
              turpis, dapibus suscipit massa eu, faucibus gravida nulla. In hac
              habitasse platea dictumst. Fusce quis est non massa facilisis
              condimentum. Etiam porta diam nec urna imperdiet tempus. Proin a
              arcu ullamcorper, iaculis massa ut, vulputate risus. Vivamus vitae
              placerat diam. Vestibulum semper molestie ex eget condimentum.
            </Typography>
          </section>
          <section className={classes.container}>
            <Typography
              variant="h4"
              className={classes.subHeader}
              align="center"
            >
              Sponsors
            </Typography>
            <hr className={classes.hr} />
            <Sponsors sponsors={sponsors} />
          </section>
        </div>
      </ThemeProvider>
    </CssBaseline>
  );
}
