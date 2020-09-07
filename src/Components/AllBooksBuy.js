import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Paper from '@material-ui/core/Paper';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Slider from '@material-ui/core/Slider';
import MenuItem from '@material-ui/core/MenuItem';
import SearchIcon from '@material-ui/icons/Search';
import TextField from '@material-ui/core/TextField';
import FilterListIcon from '@material-ui/icons/FilterList';
import Tooltip from '@material-ui/core/Tooltip';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import FolderIcon from '@material-ui/icons/Folder';



const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      maxWidth: 752,
    },
    demo: {
        backgroundImage: `url("https://cdn.wallpapersafari.com/39/25/wIFT2D.jpg")`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
    },
    title: {
      margin: theme.spacing(4, 0, 2),
    },
  }));
  function generate(element) {
    return [0,1,2,3,4,5,6,7,8,9,10,11,12,13].map((value) =>
      React.cloneElement(element, {
        key: value,
      }),
    );
  }


function AllBookBuy() {
    const classes = useStyles();
    const [isFilter, setIsFilter] = React.useState(false);
    const [value, setValue] = React.useState([200, 300]);
    const [category, setCategory] = React.useState('None');
    const [condition, setcondition] = React.useState('None');

    const handleClick = () => {
        !isFilter? (setIsFilter("true")):(setIsFilter(false))
        
    }
    const handleChange = (event, newValue) => {
        setValue(newValue);
      };
    const handleCatChange = (event) => {
        setCategory(event.target.value);
      };
    const handleConChange = (event) => {
        setcondition(event.target.value);
      };
    return(
        <div className={classes.demo}>
            <Grid container spacing={1} >
            <Grid item xs = {1}/>
            {isFilter ? (
                <Grid item xs = {2} >
                    <Card style ={{marginTop:40}}>
                        <Paper style ={{padding:20}} class = "AllBookSellBG">
                        <h2>Filter</h2>
                            <Typography id="Price" gutterBottom>
                                Price range
                            </Typography>
                            <Slider
                                
                                max = {10000}
                                min = {100 }
                                value={value}
                                onChange={handleChange}
                                valueLabelDisplay="auto"
                                aria-labelledby="range-slider"
                                // getAriaValueText={valuetext}
                            />
                            <br/><br/>
                            <FormControl variant="filled" style = {{width:"80%"}}>
                                <InputLabel id="Category">Category</InputLabel>
                                <Select
                                labelId="Category"
                                id="Category"
                                value={category}
                                onChange={handleCatChange}
                                >
                                <MenuItem value="">
                                    <em>All</em>
                                </MenuItem>
                                <MenuItem value={10}>Story</MenuItem>
                                <MenuItem value={20}>Novel</MenuItem>
                                <MenuItem value={30}>Sci-Fi</MenuItem>
                                <MenuItem value={40}>Drama</MenuItem>
                                </Select>
                            </FormControl>
                            <br/><br/>
                            <FormControl variant="filled" style = {{width:"80%"}}>
                                <InputLabel id="Condition">Condition</InputLabel>
                                <Select
                                labelId="Condition"
                                id="Condition"
                                value={condition}
                                onChange={handleConChange}
                                >
                                <MenuItem value="">
                                    <em>All</em>
                                </MenuItem>
                                <MenuItem value={10}>Like New</MenuItem>
                                <MenuItem value={20}>Good</MenuItem>
                                <MenuItem value={30}>Average</MenuItem>
                                <MenuItem value={40}>Used</MenuItem>
                                </Select>
                            </FormControl>
                            <br/><br/><br/>
                            <Button variant="outlined" type = "submit">Find</Button>
                        </Paper>
                    </Card>
                </Grid>
            ):(
                <Grid item xs = {2}/>
            )
            }
                <Grid item xs = {8} style ={{padding:40}}>
                    <Card style ={{padding:10}} class = "AllBookSellBG" >
                        <Paper style = {{margin:5}}> 
                            <div align = "left" style = {{padding:10}}>
                            <TextField
                            id="input-with-icon-textfield"
                            label="Search for Books"
                            InputProps={{
                                startAdornment: (
                                <InputAdornment position="start">
                                    <IconButton type="submit" aria-label="search">
                                        <SearchIcon />
                                    </IconButton>
                                </InputAdornment>
                                ),
                            }}
                            />
                            <Tooltip title="Filter">
                                <IconButton onClick = {handleClick} >
                                    <FilterListIcon/>
                                </IconButton>
                            </Tooltip>
                            </div>
                            <div>
                                <h2>Books for Sale</h2>
                            </div>
                            <List >
                            {generate(
                              
                                    <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                        <FolderIcon />
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary="Title"
                                        secondary="Descripition"
                                    />
                                    <ListItemSecondaryAction>
                                        <Button href = "/buyBook">Info</Button>
                                    </ListItemSecondaryAction>
                                    </ListItem>,
                            
                            )}
                            </List>
                        </Paper>
                    </Card>
                </Grid>
                <Grid item xs = {1}/>
                </Grid>
          </div>
    )
}
export default AllBookBuy