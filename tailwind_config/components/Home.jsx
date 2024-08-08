import React from 'react'

export default function Home(prop) {
    let propValue=prop;
    console.log(propValue);

  return (
    <div>
      <h1>this is HOME PAGE {prop.name} </h1>

    </div>
  )
}
