import { Context, APIGatewayProxyResult, APIGatewayEvent } from "aws-lambda";
import {
  getAllPhotos,
  getFilteredPhotos,
} from "../controllers/photo-controller";
import { MapParamsToPagination, ParamsToFilter } from "../transformers";
export const handler = async (
  event: APIGatewayEvent,
  context: Context
): Promise<APIGatewayProxyResult> => {
  const params = event.queryStringParameters;
  const photos = await getFilteredPhotos(
    MapParamsToPagination(params),
    ParamsToFilter(params)
  );

  return {
    headers: {
      "Content-type": "application/json",
    },
    statusCode: 200,
    body: JSON.stringify(photos),
  };
};
