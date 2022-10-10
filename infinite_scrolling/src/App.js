
import { useState } from 'react';
import './App.css';
import useBookSearch from './useBookSearch';

function App() {
  const[query,setQuery] = useState('');
  const[pagenumber,setPagenumber] = useState(1);
  function handleSearch(e)
  {
    setQuery(e.target.value)
    setPagenumber(1)
  }

  const {
    books,hasMore,loading,error
  }=useBookSearch(query,pagenumber)
  return (
    <>
    <input type="text" onChange={handleSearch}></input>
    {
      books.map(book=>{
        return
        <div key={book}>{book}</div>
      })
    }
    <div>{loading && 'Lodaing..'}</div>
    <div>{error && 'Error..' }</div>
    <div>Title</div>
    <div>Loading....</div>
    <div>Error</div>
    </>
    
  );
}

export default App;
