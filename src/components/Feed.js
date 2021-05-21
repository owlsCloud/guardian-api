import React, { useState, useEffect } from "react";
import axios from "axios";

const Feed = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://content.guardianapis.com/search?api-key=8dd53406-f0a0-4418-92f2-f50af6e5ee84"
      )

      .then((res) => {
        res.data.response.results.forEach((article) => {
          data.push(article);
          setData([...data, article]);
        });
      });
    console.log(data);
  }, []);

  return (
    <>
      <div>
        {data.map((article, idx) => {
          console.log(article.webTitle);
          return <p key={idx}>{article.webTitle}</p>;
        })}
      </div>
    </>
  );
};

export default Feed;
