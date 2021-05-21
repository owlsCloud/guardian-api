import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import { Row, Col } from "react-bootstrap";
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
      <Row>
        {data.map((article, idx) => {
          return (
            <Col>
              <ArticleCard key={idx} article={article} />
            </Col>
          );
        })}
      </Row>
    </>
  );
};

export default Feed;
