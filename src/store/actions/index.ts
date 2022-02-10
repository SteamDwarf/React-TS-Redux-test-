import * as UserActionsCreator from './users';
import * as TodoActionsCreator from './todos';

export default {
    ...UserActionsCreator,
    ...TodoActionsCreator
}