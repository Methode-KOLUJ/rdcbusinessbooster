import mongoose, { Document, Model, Schema } from 'mongoose';

export interface IInscription extends Document {
  nom: string;
  email: string;
  telephone: string;
  province: string;
  certifie: boolean;
  traitee?: boolean;
  createdAt: Date;
}

const InscriptionSchema = new Schema<IInscription>(
  {
    nom: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    telephone: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    certifie: {
      type: Boolean,
      required: true,
    },
    traitee: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

const Inscription: Model<IInscription> =
  mongoose.models.Inscription || mongoose.model<IInscription>('Inscription', InscriptionSchema);

export default Inscription;
