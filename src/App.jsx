import { useEffect, useEffectEvent, useState } from "react";

function App() {
  const [currentTab, setCurrentTab] = useState(1);
//write line 5 to 17 - thrice
  const [tabData, setTabData] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    const fetchData = async ()=>{
      try{
        setLoading(true)
        const response = await fetch("https://jsonplaceholder.typicode.com/posts/"+currentTab)
        const json = await response.json();
        setTabData(json)
        setLoading(false)
      }catch(err){
        console.error("Fetching error : " + err);
      }
    }
    fetchData()

  },[currentTab])
  
  return <div >
    <div style={{display:"flex",justifyContent:"space-between"}}>
    <button onClick={()=>{
      setCurrentTab(1)
    }} style={{color : currentTab == 1 ? "orange" : "white"}}>#post 1</button>
    <button onClick={()=>{
      setCurrentTab(2)
    }} style={{color : currentTab == 2 ? "orange" : "white"}}>#post 2</button>
    <button onClick={()=>{
      setCurrentTab(3)
    }} style={{color : currentTab == 3 ? "orange" : "white"}}>#post 3</button>
    <button onClick={()=>{
      setCurrentTab(4)
    }} style={{color : currentTab == 4 ? "orange" : "white"}}>#post 4</button>
    <button onClick={()=>{
      setCurrentTab(5)
    }} style={{color : currentTab == 5 ? "orange" : "white"}}>#post 5</button>
   


  </div>
  <div >
    {loading ? "content is loading..." : tabData.title}
    </div>

  </div>

}

export default App