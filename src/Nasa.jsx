import React, {useEffect, useState} from 'react';

const Nasa = () =>{
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);
  let API_KEY = "ux9eGRo6w5G27Gyzvzz0RmRLbh7MJCgz9keE40Rn";
  
  useEffect(() => {
    const url = "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=" + API_KEY
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json['photos']))
      .catch((error) => console.log(error));
  }, []);
  console.log(data)
  let it = {...data[0]}
  console.log(it.camera)



  return (
    <div>
     
      <h2>This is Nasa</h2>
      {/* {data.map(dat => (
      <div>
        <img src={dat.img_src}/>
        </div>
      ))} */}
     <div>{
       
       }</div>

    </div>
  );

}
export default Nasa;