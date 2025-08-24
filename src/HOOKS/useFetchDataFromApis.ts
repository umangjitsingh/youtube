import axios from "axios";
import { useEffect, useState } from "react";

export const useFetchDataFromApis = (url: string) => {
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [data, setData] = useState<any>(null);

    const getData = async () => {
        try {
            const response = await axios.get(url);
            setData(response?.data);
        } catch (e) {
            console.error("API Error:", e);
            setError(true);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return { data, error, loading };
};