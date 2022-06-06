import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import Stack from '@mui/material/Stack';
import LiveBadge from "../scripts/livebadge"
import {CgMediaLive} from "react-icons/cg"
const Input = styled('input')({
  display: 'none',
});

export default function UploadVideo() {
  return (
    <Stack direction="row" alignItems="center" spacing={5}>
      {/*
      <label htmlFor="contained-button-file">
        <Input accept="image/*" id="contained-button-file" multiple type="file" />
        <Button variant="contained" component="span">
          Upload
        </Button>
      </label>
      */}
      <form method="post" onSubmit={(e)=>{
            e.preventDefault()
            console.log(e)
            console.log(e.target)
          }}>
      <label htmlFor="icon-button-file">
         <Input accept="file/*" id="icon-button-file" type="file" onClick={()=> alert("hello")}/>
          <input type="submit" />
           <PhotoCamera />
         
         
       </label>
       </form>
      <CgMediaLive />
    </Stack>
  );
}
