import React, { useState, useEffect } from "react";

function PortfolioList() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("https://api.github.com/users/troskan/starred")
      .then((response) => response.json())
      .then((actualData) => {
        setData(actualData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="portfolio-item">
      <h2>Github Projects</h2>
      {loading && <div>A moment please...</div>}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      <ul>
        {data &&
          data.map(({ id, name, html_url }) => (
            <li key={id}>
              <h3>{name}</h3>
              <a href={html_url} target="_blank" rel="noreferrer">
                {html_url}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default PortfolioList;
