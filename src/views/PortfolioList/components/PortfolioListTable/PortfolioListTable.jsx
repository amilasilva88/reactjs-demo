import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import moment from 'moment';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { makeStyles } from '@material-ui/styles';
import {
  Card,
  CardActions,
  CardContent,
  Avatar,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Typography,
  TablePagination
} from '@material-ui/core';

import { getInitials } from 'helpers';

const useStyles = makeStyles(theme => ({
  root: {},
  content: {
    padding: 0
  },
  inner: {
    minWidth: 1050
  },
  nameContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  avatar: {
    marginRight: theme.spacing(2)
  },
  actions: {
    justifyContent: 'flex-end'
  }
}));

const PortfolioListTable = props => {
  // const { className, porfolios, ...rest } = props;
  // const classes = useStyles();

  // const [selectedPortfolios, setSelectedPortfolios] = useState([]);
  // const [rowsPerPage, setRowsPerPage] = useState(10);
  // const [page, setPage] = useState(0);

  // const handleSelectAll = event => {
  //   const { porfolios } = props;

  //   let selectedPortfolios;

  //   if (event.target.checked) {
  //     selectedPortfolios = porfolios.map(porfolio => porfolio.id);
  //   } else {
  //     selectedPortfolios = [];
  //   }

  //   setSelectedPortfolios(selectedPortfolios);
  // };

  // const handleSelectOne = (event, id) => {
  //   const selectedIndex = selectedPortfolios.indexOf(id);
  //   let newSelectedPortfolios = [];

  //   if (selectedIndex === -1) {
  //     newSelectedPortfolios = newSelectedPortfolios.concat(selectedPortfolios, id);
  //   } else if (selectedIndex === 0) {
  //     newSelectedPortfolios = newSelectedPortfolios.concat(selectedPortfolios.slice(1));
  //   } else if (selectedIndex === selectedPortfolios.length - 1) {
  //     newSelectedPortfolios = newSelectedPortfolios.concat(selectedPortfolios.slice(0, -1));
  //   } else if (selectedIndex > 0) {
  //     newSelectedPortfolios = newSelectedPortfolios.concat(
  //       selectedPortfolios.slice(0, selectedIndex),
  //       selectedPortfolios.slice(selectedIndex + 1)
  //     );
  //   }

  //   setSelectedPortfolios(newSelectedPortfolios);
  // };

  // const handlePageChange = (event, page) => {
  //   setPage(page);
  // };

  // const handleRowsPerPageChange = event => {
  //   setRowsPerPage(event.target.value);
  // };

  // return (
  //   <Card
  //     {...rest}
  //     className={clsx(classes.root, className)}
  //   >
  //     <CardContent className={classes.content}>
  //       <PerfectScrollbar>
  //         <div className={classes.inner}>
  //           <Table>
  //             <TableHead>
  //               <TableRow>
  //                 <TableCell padding="checkbox">
  //                   <Checkbox
  //                     checked={selectedPortfolios.length === porfolios.length}
  //                     color="primary"
  //                     indeterminate={
  //                       selectedPortfolios.length > 0 &&
  //                       selectedPortfolios.length < porfolio.length
  //                     }
  //                     onChange={handleSelectAll}
  //                   />
  //                 </TableCell>
  //                 <TableCell>Name</TableCell>
  //                 <TableCell>Email</TableCell>
  //                 <TableCell>Location</TableCell>
  //                 <TableCell>Phone</TableCell>
  //                 <TableCell>Registration date</TableCell>
  //               </TableRow>
  //             </TableHead>
  //             <TableBody>
  //               {porfolio.slice(0, rowsPerPage).map(porfolio => (
  //                 <TableRow
  //                   className={classes.tableRow}
  //                   hover
  //                   key={porfolio.id}
  //                   selected={selectedPortfolios.indexOf(porfolio.id) !== -1}
  //                 >
  //                   <TableCell padding="checkbox">
  //                     <Checkbox
  //                       checked={selectedPortfolios.indexOf(porfolio.id) !== -1}
  //                       color="primary"
  //                       onChange={event => handleSelectOne(event, porfolio.id)}
  //                       value="true"
  //                     />
  //                   </TableCell>
  //                   <TableCell>
  //                     <div className={classes.nameContainer}>
  //                       <Avatar
  //                         className={classes.avatar}
  //                         src={porfolio.avatarUrl}
  //                       >
  //                         {getInitials(porfolio.name)}
  //                       </Avatar>
  //                       <Typography variant="body1">{porfolio.name}</Typography>
  //                     </div>
  //                   </TableCell>
  //                   <TableCell>{porfolio.email}</TableCell>
  //                   <TableCell>
  //                     {porfolio.address.city}, {porfolio.address.state},{' '}
  //                     {porfolio.address.country}
  //                   </TableCell>
  //                   <TableCell>{porfolio.phone}</TableCell>
  //                   <TableCell>
  //                     {moment(porfolio.createdAt).format('DD/MM/YYYY')}
  //                   </TableCell>
  //                 </TableRow>
  //               ))}
  //             </TableBody>
  //           </Table>
  //         </div>
  //       </PerfectScrollbar>
  //     </CardContent>
  //     <CardActions className={classes.actions}>
  //       <TablePagination
  //         component="div"
  //         count={porfolios.length}
  //         onChangePage={handlePageChange}
  //         onChangeRowsPerPage={handleRowsPerPageChange}
  //         page={page}
  //         rowsPerPage={rowsPerPage}
  //         rowsPerPageOptions={[5, 10, 25]}
  //       />
  //     </CardActions>
  //   </Card>
  // );

  return "";
};

PortfolioListTable.propTypes = {
  className: PropTypes.string,
  porfolios: PropTypes.array.isRequired
};

export default PortfolioListTable;