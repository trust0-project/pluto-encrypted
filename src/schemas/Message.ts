import type { Domain } from "@input-output-hk/atala-prism-wallet-sdk";
import type { Schema } from "../types";

export type MessageSchemaType = Domain.Message;

/**
 * MessageSchema
 */
const MessageSchema: Schema<MessageSchemaType> = {
  version: 0,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 60,
    },
    body: {
      type: "string",
    },
    piuri: {
      type: "string",
    },
    attachments: {
      type: "array",
    },
    extraHeaders: {
      type: "array",
    },
    createdTime: {
      type: "string",
    },
    expiresTimePlus: {
      type: "string",
    },
    ack: {
      type: "array",
    },
    direction: {
      type: "number",
    },
    from: {
      type: "string",
    },
    to: {
      type: "string",
    },
    thid: {
      type: "string",
    },
    fromPrior: {
      type: "string",
    },
    pthid: {
      type: "string",
    },
  },
  encrypted: ["thid", "attachments", "body"],
  required: ["id"],
};

export default MessageSchema;