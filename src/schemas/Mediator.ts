import { Schema, MediarorSchemaType } from "../types";

const MediatorSchema: Schema<MediarorSchemaType> = {
  version: 0,
  primaryKey: "id",
  type: "object",
  properties: {
    id: {
      type: "string",
      maxLength: 60,
    },
    mediatorDID: {
      type: "string",
    },
    hostDID: {
      type: "string",
    },
    routingDID: {
      type: "string",
    },
  },
  encrypted: [],
  required: ["id", "mediatorDID"],
};

export default MediatorSchema;