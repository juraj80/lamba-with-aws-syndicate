exports.handler = async (event) => {
  // Iterate over each record in the event
  for (const record of event.Records) {
    // Get the message body
    const messageBody = record.body;
    // Print the message body to CloudWatch Logs
    console.log("Received message:", messageBody);
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
