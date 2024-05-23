import { useEffect, useState } from "react";
import { toast } from "sonner";


const useFetch = (fn) => {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    //for Pagination.
     const [pgno, setPgNo] = useState(0);

    const fetchData = async () => {
        setLoading(true);
        try {
            const response = await fn();
            if (response.status === 200) {
                setData(response.data)
            }
            else {
                throw new Error("Server Error.")
            }
        } catch (error) {
            toast("Something went wrong !!")
            setError(true)
            console.log(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData();
    }, [pgno])
    return { data, setData, loading, error ,pgno,setPgNo };
}

export default useFetch