exports.handler = async (event) => {
  if (event.rawPath === "/hello") {
    const response = {
      statusCode: 200,
      body: JSON.stringify({
        message: "Hello from Lambda",
      }),
    };
    return response;
  }

  const response = {
    statusCode: 404,
    body: JSON.stringify({
      message: "Resource not found",
    }),
  };
  return response;
};
