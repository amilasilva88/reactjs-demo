import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/styles';
import { IconButton, Grid, Typography } from '@material-ui/core';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

import { PortfolioCard, PortfolioListToolbar, PortfolioListTable } from './components';

import mockData from './data';

const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3)
  },
  content: {
    marginTop: theme.spacing(2)
  },
  pagination: {
    marginTop: theme.spacing(3),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
  }
}));

const PortfolioList = () => {
  const classes = useStyles();

  const [cardView, setCardView] = useState(true);
  const [tabName, setTabName] = useState("Table view");

  // Similar to componentDidMount and componentDidUpdate:
  // useEffect(() => {
  //   // Update the document title using the browser API
  //   document.title = `You clicked ${cardView} times`;
  //   //setCardView(!cardView);
  // });

  function handleViewToggleOnClick() {
    setCardView(!cardView);
    setTabName((cardView) ? "Table view" : "Card view");
  }

  const [portfolio] = useState(mockData);

  if (cardView) {
    return <div className={classes.root}>
      <PortfolioListToolbar toggleClickAction={handleViewToggleOnClick} toggleButtonName={tabName} />
      <div className={classes.content}>
        {cardView} - {tabName}

        TABLE EHRE
      </div>
      <div className={classes.pagination}>
        <Typography variant="caption">1-6 of 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>;
  } else {
    return <div className={classes.root}>
      <PortfolioListToolbar toggleClickAction={handleViewToggleOnClick} toggleButtonName={tabName} />
      <div className={classes.content}>
        <Grid
          container
          spacing={3}
        >
          {portfolio.map(product => (
            <Grid
              item
              key={product.id}
              lg={4}
              md={6}
              xs={12}
            >
              <PortfolioCard product={product} />
            </Grid>
          ))
          }
        </Grid>
      </div>
      <div className={classes.pagination}>
        <Typography variant="caption">1-6 of 20</Typography>
        <IconButton>
          <ChevronLeftIcon />
        </IconButton>
        <IconButton>
          <ChevronRightIcon />
        </IconButton>
      </div>
    </div>;
  }
};

export default PortfolioList;