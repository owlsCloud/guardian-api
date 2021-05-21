import React from "react";
import { Card } from "react-bootstrap";
const ArticleCard = ({ article: { webTitle, webUrl, sectionName } }) => {
  return (
    <>
      <Card>
        <a href={webUrl} style={{ textDecoration: "none", color: "#000000" }}>
          <h4 style={{ color: "#C70000", fontWeight: "600" }}>{sectionName}</h4>
          <h5>{webTitle}</h5>
        </a>
      </Card>
    </>
  );
};

export default ArticleCard;
