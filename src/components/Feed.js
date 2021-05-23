import React, { useState, useEffect } from "react";
import axios from "axios";
import ArticleCard from "./ArticleCard";
import { Row, Col, Container } from "react-bootstrap";
const Feed = ({ section }) => {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  useEffect(() => {
    fetchData();
  }, [page]);
  const fetchData = () => {
    axios
      .get(
        `https://content.guardianapis.com/search?page=${page}&api-key=8dd53406-f0a0-4418-92f2-f50af6e5ee84`
      )

      .then((res) => {
        res.data.response.results.forEach((article) => {
          if (section) {
            if (article.pillarName === section) {
              data.push(article);
              setData([...data, article]);
            }
          } else {
            data.push(article);

            setData([...data, article]);
          }
        });
        if (data.length < 10) changePage();
      });
  };
  const changePage = () => {
    setPage((state) => setPage(state + 1));
  };
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
