import React from 'react';
import { makeStyles, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead,InputAdornment, TableRow, Paper, Grid,TextField} from '@material-ui/core';
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





function createData(id, username, email, adderss, district) {
  return {id, username, email,adderss, district };
}

const rows = [
  createData('id1', 'uaername', '@mail', 'jaffna', 'jaffna'),
  createData('id2', 'username',  '@mail', 'jaffna', 'jaffna'),
  createData('id2', 'username',  '@mail', 'jaffna', 'jaffna'),
  createData('id2', 'username',  '@mail', 'jaffna', 'jaffna'),
  createData('id2', 'username',  '@mail', 'jaffna', 'jaffna'),
  createData('id2', 'username',  '@mail', 'jaffna', 'jaffna'),
  createData('id2', 'username',  '@mail', 'jaffna', 'jaffna'),
  createData('id2', 'username',  '@mail', 'jaffna', 'jaffna'),
  createData('id2', 'username',  '@mail', 'jaffna', 'jaffna'),
  createData('id2', 'username',  '@mail', 'jaffna', 'jaffna'),
  createData('id2', 'username',  '@mail', 'jaffna', 'jaffna'),
  createData('id2', 'username',  '@mail', 'jaffna', 'jaffna'),
  createData('id2', 'username',  '@mail', 'jaffna', 'jaffna'),
  createData('id2', 'username',  '@mail', 'jaffna', 'jaffna'),
  createData('id2', 'username',  '@mail', 'jaffna', 'jaffna'),
  createData('id2', 'username',  '@mail', 'jaffna', 'jaffna'),
];

export default function BookDetails() {
  const classes = useStyles();
  
  
  return (
      <div>
    <Grid className={classes.grid} style = {{backgroundColor:"#8c8c8c"}}>
      <Paper className = {classes.paper}>
        <h1>User Details</h1>
        <div className={classes.search}>
            <div className={classes.searchIcon} style = {{float: 'right'}}>
            
            
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
        
        <TableContainer>
      <Table className={classes.table} size="small">
        <TableHead>
          <TableRow>
            <TableCell align="left"><b>Action</b></TableCell>
            <TableCell align="left"><b>ID</b></TableCell>
            <TableCell align="left"><b>User Name</b></TableCell>
            <TableCell align="left"><b>Email</b></TableCell>
            <TableCell align="left"><b>Address</b></TableCell>
            <TableCell align="left"><b>District</b></TableCell>
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

              <IconButton href="/AddUser" >
                <EditIcon
                color="default"
                align="left"
                inputProps={{ 'aria-label': 'DeleteIcon with default color' }}
              />
              </IconButton>

              </TableCell>
              <TableCell align="left">{row.id}</TableCell>
              <TableCell align="left">{row.username}</TableCell>
              <TableCell align="left">{row.email}</TableCell>
              <TableCell align="left">{row.adderss}</TableCell>
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