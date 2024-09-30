import passport from 'passport';
import { Strategy } from 'passport-local';
import { UserModel } from '../models/user.model';
import { comparePassword } from '../utils/helpers';

passport.serializeUser((user: any, done) => {
  done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
  try {
    const findUser = await UserModel.findById(id);
    if (!findUser) throw new Error('User not found');
    done(null, findUser);
  } catch (error) {
    done(error, null);
  }
});

export default passport.use(
  new Strategy(async (username, password, done) => {
    try {

      const findUser = await UserModel.findOne({ username });
      console.log({findUser})
      if (!findUser) throw new Error('User not found');
      const isCorrectPassword = await comparePassword(
        password,
        findUser.password as string
      );
      console.log({isCorrectPassword})
      if (!isCorrectPassword) throw new Error('Invalid Credentials');
      done(null, findUser);
    } catch (error) {
      console.log({error})
      done(error, false);
    }
  })
);
