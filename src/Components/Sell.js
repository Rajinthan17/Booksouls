import React, {Component} from "react";
import{Card,CardContent,Typography,FormControl,TextField,Grid,Paper} from "@material-ui/core";
import Button from '@material-ui/core/Button'
import Alert from '@material-ui/lab/Alert';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import image5 from "./image5.png"
import axios from 'axios';

const style={
    
  root:{
    minWidth:450,
    
    backgroundColor:"#8c8c8c",
    marginTop:40,
    color:'#212121',
    marginBottom : 40
    },
    card:{
      minWidth:500,
      backgroundcolor:'#212121',
      color:"#424242",
      margin:50
    }     
  }



export default class Sell extends Component{
  constructor (){
    super()
    this.state = {
      edit : false,
      name  : '',
      authorName : '',
	    description : '',
	    category : '',
      isbNumber : '',
      price: '',
      usage : '',
      sellerId : '',
      //selectedFile:[],
      image : []

    }
    // localStorage.setItem('user',true)
      // localStorage.removeItem('user')
  }

  BookNameChange = (e) => {
    this.setState ({
        name:e.target.value
    })
    //console.log(e.target.value)
  }

  PhotoChange =(e) => {
    var file = new FileReader()
    console.log(e.target.value)
  //   file = e.target.value
  //   console.log(file)
  //   this.setState ({
  //     files:e.target.value
  // })
  // file.onload = function(){
  //   alert(file.result)
  //   file.readAsBinaryString()
  // }
 
  }
  AuthorNameChange = (e) => {
    this.setState ({
      authorName:e.target.value
    })
    console.log(this.state.authorName)
  }

  DescriptionChange = (e) => {
    this.setState ({
      description:e.target.value
    })
  }

  CategoryChange = (e) => {
    this.setState ({
      category:e.target.value
    })
  }

  ISBNumberChange = (e) => {
    this.setState ({
      isbNumber:e.target.value
    })
  }

  PriceChange = (e) => {
    this.setState ({
      price:e.target.value
    })
  }

  UsageChange = (e) => {
    this.setState ({
      usage:e.target.value
    })
  }

  onFileChangeHandler = (e) => {
    e.preventDefault();
    var elements=[];
    console.log(e.target.files.length)
    let files = e.target.files
    console.log(files)
    for(let i = 0; i<e.target.files.length; i++){
    let reader = new FileReader()
    reader.readAsDataURL(files[i])
    reader.onload = (e) => {
      console.log(" Imagedata",e.target.result)
      elements.push(e.target.result)
      this.setState({
        image:elements
      })
    }
    // console.log(elements)
  }

      //console.log(e)
    // this.setState({
    //     selectedFile: e.target.files
    // });
    
    // fetch('http://localhost:8080/upload', {
    //     method: 'post',
    //     body: formData
    // }).then(res => {
    //     if(res.ok) {
    //         console.log(res.data);
    //         alert("File uploaded successfully.")
    //     }
    // });
};


  addBook = (e) => {
    e.preventDefault()
    const formData = new FormData();
    formData.append('file', this.state.selectedFile);
    console.log(formData)
    let book = {
      name : this.state.name,
      authorName : this.state.authorName,
      description : this.state.description,
      category : this.state.category,
      isbNumber : this.state.isbNumber,
      price : this.state.price,
      image:this.state.image,
      usage : this.state.usage,
      sellerId : this.state.sellerId
    }
    axios.post('http://localhost:8081/books',book)
    console.log(book)
  }

    render(){
      console.log(this.state.image)
        return(
          
          localStorage.getItem('user') ?(
          <Grid container>
              <Grid item xs={1}/>
              <Grid item xs={5} style = {{marginTop:60}}>
                  <img src= {image5}  alt = "Background Books"/>
              </Grid>
              <Grid item xs={1}/>
              <Grid item xs={4}>
              <Card style={style.root} >
                <Paper style={{margin:10}}>
          
              <CardContent>
                <form >
                  
                  <Grid container spacing={1}>
                      <Grid item xs={12}>
                        <Typography component="h1" variant="h2" >Add Your Book</Typography>
                      </Grid>


                      
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               size = "small"
                               required
                               value = {this.state.name}
                               onChange = {this.BookNameChange}
                               fullWidth
                               id="Book name"
                               label="Book Name"
                               name="book name"
                               autoComplete="book name"
                               autoFocus
                         />
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               size = "small"
                               value = {this.state.authorName}
                               onChange = {this.AuthorNameChange}
                               required
                               fullWidth
                               id="author name"
                               label="Author Name"
                               name="author name"
                               autoComplete="auther name"
                         />



                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField 
                              type = "text area"
                               variant="outlined"
                               size = "small"
                               margin="normal"
                               value = {this.state.description}
                               onChange = {this.DescriptionChange}
                               required
                               fullWidth
                               id="descripition"
                               label="Descripition"
                               name="descripition"
                               autoComplete="Descripition"
                         />
                         </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               size = "small"
                               value = {this.state.isbNumber}
                               onChange = {this.ISBNumberChange}
                               required
                               fullWidth
                               id="ISBN number"
                               label="ISBN Number"
                               name="ISBN Number"
                               autoComplete="ISBN number"
                         />
                        </FormControl>
                      </Grid>


                      


                      <Grid item xs={6}>
                        <FormControl fullWidth>
                        <InputLabel id="Condition">Condition</InputLabel>
                          <Select
                              //  variant="outlined"
                              //  margin="normal"
                               value = {this.state.usage}
                               onChange = {this.UsageChange}
                                required
                               fullWidth
                               id="Usage"
                               label="Usage"
                              //  name="Usage"
                              //  autoComplete="Usage"
                         >
                         <MenuItem value="">
                                    <em>All</em>
                                </MenuItem>
                                <MenuItem value={"New"}>Like New</MenuItem>
                                <MenuItem value={"good"}>Good</MenuItem>
                                <MenuItem value={"avg"}>Average</MenuItem>
                                <MenuItem value={"used"}>Used</MenuItem>
                                </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                        <InputLabel id="Category">Category</InputLabel>
                          <Select
                              //  variant="outlined"
                              //  margin="normal"
                               value = {this.state.category}
                               onChange = {this.CategoryChange}
                               fullWidth
                               id="Category"
                               label="Category"
                              //  name="Category"
                              //  autoComplete="Category"
                         >
                           <MenuItem value="">
                                    <em>All</em>
                                </MenuItem>
                                <MenuItem value={"story"}>Story</MenuItem>
                                <MenuItem value={"novel"}>Novel</MenuItem>
                                <MenuItem value={"scifi"}>Sci-Fi</MenuItem>
                                <MenuItem value={"drama"}>Drama</MenuItem>
                                </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               size = "small"
                               value = {this.state.price}
                               onChange = {this.PriceChange}
                               required
                               fullWidth
                               id="price"
                               label="Price"
                               name="Price"
                               autoComplete="Price"
                         />
                        </FormControl>
                      </Grid>
                      <Grid item xs={6}/>
                      {/* <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                               fullWidth
                               id="phone number"
                               label="Phone Number"
                               name="phone number"
                               autoComplete="phone number"
                         />
                        </FormControl>
                      </Grid>


                      <Grid item xs={6}>
                        <FormControl fullWidth>
                          <TextField
                               variant="outlined"
                               margin="normal"
                              //  fullWidth
                               id="address"
                               label="Address"
                               name="address"
                               autoComplete="address"
                         />
                        </FormControl>
                      </Grid> */}
                      <Grid item xs={6}>
                      {/* <label>Upload Your File </label> */}
                            <input type="file" className="form-control" name="file" multiple onChange={this.onFileChangeHandler}/>
                      </Grid>
                      <Grid item xs={6}/>
                        
                      
                      <Grid item xs={2}>
                        <FormControl>
                          <Button
                               type="submit"
                               size = "small"
                               fullWidth
                               variant="contained"
                               color="primary"
                               onClick = {this.addBook}
                           >
                             ADD
                          </Button>
                       </FormControl>
                       </Grid>
                       {/* <label htmlFor="contained-button-file">
          Please Upload
        </label> */}
        
                         &emsp;
                        <Grid item xs={2}>
                        <FormControl>
                          <Button
                               type="reset"
                               size = "small"
                               fullWidth
                               variant="contained"
                               color="primary"
                          >
                         RESET
                          </Button>
                        </FormControl>
                      </Grid>


        
      {/* <Avatar src="/broken-image.jpg" /> */}


                      {/* <label htmlFor="contained-button-file">
        <Button variant="contained" color="primary" component="span">
          Upload
        </Button>
      </label> */}

                      {/* <label htmlFor="icon-button-file">
        <IconButton color="primary" aria-label="upload picture" component="span">
          <PhotoCamera />
        </IconButton>
      </label> */}

                      

                      </Grid> 
                 
                  
                </form>
              </CardContent>
              </Paper>
        </Card>
        </Grid>
        <Grid item xs={4}/>
      </Grid>
          ):(
            <Grid container spacing = {1} >
              <Grid item xs={3}/>
              
              <Grid item xs={6} style={{marginTop:"12%"}}>
              <Card style = {{backgroundColor:"#8c8c8c"}} >
                <Paper style={{margin:10}}>
                  <div style = {{padding:20}}>
                  <Alert variant="outlined" severity="info">
                    You have to login for selling books — Login first!
                  </Alert>
                  </div>
                </Paper>
              </Card>
              </Grid>
              <Grid item xs={3}/>
              </Grid>
          )
      
        )
    }
}