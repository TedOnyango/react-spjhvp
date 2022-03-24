import React from 'react';

export default function Table(){
  let key = 1;

  let data =[
    {
      firstName: "Teddy",
      lastName: "Onyango",
      handle: "@onyiboy"
    },
    {
      firstName: "Kim",
      lastName: "Woods",
      handle: "@woods"
    },
    {
      firstName: "Pundesh",
      lastName: "Fizzo",
      handle: "@fizzo"
    },
    {
      firstName: "Parakesh",
      lastName: "Mushizop",
      handle: "@mushipa"
    },
  ]

  return(
    <div className="container">
      <div>
      </div>
      <br></br>
      <div>
      <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    { data.map(item => {
      return(
    <tr>
      <th scope="row">{key++}</th>
      <td>{item.firstName}</td>
      <td>{item.lastName}</td>
      <td>{item.handle}</td>
    </tr>

      );
    })};
  </tbody>
</table>
      </div>
    
    
    
    </div>
  )

}