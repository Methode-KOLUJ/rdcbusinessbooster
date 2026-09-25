import mongoose, { Document, Model, Schema } from 'mongoose';

export interface INewsletterLog extends Document {
  subject: string;
  recipientCount: number;
  sentAt: Date;
}

const NewsletterLogSchema = new Schema<INewsletterLog>(
  {
    subject: {
      type: String,
      required: true,
    },
    recipientCount: {
      type: Number,
      required: true,
    },
    sentAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const NewsletterLog: Model<INewsletterLog> =
  mongoose.models.NewsletterLog || mongoose.model<INewsletterLog>('NewsletterLog', NewsletterLogSchema);

export default NewsletterLog;
