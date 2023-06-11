import { StateSchema } from 'app/providers/StoreProvider';

export const getAuthMounted = (state: StateSchema) => state.user._mounted;
