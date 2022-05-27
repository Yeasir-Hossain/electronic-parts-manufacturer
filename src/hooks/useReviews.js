import { useEffect, useState } from 'react';

const useReviews = () => {
    const [reviews,setReviews]=useState([])
    useEffect(()=>{
        fetch('https://stormy-chamber-96171.herokuapp.com/reviews')
        .then(res=>res.json())
        .then(data=>setReviews(data))
    },[])
    return [reviews,setReviews]
};

export default useReviews;