const { DynamoDBClient, GetItemCommand } = require("@aws-sdk/client-dynamodb");

const ddbClient = new DynamoDBClient({
  region: "eu-west-2",
});

const ID = "eni-09e1507c386dbd36a";
const TableName = "list";

const Get = async (TableName, ID) => {
  const params = {
    TableName: TableName,
    Key: {
      ID: { S: ID },
    },
  };

  try {
    const data = await ddbClient.send(new GetItemCommand(params));
    // console.log(data.Item.IP.S);
    return data.Item.IP.S;
  } catch (err) {
    console.log(err);
  }
};

let output = Get(TableName, ID);

console.log(output);
