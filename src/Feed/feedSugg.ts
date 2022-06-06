import axios from "axios"

async function FeedSugg() {
  /*const key = "AIzaSyCKzBDN7DWgwoaD5nkX9MZy4Jq5WpEKW4Y"
  const data = await axios.get("https://www.googleapis.com/youtube/v3/search",{
    params:{
      part:"snippet",
      maxResult:5,
      key:key,
      
    },
    headers: {}
  }).then((res)=>{
    console.log(res.data.items)
    res.data.items.map((sn:any,index:number)=>{
      Data.push(
        {
          title:sn.snippet.title,
          id:sn.id.videoId
        }
        )
    })
  }).catch((err)=> console.log(err))
  */
  const res = axios.get("http://localhost:5000/suggestion")
  return res
}

export default FeedSugg