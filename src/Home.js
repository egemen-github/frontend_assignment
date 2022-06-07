import { useEffect, useState} from "react";
import Notifications from "./Notifications";
import useFetch from "./useFetch";

const Home = () => {
	const { data, isPending, isEmpty, error, setData, setEmpty } = useFetch("./data/data.json");

    // fetch("./data/data.json")
    //   .then((response) => response.json())
    //   .then((json) => {
    //     console.log(json);
    //   });

	return (
		<div className="container">
      {data && <Notifications NotifData={data} PageTitle = "Notifications"/>}
			{error && <div>{ error }</div>}
      {isPending && <div>Loading...</div>}
      {isEmpty && <div className="box has-text-centered py-5 mt-5" >You have no notifications.</div>}
		</div>
	);
}

export default Home;