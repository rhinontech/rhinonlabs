import mongoose, { Schema, Model, Document } from 'mongoose';

export interface ILead extends Document {
    name: string;
    email: string;
    phone?: string;
    message: string;
    service?: string;
    company?: string;
    createdAt: Date;
}

const LeadSchema: Schema<ILead> = new Schema({
    name: {
        type: String,
        required: [true, 'Please provide a name'],
    },
    email: {
        type: String,
        required: [true, 'Please provide an email'],
    },
    phone: {
        type: String,
    },
    message: {
        type: String,
        required: [true, 'Please provide a message'],
    },
    service: {
        type: String,
    },
    company: {
        type: String,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Lead: Model<ILead> = mongoose.models.Lead || mongoose.model<ILead>('Lead', LeadSchema);

export default Lead;
