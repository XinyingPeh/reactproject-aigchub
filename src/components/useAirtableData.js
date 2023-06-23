import { useEffect, useState } from "react";
import Airtable from "airtable";


const apitoken = process.env.REACT_APP_API_KEY_AIRTABLE

Airtable.configure({
  endpointUrl: "https://api.airtable.com",
  apiKey: apitoken,
});

function useAirtableData(baseId, tableName, view = "Grid view") {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const base = Airtable.base(baseId);

    const fetchData = async () => {
      try {
        const response = await base(tableName).select({ view }).all();
        setData(response);
        setLoading(false);
        console.log(response);
      } catch (error) {
        console.error(`Error fetching data from ${tableName}:`, error);
      }
    };

    fetchData();
  }, [baseId, tableName, view]);

  return { data, loading };
}

export default useAirtableData;
