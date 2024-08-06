import { Context, APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";
import { getPhotoEnrichedById } from "../controllers/photo-controller";
export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const data = event.pathParameters;
  if (!data)
    return {
      headers: {
        "Content-type": "application/json",
      },
      statusCode: 400,
      body: "The given params is empty",
    };
  const photos = await getPhotoEnrichedById(Number(data?.id));
  return {
    headers: {
      "Content-type": "application/json",
    },
    statusCode: 200,
    body: JSON.stringify(photos),
  };
};
