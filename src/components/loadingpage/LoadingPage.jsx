import React from "react";

const LoadingPage = ({ fourLetterWord }) => {
  const spans = [];
  for (var i = 0; i < 4; i++) {
    spans.push(<span>{fourLetterWord.charAt(i)}</span>);
  }
  return <span className="back">{spans.map((x) => x)}</span>;
};

export default LoadingPage;
