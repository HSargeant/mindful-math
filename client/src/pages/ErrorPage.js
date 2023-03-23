// error oage 

import { useRouteError,useNavigate } from "react-router-dom";
import { Button,Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function ErrorPage() {
	const navigate=useNavigate()
	const error = useRouteError();
	console.error("error: ",error);
	return (
		<section style={{display:"flex",justifyContent:"center",flexDirection:"column",alignItems:"center"}}>
			<p><Typography>Oops! The page you're looking for can't be found. Please check the URL for any mistakes. Sorry for the inconvenience!</Typography></p>
				<Button
				component="a"
				startIcon={(<ArrowBackIcon fontSize="small"  />)}
				sx={{ mt: 3, }}
				variant="contained"
				disableElevation
				onClick={()=>navigate(-1)}
				>
              		Go back
            	</Button>
		</section>
	)
}