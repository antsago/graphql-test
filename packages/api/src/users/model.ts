import { model, Schema, Document } from "mongoose"
import { User } from "@mernstack/shared"

export type UserModelType = User & Document

const UserSchema: Schema = new Schema(
  {
    // public id
    id: {
      type: String,
      require: true,
      unique: true,
    },
    email: String,
    givenName: String,
    familyName: String,
  },
  { timestamps: { createdAt: "created" } },
)

export default model<UserModelType>("User", UserSchema)
