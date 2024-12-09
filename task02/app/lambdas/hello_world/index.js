exports.handler = async (event) => {
  if (event.rawPath === "/hello") {
    const response = {
      statusCode: 200,
      body: JSON.stringify({ statusCode: 200, message: "Hello from Lambda" }),
    };
    return response;
  }

  const response = {
    statusCode: 400,
    body: JSON.stringify({
      statusCode: 400,
      message: `Resource not found. Request path: ${event.rawPath}. HTTP method: ${event.requestContext.http.method}`,
    }),
  };

  return response;
};
