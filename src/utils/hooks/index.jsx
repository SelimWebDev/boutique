import { useState, useEffect } from "react";

function useGetReq(url){
    const [ data, setData ] = useState({})
    const [ isLoading, setIsLoading ] = useState(false)

    useEffect(() =>{
       if (!url) {
           return
       } else {
        setIsLoading(true)
        fetch(url)
            .then((res) => res.json())
            .then((data) => {
                setData(data)
                setIsLoading(false)
            })
            .catch((error) => console.log(error))       
       }
    },[url])

    return { isLoading, data }
}

export default useGetReq