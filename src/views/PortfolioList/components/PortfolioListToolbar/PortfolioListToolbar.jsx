import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import { Button } from '@material-ui/core';

import { SearchInput } from 'components';

const useStyles = makeStyles(theme => ({
  root: {},
  row: {
    height: '42px',
    display: 'flex',
    alignItems: 'center',
    marginTop: theme.spacing(1)
  },
  spacer: {
    flexGrow: 1
  },
  cardViewButton: {
    marginRight: theme.spacing(1)
  },
  tableViewButton: {
    marginRight: theme.spacing(1)
  },
  exportButton: {
    marginRight: theme.spacing(1)
  },
  searchInput: {
    marginRight: theme.spacing(1)
  }
}));

const PortfolioListToolbar = props => {
  const { className, ...rest } = props;

  const classes = useStyles();

  return (
    <div
      className={clsx(classes.root, className)}
    >
      <div className={classes.row}>
        <span className={classes.spacer} />
        <Button className={classes.cardViewButton} onClick={props.toggleClickAction}>{props.toggleButtonName}</Button>
        {/* <Button className={classes.exportButton}>Export</Button> */}
        <Button
          color="primary"
          variant="contained"
        >
          Add Portfolio
        </Button>
      </div>
      <div className={classes.row}>
        <SearchInput
          className={classes.searchInput}
          placeholder="Search product"
        />
      </div>
    </div>
  );
};

PortfolioListToolbar.propTypes = {
  className: PropTypes.string
};

export default PortfolioListToolbar;