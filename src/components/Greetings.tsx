// Greeting.tsximport React from 'react';
import React from 'react';
import GreetingProps from '../interfaces/GreetingProps';

// interface GreetingProps {
//     name: string;
//   }
  
  const Greeting: React.FC<GreetingProps> = ({ name }) => {
    return <h1>Hello, {name}!</h1>;
  }
  
  export default Greeting;