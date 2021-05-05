import React, { useState, useEffect } from 'react'

import './App.css';

function App() {
  const [resourceType, setResourceType] = useState('posts')

console.log('render')

useEffect(() => {
  fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
  .then((response) => response.json())
  .then((json) => console.log(json));
}, [resourceType])

  return (
    <>
      <div>
        <button onClick={() => setResourceType('posts')}>Posts</button>
        <button onClick={() => setResourceType('users')}>Users</button>
        <button onClick={() => setResourceType('comments')}>Comments</button>

      </div>
      <h1>{resourceType}</h1>
    </>
  );
}

export default App;
