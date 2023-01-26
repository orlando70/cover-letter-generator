import { OpenAIStream } from "../../utils/stream";

export const config = {
  runtime: "edge",
};

export default async function handler(req, res) {
  const body = await req.json();

  const stream = await OpenAIStream(body);
  return new Response(stream);
}
