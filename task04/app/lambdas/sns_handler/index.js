exports.handler = async (event) => {
  // Iterate over each record in the event
  for (const record of event.Records) {
    // Get the SNS message
    const snsMessage = record.Sns.Message;
    // Print the SNS message to CloudWatch Logs
    console.log("Received SNS message:", snsMessage);
  }

  const response = {
    statusCode: 200,
    body: JSON.stringify("Hello from Lambda!"),
  };
  return response;
};
