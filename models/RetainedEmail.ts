import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IRetainedEmail extends Document {
  email: string;
}

const RetainedEmailSchema = new Schema<IRetainedEmail>(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

const RetainedEmail: Model<IRetainedEmail> =
  mongoose.models.RetainedEmail || mongoose.model<IRetainedEmail>('RetainedEmail', RetainedEmailSchema);

export default RetainedEmail;
