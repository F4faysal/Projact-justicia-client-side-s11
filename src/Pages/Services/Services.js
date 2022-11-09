import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from './Card/Card';

const Services = () => {
    
    const data = useLoaderData()

   const [services , setServices] = useState({})

//    useEffect(  ()=>{
//     fetch('http://localhost:5000/service')
//     .then(res => res.json())
//     .then(data =>  setServices(data))
//     .then(data =>  setServices(data))
//    },[services])

   console.log( 'inside' ,  services)

    return (
        <div>
         {
            data.map(service => <Card key={service._id} service={service}></Card>)
         }
        </div>
    );
};

export default Services;