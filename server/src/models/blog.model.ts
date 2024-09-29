import mongoose, { SchemaType } from 'mongoose';
import { UserModel } from './user.model';
import { Schema } from 'zod';

const Blog = new mongoose.Schema(
  {
    title: {
      type: String,
      require,
    },

    content: {
      type: String,
      require,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: 'User',
      require,
    },
  },
  {
    timestamps: { createdAt: true },
  }
);

export const BlogModel = mongoose.model('Blog', Blog);
