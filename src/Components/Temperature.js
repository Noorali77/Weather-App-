import React,{useState,useEffect} from 'react'
import './css/style.css'



function Temperature (){
     const [city,setCity] = useState(null)
 const [search,setSearch] =useState('karachi')
 const [about,setAbout] = useState(null)
 

  useEffect (()=>{ 
    const fetchApi = async ()=>{
         const url = `https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=e1c32dd0eb29cd3b266f3b06ff7c70b4&units=metric`
         const response = await fetch(url)
         const resJson = await response.json();
        //  console.log(resJson)
        // console.log(resJson)
         setCity(resJson.main)
        


     };
    fetchApi();

 },[search])

    return(
      <>
          
      
        
       

        

        <main className="main-container" >
    
  
       < div className="row inputData">
    <div className="col-12 mb-3">
        <div className="input-group mt-4">
            <input type="search" onChange={(e)=>setSearch(e.target.value)}  className="form-control" placeholder="Search....." /> 
        </div>
    </div>
</div>

        
        
    <div className="location-and-date d-flex justify-content-center">
      <h1 className="location-and-date__location">{city?search:(<p>No city Found</p>)}</h1>
    </div>
     
    
 <div className="current-temperature mb-3 mt-4">
      <div className="current-temperature__content-container">
        <div className="current-temperature__value">{city?city.temp:(<p>0</p>)}&deg;</div>
        <div className="current-temperature__summary">Temperature</div>
      </div>
    </div>
    
    
    <div className="current-stats">
      <div>
        <div className="current-stats__value">{city?city.temp_min:(<p>0</p>)}&deg;</div>
        <div className="current-stats__label">Low</div>
        
      </div>
      <div>
        <div className="current-stats__value">{city?city.feels_like:(<p>0</p>)}&deg;</div>
        <div className="current-stats__label">Feels like</div>
      </div>
      <div>
      <div className="current-stats__value">{city?city.temp_max:(<p>0</p>)}&deg;</div>
        <div className="current-stats__label">High</div>
      
      </div>
    </div>
  

</main>

      </>
        
    )
}
   

export default Temperature;




