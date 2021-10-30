import { useEffect, useState } from "react"

const useOffers = () => {
    const [offers, setOffers] = useState([])

    useEffect(()=>{
        fetch("https://gentle-earth-96369.herokuapp.com/offers")
        .then(res => res.json())
        .then(data => setOffers(data))
    },[])
    return {offers, setOffers}
}
export default useOffers;