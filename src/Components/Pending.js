import React from 'react';
import { makeStyles, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid,TextField,InputAdornment} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  grid: {
      margin: 40,
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





function createData(id, bookname, BuyerName, BuyerAddress, BuyerPhoneNo) {
  return {id, bookname, BuyerName, BuyerAddress, BuyerPhoneNo};
}

const rows = [
  createData('id1', 'bookname', 'Buyer Name', 'Address', 'Phno'),
  createData('id2', 'bookname',  'Buyer Name', 'Address', 'Phno'),
  createData('id2', 'bookname',  'Buyer Name', 'Address', 'Phno'),

];

export default function Pending() {
  const classes = useStyles();
  
  
  return (
      <div>
    <Grid className={classes.grid} style = {{backgroundColor:"#8c8c8c"}}>
      <Paper className = {classes.paper}>
        <h1>Pending Deliver Details</h1>
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
            <TableCell align="left"><b>Buyer Name</b></TableCell>
            <TableCell align="left"><b>Buyer Address</b></TableCell>
            <TableCell align="left"><b>Buyer Phone No</b></TableCell>
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

              <IconButton>
                <EditIcon
                color="default"
                align="left"
                inputProps={{ 'aria-label': 'DeleteIcon with default color' }}
              />
              </IconButton>

              </TableCell>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.bookname}</TableCell>
              <TableCell align="left">{row.BuyerName}</TableCell>
              <TableCell align="left">{row.BuyerAddress}</TableCell>
              <TableCell align="left">{row.BuyerPhoneNo}</TableCell>
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