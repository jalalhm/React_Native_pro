
import { useState,useEffect } from 'react'
import axios from "axios";
//had address ip bedelha sir recherch dyal windows o dir CMD o moraha radi t5rej lk CMD dir fihe had command (ipconfig) radi tl9A Adresse IPv4. . . . . . . . . . . . . .: 192.168.11.103 ola 104 3la 7sab 
const useFetch = (endpoint = 'http://192.168.11.103:3001/api/trips/1') => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(endpoint);
      setData(response.data);
      setIsLoading(false);
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [endpoint]);

  const refetch = () => {
    setIsLoading(true);
    fetchData();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;