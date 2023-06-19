import { StateSchema } from 'app/providers/StoreProvider';

export const getAddCommentFormText = (state: StateSchema) => state.addCommentsForm?.text;
export const getAddCommentFormError = (state: StateSchema) => state.addCommentsForm?.error;
