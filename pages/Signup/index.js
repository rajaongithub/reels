import React, { useContext, useEffect } from "react";
import Image from "next/image";
import insta from '../../assets/insta.png'
import TextField from '@mui/material/TextField'; 
import { Button } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";
import { AuthContext } from "@/Context/auth";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { db, storage } from "../../Firebase";
import { doc, setDoc } from "firebase/firestore";
// import { SettingsPhoneRounded } from "@mui/icons-material";
function index() {

  const router = useRouter()
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [name, setName] = React.useState('')
  const [file, setFile] = React.useState(null)
  const [error, setError] = React.useState('')
  const [loading, setLoading] = React.useState(false)

  const { signup, user } = useContext(AuthContext)

  const handleClick = async() => {

      // console.log(file)
      // console.log(name)
      // console.log(email)
      // console.log(password)
      
      try{
          setLoading(true)
          setError(' ')
          const user = await signup(email, password)
            const storageRef = ref(storage, `${user.id}/Profile`);

            const uploadTask = uploadBytesResumable(storageRef, file);

            // Register three observers:
            // 1. 'state_changed' observer, called any time the state changes
            // 2. Error observer, called on failure
            // 3. Completion observer, called on successful completion
            uploadTask.on('state_changed', 
              (snapshot) => {
                // Observe state change events such as progress, pause, and resume
                // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                console.log('Upload is ' + progress + '% done');
              }, 
              (error) => {
                // Handle unsuccessful uploads
                console.log(error);
              }, 
              () => {
                // Handle successful uploads on complete
                // For instance, get the download URL: https://firebasestorage.googleapis.com/...
                getDownloadURL(uploadTask.snapshot.ref).then(async (downloadURL) => {
                  console.log('File available at', downloadURL);
                  let obj = {
                    name: name,
                    email: email,
                    uid: user.user.uid,
                    photoURL: downloadURL
                  }
                  await setDoc(doc(db,"users",user.user.uid),obj);
                   console.log("doc added successfully")
                });
              }
            );
          }
      catch(err){
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
      console.log("Not loged in");
    }
  },[user])

  return (
    <div className="signup-container">
      <div className="signup-card">
        <Image src={insta} style={{width:"10rem", height:"5rem"}}/>

        <TextField size="small" id="outlined-basic" fullWidth label="Email" variant="outlined" margin="dense" value={email} onChange={(e) => setEmail(e.target.value)}/>

        <TextField size="small" type="password" id="outlined-basic" fullWidth label="Password" variant="outlined" margin="dense" value={password} onChange={(e) => setPassword(e.target.value)}/>

        <TextField size="small" id="outlined-basic" fullWidth label="Fullname" variant="outlined" margin="dense" value={name} onChange={(e) => setName(e.target.value)}/>

        <Button variant="outlined" component="label" fullWidth style={{marginTop:"1rem"}}>
            <input type="file" accept="image/*" style={{display:"none", marginRight:"1rem"}} onChange={(e) => setFile(e.target.files[0])}/>
        Upload</Button>

        <Button variant="contained" component="span" fullWidth style={{marginTop:"1rem"}} onClick={handleClick} disabled={loading}>Sign up</Button>
      </div>
      
      <div className="bottom-card" style={{color:"black"}}>
        Already have an Account? <Link href="/Login"><span style={{color:"blue"}}>Login</span></Link>
      </div>
    </div>
  );
}

export default index;
