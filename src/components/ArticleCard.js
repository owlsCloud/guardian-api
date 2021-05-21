import React from "react";
import { Card } from "react-bootstrap";
const ArticleCard = ({ article: { webTitle, webUrl } }) => {
  return (
    <>
      <Card>
        <a href={webUrl} style={{ textDecoration: "none", color: "#000000" }}>
          <h5>{webTitle}</h5>
        </a>
      </Card>
    </>
  );
};

export default ArticleCard;
