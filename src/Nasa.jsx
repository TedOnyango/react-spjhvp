import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button } from 'react-bootstrap';


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
  let camera = {...it['camera']}
  console.log(camera)

  return (
    <div>
     
      <h2>This is Nasa</h2>
      {/* {data.map(dat => (
      <div>
        <img src={dat.img_src}/>
        </div>
      ))} */}
     <div>
     <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={it.img_src} />
  <Card.Body>
    <Card.Title>{camera.full_name} | {it.earth_date}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
       </div>

    </div>
  );

}
export default Nasa;