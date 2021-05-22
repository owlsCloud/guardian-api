import React from "react";
import { Card } from "react-bootstrap";
const ArticleCard = ({ article: { webTitle, webUrl, pillarName } }) => {
  return (
    <>
      <Card>
        <a href={webUrl} style={{ textDecoration: "none", color: "#000000" }}>
          <h4 style={{ color: "#C70000", fontWeight: "600" }}>{pillarName}</h4>
          <h5>{webTitle}</h5>
        </a>
      </Card>
    </>
  );
};

export default ArticleCard;
