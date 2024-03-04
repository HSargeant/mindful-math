import { Link, useNavigate } from "react-router-dom"
import { API_BASE } from "../constants"
import image from "../Login-Register-Images"
import { useState, useEffect } from "react"
import {
  Box,
  Button,
  Link as MLink,
  Container,
  TextField,
  Typography,
  InputAdornment,
  IconButton
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

export default function Signup() {
  // const { setUser, user } = useOutletContext();
  const navigate = useNavigate();
  const user = JSON.parse(window.localStorage.getItem("user"))
  useEffect(() => {
    if (user) {
      navigate("/dashboard")
      return
    }
  })
  const [errorMsg, setErrorMsg] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const response = await fetch(API_BASE + form.getAttribute("action"), {
      method: form.method,
      body: new URLSearchParams(new FormData(form)),
      credentials: "include",
    });
    const data = await response.json();
    console.log(data)
    if (data?.messages?.errors?.length) {
      setErrorMsg(data.messages.errors[0]?.msg);
    }
    if (data.user?.email) {
      // setUser(data.user);
      window.localStorage.setItem("user", JSON.stringify(data.user))
      navigate("/dashboard");
    }
  };
  const cancelError = () => {
    setErrorMsg("")
  }

  return (
    <>
      <div className=" relative float-right z-50 top-10 right-5 w-15 h-15 rounded-full flex justify-center items-center text-4xl ">
        <Link to="/" >
          <i className="fa-sharp fa-solid fa-house fa-lg"></i>
        </Link>

      </div>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex justify-center min-h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/5 heroBack" style={{ backgroundImage: `url(${image})` }} />
          <Box
            component="main"
            sx={{
              alignItems: 'center',
              display: 'flex',
              flexGrow: 1,
              minHeight: '100%',
              marginTop: "25px"
            }}
          >
            <Container maxWidth="sm">

              <a href={API_BASE + "/auth/google"} style={{ width: '100%' }}>
                <Button
                  style={{ backgroundColor: "#DB4437" }}
                  fullWidth
                  size="large"
                  startIcon={<GoogleIcon />}
                  variant="contained"
                >
                  Continue with Google
                </Button>
              </a>
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
                  or create an account
                </Typography>
              </Box>
              <form action="/signup" method="POST" onSubmit={handleSubmit}>
                <Box sx={{ my: 1 }}>
                  <Typography
                    color="textPrimary"
                    gutterBottom
                    variant="h5"
                  >
                    <div className="registerHeader">
                      Create a new account
                    </div>
                  </Typography>
                </Box>
                <TextField
                  required={true}
                  fullWidth
                  label="Username"
                  id="username"
                  margin="normal"
                  name="username"
                  variant="outlined"
                  type="text"
                />
                <TextField
                  required={true}
                  fullWidth
                  label="Email Address"
                  margin="normal"
                  name="email"
                  type="email"
                  id="exampleInputEmail1"
                  variant="outlined"
                  aria-describedby="emailHelp"
                  onChange={cancelError}
                />
                <Typography
                  color="textSecondary"
                  gutterBottom
                  variant="body2"
                >
                  We'll never share your email address.
                </Typography>
                <TextField
                  required={true}
                  fullWidth
                  label="Password"
                  margin="normal"
                  name="password"
                  id="password"
                  variant="outlined"
                  onChange={cancelError}
                  helperText="At least 8 characters"


                  type={showPassword ? 'text' : 'password'}
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
                <TextField
                  required={true}
                  fullWidth
                  label="Confirm Password"
                  margin="normal"
                  id="confirmPassword"
                  name="confirmPassword"
                  variant="outlined"
                  onChange={cancelError}

                  type={showPassword ? 'text' : 'password'}
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
                <Box
                  sx={{
                    alignItems: 'center',
                    display: 'flex',
                    ml: -1
                  }}
                >


                </Box>
                {errorMsg ? <div style={{ fontWeight: "bold", color: "red" }}> {errorMsg}</div> : ""}
                <TextField
                  required={true}
                  fullWidth
                  label="Select Grade Level/Subject"
                  margin="normal"
                  name="gradeLevel"
                  type="select"
                  variant="outlined"
                  select
                  SelectProps={{ native: true }}
                >
                  <option value="" disabled>Choose your grade</option>
                  <option value="Kindergarten">Kindergarten</option>
                  <option value="1st Grade">1st Grade</option>
                  <option value="2nd Grade">2nd Grade</option>
                  <option value="3rd Grade">3rd Grade</option>
                  <option value="4th Grade">4th Grade</option>
                  <option value="5th Grade">5th Grade</option>
                  <option value="6th Grade">6th Grade</option>
                  <option value="7th Grade">7th Grade</option>
                  <option value="8th Grade">8th Grade</option>
                  <option value="Algebra 1">Algebra 1</option>
                  <option value="Geometry">Geometry</option>
                  <option value="Algebra 2">Algebra 2</option>
                  <option value="Pre-Calculus">Pre-Calculus</option>

                </TextField>
                <Box sx={{ py: 2 }}>
                  <Button style={{ backgroundColor: "#2563eb" }}

                    fullWidth
                    size="large"
                    type="submit"
                    variant="contained"
                  >
                    Sign Up Now
                  </Button>
                </Box>
                <Typography
                  color="textSecondary"
                  variant="body2"
                >
                  Have an account?
                  {' '}
                  <MLink
                    to="/login"
                    variant="subtitle2"
                    underline="hover"
                    component={Link}
                  >
                    Log In
                  </MLink>
                </Typography>
              </form>
            </Container>
          </Box>
        </div>
      </section>
    </>
  )
}