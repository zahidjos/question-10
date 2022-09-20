
import './App.css';
import Card from './component/Card/Card';
import { useEffect, useState } from 'react';

function App() {
  const [data,setData]=useState(null);
  const [loading,SetLoading]=useState(true);
  const[error,SetError]=useState(null);
  useEffect(()=>{
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(res=>res.json())
   .then((data)=>{setData(data)
  SetLoading(false)})
  .catch((err)=>{
    SetError(err.message);
    console.log(err)
    SetLoading(false);
    
  })
  },[])
  return (
    <div className="App">
      {loading && <p className='absolute top-2/4 left-2/4'>Loading...</p>}
      {error && <p>{error}</p>}
      
      {console.log(data)}
      <div className='w-9/12 m-auto py-20 grid grid-cols-3 gap-4'>
      {data && data.map(singleData=><Card singleData={singleData}></Card>)}
         
      </div>
    </div>
  );
}

export default App;
