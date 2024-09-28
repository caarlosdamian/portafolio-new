import mongoose from 'mongoose';

const User = new mongoose.Schema(
  {
    username: {
      type: String,
      require,
    },

    email: {
      type: String,
      require,
    },
    password: {
      type: String,
      require,
    },
  },
  {
    timestamps: { createdAt: true },
  }
);

export const UserModel = mongoose.model('User', User);
