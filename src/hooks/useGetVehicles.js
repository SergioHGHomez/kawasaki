import { useState, useEffect } from "react";
import axios from "axios";

const useGetVehicles = (API) => {
    const [vehicles, setVehicles] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await axios(API);
            setVehicles(response.data);
        }
        fetchData();
    }, [API]);

    return vehicles;
};

export default useGetVehicles;