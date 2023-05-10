import { CounterSchema } from 'entities/Counter';
import { UserScheme } from 'entities/User';

export interface StateSchema {
    counter: CounterSchema;
    user: UserScheme;
}
