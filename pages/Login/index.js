import React, { useContext, useEffect } from "react";
import Image from "next/image";
import insta from '../../assets/insta.png';
import TextField from '@mui/material/TextField'; 
import { Button } from "@mui/material";
import login from '../../assets/login.png';
import { CarouselProvider, Slider, Slide, Image as Img } from 'pure-react-carousel';

import bg1 from '../../assets/bg1.png'
import bg2 from '../../assets/bg2.png'
import bg3 from '../../assets/bg3.png'
import bg4 from '../../assets/bg4.png'

import { Carousel } from 'react-responsive-carousel';
import { AuthContext } from "@/Context/auth";
import { useRouter } from "next/router";

import Link from "next/link";

function index() {

    const router = useRouter()
    const [email, setEmail] = React.useState('')
    const [password, setPassword] = React.useState('')
    const [error, setError] = React.useState('')
    const [loading, setLoading] = React.useState(false)

    const { login, user } = useContext(AuthContext)

    const handleClick = async() => {
        try{
            setLoading(true)
            setError('')
            await login(email, password)
            console.log("Logged in");
        }catch(err){
            console.log(err);
            setError(err.message)
            setTimeout(() => {
                setError('')
            },2000)
        }
        setLoading(false);
    }

    useEffect(() => {
        if(user){
            router.push('/')
        }
        else{
            console.log("Not Logged In");
        }     
    },[user])

  return (
    <div className="login-container">
        <div className="carbg">
            <div className="car">
                <Carousel showArrows={false}
                showThumbs={false}
                showStatus={false}
                showIndicators={false}
                infiniteLoop={true}
                autoPlay={true}
                interval={2000}>
                    <Image style={{height: '510px'}} src={bg1}></Image>   
                    <Image style={{height: '510px'}} src={bg2}></Image>   
                    <Image style={{height: '510px'}} src={bg3}></Image>   
                    <Image style={{height: '510px'}} src={bg4}></Image>   
                </Carousel>


                {/* <CarouselProvider
                    naturalSlideWidth={241}
                    naturalSlideHeight={423}
                    totalSlides={4}
                    visibleSlides={1}
                    isPlaying={true}
                    // isInfinite={true}
                >
                <Slider>
                    <Slide>
                        <Img index={0} src={bg1}/>
                    </Slide>
                    <Slide>
                        <Img index={1} src={bg2}/>
                    </Slide>
                    <Slide>
                        <Img index={2} src={bg3}/>
                    </Slide>
                    <Slide>
                        <Img index={3} src={bg4}/>
                    </Slide>
                    
                </Slider>
            </CarouselProvider> */}

            </div> 
        </div>
    <div>
        <div className="login-card">
            <Image src={insta} style={{width:"10rem", height:"5rem"}}/>
            
            <TextField size="small" id="outlined-basic" fullWidth label="Email" variant="outlined" margin="dense" value={email} onChange={(e) => setEmail(e.target.value)}/>
            
            <TextField size="small" type="password" id="outlined-basic" fullWidth label="Password" variant="outlined" margin="dense" value={password} onChange={(e) => setPassword(e.target.value)}/>

            {
                error != '' &&
                <div style={{color:"red"}}>{error}</div>
            }


            <Button variant="contained" component="span" fullWidth style={{marginTop:"1rem"}} onClick={handleClick} disabled={loading}>Log in</Button>
            <div style={{color:"blue", marginTop:"1rem"}} ><Link href="/ForgotPassword">Forgot Password</Link></div>
        </div>
        <div className="bottom-card" style={{color:"black"}}>
            Don't have an Account? <Link href="Signup"><span style={{color:"blue"}}>Sign up</span> </Link>
        </div>
        </div>
    </div>
  );
}

export default index;
