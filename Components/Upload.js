import React from 'react'
import { Button, LinearProgress, Box } from '@mui/material'
import MovieIcon from '@mui/icons-material/Movie';

function Upload() {
  
  const [progress, setProgress] = React.useState(0);

  React.useEffect(() => {
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress === 100) {
          return 0;
        }
        const diff = Math.random() * 10;
        return Math.min(oldProgress + diff, 100);
      });
    }, 500);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className='upload-btn'>
        <Button variant="outlined" component="label" startIcon={<MovieIcon sx={{color:'black'}} />} fullWidth style={{marginTop:"1rem"}}>
            <input type="file" accept="image/*" style={{display:"none", marginRight:"1rem"}} />
        Upload</Button>
            <Box sx={{ width: '100%', mt:'0.2rem' }}>
                <LinearProgress variant="determinate" value={progress} />
            </Box>
    </div>
  )
}
export default Upload;
