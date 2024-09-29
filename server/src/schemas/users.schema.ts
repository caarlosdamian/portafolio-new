import { object, string, TypeOf } from 'zod';

export const createUserschema = object({
  body: object({
    username: string({
      required_error: 'First name is required',
    }),
    password: string({
      required_error: 'Password is required',
    }).min(6, 'Password is to shoord - should be min 6 chard'),
    email: string({
      required_error: 'Email is required',
    }).email('Not a valid email'),
  }),
});

export type CreateUserInput = TypeOf<typeof createUserschema>['body'];
