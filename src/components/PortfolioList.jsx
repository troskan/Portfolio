// Import necessary hooks and components from React
import React, { useState, useEffect } from "react";

function PortfolioList() {
  // Declare a state variable 'data' and its updater function 'setData' with an initial value of 'null'
  const [data, setData] = useState(null);
  // Declare a state variable 'loading' and its updater function 'setLoading' with an initial value of 'true'
  const [loading, setLoading] = useState(true);
  // Declare a state variable 'error' and its updater function 'setError' with an initial value of 'null'
  const [error, setError] = useState(null);

  // The useEffect hook allows you to perform side effects, like fetching data, after rendering
  useEffect(() => {
    // Fetch data from the GitHub API
    fetch("https://api.github.com/users/troskan/starred")
      // When the response is received, convert it to JSON
      .then((response) => response.json())
      // After converting to JSON, store the data in the 'data' state variable and set 'loading' to 'false'
      .then((actualData) => {
        setData(actualData);
        setLoading(false);
      })
      // If there's an error, catch it and set the 'error' state variable with the error message and set 'loading' to 'false'
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
    // The empty array '[]' means that this effect will run only once, when the component mounts
  }, []);
  console.log(data);

  // Render the component
  return (
    <div className="portfolio-item">
      <h2>Github Projects</h2>
      {/* Show a loading message while data is being fetched */}
      {loading && <div>A moment please...</div>}
      {/* If there's an error, show an error message */}
      {error && (
        <div>{`There is a problem fetching the post data - ${error}`}</div>
      )}
      {/* Map through the data and render a list item for each project */}
      <ul>
        {data &&
          data.map(({ id, name, html_url }) => (
            <li key={id}>
              <h3>{name}</h3>
              <a
                class="github-url"
                href={html_url}
                target="_blank"
                rel="noreferrer"
              >
                {html_url}
              </a>
            </li>
          ))}
      </ul>
    </div>
  );
}

// Export the component to be used elsewhere
export default PortfolioList;
