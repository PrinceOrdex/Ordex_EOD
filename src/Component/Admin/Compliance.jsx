import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Compliance = () => {
  const [complaince, setComplaince] = useState([]);
  const [complainceDateRange, setComplainceDateRange] = useState([]);
  const getEODComplaince = async () => {
    try {
      let res = await axios.get("http://localhost:8000/eod/compliance", {
        params: {
          eod_date: "2022/09/12",
        },
      });
      setComplaince(res.data);
      console.log("-----All Complaince------");
      console.log(complaince);
    } catch (error) {
      console.log(error);
    }
  };

  const getEODComplianceDateRange = async () => {
    try {
      let res = await axios.get("http://localhost:8000/eod/daterange", {
        params: {
          start_date: "2022/09/12",
          end_date: "2022/09/20"
        },
      });
      setComplainceDateRange(res.data);
      console.log("-----All Complaince by date range------");
      console.log(complainceDateRange);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEODComplaince();
    getEODComplianceDateRange();
  }, []);

  return <>Compliance</>;
};

export default Compliance;
