import { CounterSchema } from 'entities/Counter';
import { UserScheme } from 'entities/User';
import { LoginSchema } from 'features/AuthByUsername';

export interface StateSchema {
    counter: CounterSchema;
    user: UserScheme;
    login: LoginSchema;
}
