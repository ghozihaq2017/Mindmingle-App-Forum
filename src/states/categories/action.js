import getCategory from '../../utils/getCategory';

const ActionType = {
  RECEIVE_CATEGORIES: 'RECEIVE_CATEGORIES',
};

function receiveCategoriesActionCreator(threads) {
  return {
    type: ActionType.RECEIVE_CATEGORIES,
    payload: {
      categories: getCategory(threads),
    },
  };
}

export { ActionType, receiveCategoriesActionCreator };
