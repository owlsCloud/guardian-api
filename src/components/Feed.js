import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import { Row, Col, Container } from "react-bootstrap";
const Feed = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = () => {
      axios
        .get(
          "https://content.guardianapis.com/search?api-key=8dd53406-f0a0-4418-92f2-f50af6e5ee84"
        )

        .then((res) => {
          res.data.response.results.forEach((article) => {
            data.push(article);

            setData([...data, article]);
          });
          console.log(data);
        });
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Row xs={5}>
        {data.map((article, idx) => {
          return (
            <Col key={idx}>
              <ArticleCard article={article} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Feed;
