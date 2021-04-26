import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Activity = () => {

    const[person,setPerson]=useState(null);
    const[error,setError]=useState(null);

    useEffect(() => {
        axios.get('https://api.randomuser.me/')
        .then(response => {
            setPerson(response.data)
        })
        .catch(error => {
            console.error("there are some problem: ",error);
            setError(error);
        })
    })

    // useEffect(async() => {
    //     const response = await fetch('https://api.randomuser.me/');
    //     const data = await response.json();
    //     const [item] = data.result;
    //     setPerson(item);
    // }, []);
    // const {name:{first,last}} = person
    // return (
    //     <div>
    //         {first}
    //     </div>
    // )

    return(
        <div>
        {person.results.name.first}
        {/* active */}
        
        </div>
    )
}

export default Activity;