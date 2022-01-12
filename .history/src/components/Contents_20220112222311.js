import {useState, useEffect} from "react";
import axios from "axios";

Contents = () => {

    useEffect(() =>{
 
      const fetchEvents =() =>{
        const res = axios.get("https://api.covid19api.com/total/dayone/country/kr")
      }

    })

  return (
    <section>
      <h2>국내 코로나 현황</h2>
      <div className="contents"></div>
    </section>
  );
};

export default Contents;
