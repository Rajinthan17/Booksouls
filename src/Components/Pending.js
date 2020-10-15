import React, { useEffect } from "react";
import { useTheme } from '@material-ui/core/styles';
import { makeStyles, Checkbox, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Grid,TextField,InputAdornment} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import ClearIcon from '@material-ui/icons/Clear';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import { IconButton } from '@material-ui/core';
import TableFooter from '@material-ui/core/TableFooter';
import TablePagination from '@material-ui/core/TablePagination';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import axios from 'axios';


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

const useStyles1 = makeStyles((theme) => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5),
  },
}));

function TablePaginationActions(props) {
  const classes = useStyles1();
  const theme = useTheme();
  const { count, page, rowsPerPage, onChangePage } = props;

  const handleFirstPageButtonClick = (event) => {
    onChangePage(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onChangePage(event, page - 1);
    console.log("Page" + page)
  };

  const handleNextButtonClick = (event) => {
    onChangePage(event, page + 1);
    console.log("Page" + page)
  };

  const handleLastPageButtonClick = (event) => {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}



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
  const [pendings, setPendings] = React.useState([]);
  const [searchString, setSearchString]= React.useState('');
  const [page, setPage] = React.useState(0);
  const [count, setCount] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  
  const searchChange = (e) => {
    console.log(e.target.value)
    setSearchString(e.target.value)
  }

  const deletePending = (deleteId) => {
    axios.delete('http://localhost:8081/pending/' + deleteId)
    window.location.reload()
  }


  const serachData = () => {
    setPage (0)
    if(searchString == ''){
      axios.get("http://localhost:8081/pending/page")
      .then((Response) => {
        setCount (Response.data.Total_No_Of_Elements)
        console.log(count)
        setPendings ( Response.data.data)
      console.log(pendings)
    })
    }else{
      axios.get("http://localhost:8081/pending/page/serachedPages?serched="+searchString)
      .then((Response) => {
        setCount (Response.data.Total_No_Of_Elements)
        console.log(count)
        setPendings( Response.data.data)
      console.log(pendings)
    })
  }
}


    useEffect(() => {
      // setBooks(["Hello"])
      // console.log("books");
      axios.get("http://localhost:8081/pending/page?pageNo="+page)
        .then((Response) => {
        console.log(Response.data.Total_No_Of_Elements)
        setCount (Response.data.Total_No_Of_Elements)
        console.log(count)
        setPendings ( Response.data.data)
        console.log(page)
        console.log(pendings)
        console.log(Response)
        
      })
      
    },[]);

    const clearText = (e) => {
      setPage (0)
      setSearchString ('')
      axios.get("http://localhost:8081/pending/page?pageNo="+page)
        .then((Response) => {
        console.log(Response.data.Total_No_Of_Elements)
        setCount (Response.data.Total_No_Of_Elements)
        console.log(count)
        setPendings ( Response.data.data)
        console.log(page)
        console.log(pendings)
        //console.log(Response.data.data)
      })
  }


    const handleChangePage = (event, newPage) => {
      setPage(newPage);
      if(searchString == ''){
      axios.get("http://localhost:8081/pending/page?pageNo="+newPage)
      .then((Response) => {
        //console.log(Response.data.Total_No_Of_Elements)
        // setCount (Response.data.Total_No_Of_Elements)
        // console.log(count)
        setPendings ( Response.data.data)
        console.log(page)
        console.log(pendings)
        //console.log(Response.data.data)
        
      })
    }else{
      axios.get("http://localhost:8081/pending/page/serachedPages?serched="+searchString + "&pageNo="+ newPage)
      .then((Response) => {
        // console.log(Response.data.Total_No_Of_Elements)
        // setCount (Response.data.Total_No_Of_Elements)
        // console.log(count)
        setPendings ( Response.data.data)
        console.log(page)
        console.log(pendings)
        //console.log(Response.data.data)
        
      })
    }
      
      
      
    };
  
    const handleChangeRowsPerPage = (event) => {
      setRowsPerPage(parseInt(event.target.value, 10));
      setPage(0);
    };
   
  
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
        onChange = {searchChange}
        label="Search"
        value = {searchString}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IconButton onClick = {() => serachData()} >
                <SearchIcon/>
              </IconButton>
            </InputAdornment>
          ),
          endAdornment : (
            <InputAdornment position="end">
              <IconButton onClick = {() => clearText()}>
                <ClearIcon/>
              </IconButton>
            </InputAdornment>
          )
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
            <TableCell align="left"><b> Book Name</b></TableCell>
            <TableCell align="left"><b>Author Name</b></TableCell>
            <TableCell align="left"><b>Description</b></TableCell>
            <TableCell align="left"><b>Price</b></TableCell>
            <TableCell align="left"><b>Seller Name</b></TableCell>
            <TableCell align="left"><b>Seller Address</b></TableCell>
            <TableCell align="left"><b>Seller Phone No</b></TableCell>
            <TableCell align="left"><b>Buyer Name</b></TableCell>
            <TableCell align="left"><b>Buyer Address</b></TableCell>
            <TableCell align="left"><b>Buyer Phone No</b></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {pendings.map((row) => (
            <TableRow>
              <TableCell>
              <IconButton
                onClick={() => {if(window.confirm('Delete the item?')){deletePending(row.id)}}}
               //onClick = {() => deletePending(row.id)}
              >
              <DeleteIcon
                color="default"
                align="left"
                inputProps={{ 'aria-label': 'DeleteIcon with default color' }}
              />
              </IconButton>
              </TableCell>
              <TableCell align="left">{row.book.name}</TableCell>
              <TableCell align="left">{row.book.authorName}</TableCell>
              <TableCell align="left">{row.book.description}</TableCell>
              <TableCell align="left">{row.book.price}</TableCell>
              <TableCell align="left">{}</TableCell>
              <TableCell align="left">{}</TableCell>
              <TableCell align="left">{}</TableCell>
              <TableCell align="left">{row.buyerName}</TableCell>
              <TableCell align="left">{row.buyerAddress}</TableCell>
              <TableCell align="left">{row.buyerPhoneNum}</TableCell>
            </TableRow>
          ))}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={5}
              // colSpan={3}
              count={count}
              rowsPerPage={rowsPerPage}
              page={page}
              
              // SelectProps={{
              //   inputProps: { 'aria-label': 'rows per page' },
              //   native: true,
              // }}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
            
          </TableRow>
        </TableFooter>
      </Table>  
    </TableContainer>
      </Paper>
    </Grid>
    </div>
  );
}