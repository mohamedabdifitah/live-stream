
async function NowLive(video:any) {
  navigator.mediaDevices.getUserMedia({
    audio:true,
    video:{
      facingMode: "user"
    }
  }).then(stream => {
    video.srcObject = stream;
    alert("now we are live")
    }).catch(console.error)
}
export default NowLive