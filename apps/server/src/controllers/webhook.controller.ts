import { Request, Response } from "express";

export async function handleWebhook(
  req: Request,
  res: Response,
) {
  console.log("Webhook received");

  console.log("Headers:", req.headers);

  console.log("Body:", req.body);

  return res.status(200).json({
    received: true,
  });
}