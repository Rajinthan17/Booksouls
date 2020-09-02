import React from 'react';
import { makeStyles , Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid} from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  grid: {
      margin: '35px 150px 20px 50px'
  }
});

function createData(id, name, email, address, district) {
  return {id, name, email, address, district };
}

const rows = [
  createData('id1', 'User1', 'User1@gmail.com', 'no1, main street,Jaffna', 'Jaffna'),
  createData('id2', 'User2',  'User2@gmail.com', 'no10, old park street,Kandy', 'Kandy'),
];

export default function UserDetails() {
  const classes = useStyles();

  return (
      <div>
    <Grid className={classes.grid}>
        <Paper>
          <h1>User Details</h1>
          
    <TableContainer>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell align="left"><b>ID</b></TableCell>
            <TableCell align="left"><b>User Name</b></TableCell>
            <TableCell align="left"><b>Email ID</b></TableCell>
            <TableCell align="left"><b>Address</b></TableCell>
            <TableCell align="left"><b>District</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.name}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.address}</TableCell>
              <TableCell align="left">{row.district}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </Paper>
    </Grid>
    </div>
  );
}
