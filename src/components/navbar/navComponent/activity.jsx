import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Activity = () => {
  const [person, setPerson] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get('https://randomuser.me/api/?page=1&results=10')
      .then((response) => {
        setPerson(response.data.results);
        console.log('dataaa ,', response);
      })
      .catch((error) => {
        console.error('there are some problem: ', error);
        setError(error);
      });
  },[]);

  console.log('dataaa 111 ,', person);

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

  return (
    <div>
      {person?.name?.first}
      {/* active */}
    </div>
  );
};

export default Activity;