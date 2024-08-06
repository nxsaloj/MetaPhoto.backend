import { Context, APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";
import { getAllPhotos } from "../controllers/photo-controller";
export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const photos = await getAllPhotos();
  return {
    headers: {
      "Content-type": "application/json",
    },
    statusCode: 200,
    body: JSON.stringify(photos),
  };
};
