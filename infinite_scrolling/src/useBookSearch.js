import { useEffect, useState } from 'react'
import axios from 'axios'

function useBookSearch(query,pagenumber) {
    const[loading,setLoading] = useState(false)
    const[error,setError] = useState(false)
    const[books,setBook] = useState([])
    const[hasMore,setHasmore] = useState(false)


    useEffect(()=>{
        let cancel
        axios({
            method:'GET',
            url:'http://openlibrary.org/search.json',
            params:{q:query,page:pagenumber},
            cancelToken:new axios.CancelToken(c=>cancel=c)

        }).then(res=>{
            setBook(prevBooks=>{
                return [...new Set([...prevBooks,res.data.docs.map(b=>b.title)])]
            })
            setHasmore(res.data.docs.length>0)
            setLoading(false)
            console.log(res.data)
        }).catch(e=>{
            if(axios.isCancel(e)) return
            setError(true)
        })
        return ()=>cancel()


    },
    [query,pagenumber])
  return {loading,error,books,hasMore}
}

export default useBookSearch
