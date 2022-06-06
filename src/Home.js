import { useEffect, useState} from "react";
import Notifications from "./Notifications";
import useFetch from "./useFetch";

const Home = () => {
	
	const [data, setData] = useState([]);
	useEffect(() => {
		fetch("./data/data.json")
		.then((response) => response.json())
		.then((json) => {
			console.log(json);
			setData(json.notifications)
		});
	});


    // fetch("./data/data.json")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //   });

	return (
		<div className="container">
			<Notifications NotifData={data} />
		</div>
	);
}

export default Home;