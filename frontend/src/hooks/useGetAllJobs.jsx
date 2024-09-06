import { setAllJobs } from '@/redux/jobSlice';
import { JOB_API_END_POINT } from '@/utils/constant';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const { searchedQuery } = useSelector(store => store.job);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchAllJobs = async () => {
            setLoading(true);
            setError(null);
            console.log("Searched Query:", searchedQuery); // Debugging line
            try {
                const url = `${JOB_API_END_POINT}/get?keyword=${searchedQuery}`;
                console.log("Fetching jobs from:", url); // Debugging line
                const res = await axios.get(url, { withCredentials: true });
                console.log("Response:", res.data); // Log the response
                if (res.data.success) {
                    dispatch(setAllJobs(res.data.jobs));
                }
            } catch (error) {
                console.error("Error fetching jobs:", error);
                setError("Failed to fetch jobs. Please try again.");
            } finally {
                setLoading(false);
            }
        };

        if (searchedQuery) { // Only fetch if searchedQuery is not empty
            fetchAllJobs();
        }
    }, [searchedQuery, dispatch]);

    return { loading, error };
}

export default useGetAllJobs;
