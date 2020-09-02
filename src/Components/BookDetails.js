import React from 'react';
import { makeStyles, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid,TextField,InputAdornment} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddBoxIcon from '@material-ui/icons/AddBox';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  grid: {
      margin: '35px 150px 20px 50px',
      padding: '10px 10px 10px 10px',
      backgroundColor: "black"
  },
  paper: {
    padding: '10px 10px 10px 10px', 
    margin: '10px 10px 10px 10px',
    position: 'inherit'
  },
  search: {
    position: 'relative',
    align:'left',
    },
});





function createData(id, bookname, price, usage, aughter,isbnNumber) {
  return {id, bookname, price,usage, aughter, isbnNumber };
}

const rows = [
  createData('id1', 'bookname', '1000', 'years', 'aughtername','1032'),
  createData('id2', 'bookname',  '750', 'years', 'aughtername','1054'),
  createData('id2', 'bookname',  '750', 'years', 'aughtername','1054'),
  createData('id2', 'bookname',  '750', 'years', 'aughtername','1054'),
  createData('id2', 'bookname',  '750', 'years', 'aughtername','1054'),
  createData('id2', 'bookname',  '750', 'years', 'aughtername','1054'),
  createData('id2', 'bookname',  '750', 'years', 'aughtername','1054'),
  createData('id2', 'bookname',  '750', 'years', 'aughtername','1054'),
  createData('id2', 'bookname',  '750', 'years', 'aughtername','1054'),
  createData('id2', 'bookname',  '750', 'years', 'aughtername','1054'),
  createData('id2', 'bookname',  '750', 'years', 'aughtername','1054'),
  createData('id2', 'bookname',  '750', 'years', 'aughtername','1054'),
  createData('id2', 'bookname',  '750', 'years', 'aughtername','1054'),
  createData('id2', 'bookname',  '750', 'years', 'aughtername','1054'),
  createData('id2', 'bookname',  '750', 'years', 'aughtername','1054'),
  createData('id2', 'bookname',  '750', 'years', 'aughtername','1054'),
];

export default function BookDetails() {
  const classes = useStyles();
  
  
  return (
      <div>
    <Grid className={classes.grid}>
      <Paper className = {classes.paper}>
        <h1>Book Details</h1>
        <div className={classes.search}>
            <div className={classes.searchIcon} style = {{float: 'right'}}>
              {/* <SearchIcon /> */}

              <TextField
        // className={classes.margin}
        id="input-with-icon-textfield"
        label="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon/>
            
            </InputAdornment>
          ),
        }}
      />
            </div>
        </div>
        {/* <div>
           <AddBoxIcon/>
        </div> */}
        <TableContainer>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell align="left"><b>Action</b></TableCell>
            <TableCell align="left"><b>ID</b></TableCell>
            <TableCell align="left"><b>Book Name</b></TableCell>
            <TableCell align="left"><b>Price</b></TableCell>
            <TableCell align="left"><b>Usage</b></TableCell>
            <TableCell align="left"><b>Aughter</b></TableCell>
            <TableCell align="left"><b>ISBNumber</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow>
              
              <TableCell>
              <Checkbox
                color="default"
                align="left"
                inputProps={{ 'aria-label': 'checkbox with default color' }}
              />
              <IconButton>
              <DeleteIcon
                color="default"
                align="left"
                inputProps={{ 'aria-label': 'DeleteIcon with default color' }}
              />
              </IconButton>

              <IconButton href="/AddBook" >
                <EditIcon
                color="default"
                align="left"
                inputProps={{ 'aria-label': 'DeleteIcon with default color' }}
              />
              </IconButton>

              </TableCell>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.bookname}</TableCell>
              <TableCell align="left">{row.price}</TableCell>
              <TableCell align="left">{row.usage}</TableCell>
              <TableCell align="left">{row.aughter}</TableCell>
              <TableCell align="left">{row.isbnNumber}</TableCell>
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