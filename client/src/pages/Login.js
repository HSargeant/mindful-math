import {Link, useOutletContext,useNavigate} from "react-router-dom"
import { API_BASE } from "../constants"
import image from "../Login-Register-Images"
import {useState,useEffect} from "react"
import { Box, Button, Container, Grid, TextField, Typography,Link as MLink,InputAdornment,IconButton } from '@mui/material';
import GoogleIcon from '@mui/icons-material/Google';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Login(){
  const {user,setUser,messages, setMessages} = useOutletContext()
  const [errorMsg, setErrorMsg] = useState("");
  const navigate=useNavigate()
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleSubmit = async (event) => {
    event.preventDefault();
    try{
      const form = event.currentTarget;
      const response = await fetch(API_BASE + form.getAttribute('action'), {
        method: form.method,
        body: new URLSearchParams(new FormData(form)),
        credentials: "include"
      });
      const data = await response.json();
      console.log(data)
      if (data.errors) {
        // console.log(data.messages.errors[0].msg)
        setErrorMsg(data.errors[0].msg);
      }
      if (data.user) {
        setUser(data.user);
        navigate("/dashboard");
      }
    }catch(err){
      console.error(err)
    }
  };
  const cancelError=()=>{
    setErrorMsg("")
  }
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="flex justify-center min-h-screen">
        <div className="hidden bg-cover lg:block lg:w-2/5 heroBack" style={{backgroundImage: `url(${image})`}}/>
        <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <form action="/login" method="POST" onSubmit={handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
              <div className="Welcome">
                Welcome<br/>
              </div>
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
              </Typography>
            </Box>
            {/* <Grid
              container
              spacing={3}
            > */}
   
              <Grid
                item
                xs={12}
                md={6}
              >
                <a href={API_BASE+"/auth/google"} style={{width:'100%'}}>
                <Button
                  style={{backgroundColor:"#DB4437"}}
                  fullWidth
                  size="large"
                  startIcon={<GoogleIcon />}
                  variant="contained"
                >
                  Sign in with Google
                </Button>
                </a>
              </Grid>
            {/* </Grid> */}
            <Box
              sx={{
                pb: 1,
                pt: 3
              }}
            >
              <Typography
                align="center"
                color="textSecondary"
                variant="body1"
              >
                or login with email address
              </Typography>
            </Box>
            <TextField
              fullWidth
              label="Email Address"
              margin="normal"
              name="email"

              type="email"
              variant="outlined"
              className="form-label"
              onChange={cancelError}
            />
            <TextField
              fullWidth
              label="Password"
              margin="normal"
              name="password"
              type={showPassword ? 'text' : 'password'}
              variant="outlined"
              onChange={cancelError}
              InputProps={{
                endAdornment: <InputAdornment position="end">
                  <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                </IconButton>

                </InputAdornment>,
              }}
            />
             {errorMsg ? <div style={{fontWeight:"bold",color:"red"}}> {errorMsg}</div>:""}
            <Box sx={{ py: 2 }}>
              <Button 
              style={{ backgroundColor:"#2563eb"}}
                
                fullWidth
                size="large"
                type="submit"
                variant="contained"
              >
                Sign In
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Don&apos;t have an account?
              {' '}
              <MLink
                to="/signup"
                  variant="subtitle2"
                  underline="hover"
                  component={Link}
                >
                  Sign Up
                </MLink>
              
            </Typography>
          </form>
        </Container>
      </Box>
          
        
      </div>
    </section>
        
  )
}