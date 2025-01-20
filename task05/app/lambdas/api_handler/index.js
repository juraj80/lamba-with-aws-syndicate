const AWS = require("aws-sdk");
const { v4: uuidv4 } = require("uuid");

const dynamoDb = new AWS.DynamoDB.DocumentClient();
const TABLE_NAME = "Events";

exports.handler = async (event) => {
  try {
    const { principalId, content } = JSON.parse(event.body);

    const eventId = uuidv4();
    const createdAt = new Date().toISOString();

    const eventItem = {
      id: eventId,
      principalId: principalId,
      createdAt: createdAt,
      body: content,
    };

    const params = {
      TableName: TABLE_NAME,
      Item: eventItem,
    };

    await dynamoDb.put(params).promise();

    return {
      statusCode: 201,
      event: JSON.stringify(eventItem),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Could not create event" }),
    };
  }
};
