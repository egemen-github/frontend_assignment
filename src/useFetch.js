import { useState, useEffect } from "react";

const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [isPending, setIsPending] = useState(true);
	const [isEmpty, setEmpty] = useState(null);
	const [error, setError] = useState(null);
	
	useEffect(() => {
		fetch(url)
			.then(response => {
				if(!response.ok) {
					throw Error('Could not fetch the data from server.');
				} 
				console.log(response)
				return response.json();
			})
			.then(data => {
				if(data.notifications.length === 0) { 
					setEmpty(true)
					console.log(data.notifications.length)
				} else {
					// Sorting by Date
					data.notifications.sort(function(a,b){
						return new Date(b.date) - new Date(a.date)
					})				
					setEmpty(false)
					setData(data.notifications)
				}
				setIsPending(false)
				setError(false)
			})
			.catch(err => {
				setIsPending(false)
				console.log(err.message)
				setError(err.message)
			})
	}, [url])
	
  return { data, isPending, isEmpty, error, setData, setEmpty }
}

export default useFetch;