const initialState = {
  dataUser: [],
  listUser: [],
  status: [],
  getById: [],
  other: [],
  isLoading: false,
  isFulfielled: false,
  isRejected: false,
};

const user = (state = initialState, action) => {
  // console.log(action);

  switch (action.type) {
    case 'POST_LOGIN_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case 'POST_LOGIN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'POST_LOGIN_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        dataUser: action.payload.data,
      };
    case 'POST_REGISTER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case 'POST_REGISTER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'POST_REGISTER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        other: action.payload.data,
      };
    case 'GET_ALL_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case 'GET_ALL_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_ALL_USER_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        listUser: action.payload.data,
      };
    case 'GET_BY_ID_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case 'GET_BY_ID_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_BY_ID_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        getById: action.payload.data,
      };
    case 'POST_EDIT_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case 'POST_EDIT_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'POST_EDIT_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        other: action.payload.data,
      };
    case 'GET_TOKEN_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case 'GET_TOKEN_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'GET_TOKEN_FULFILLED':
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        status: action.payload.data,
      };
    case 'DELETE_USER_PENDING':
      return {
        ...state,
        isLoading: true,
        isRejected: false,
        isFulfielled: false,
      };
    case 'DELETE_USER_REJECTED':
      return {
        ...state,
        isLoading: false,
        isRejected: true,
      };
    case 'DELETE_USER_FULFILLED':
      const dataAfterDelete = state.listUser.result.filter(
        item => item.userId != action.payload.data.result.id,
      );
      const obj = {
        error: null,
        result: dataAfterDelete,
      };
      return {
        ...state,
        isLoading: false,
        isFulfielled: true,
        listUser: obj,
      };

    // case 'LOGOUT':
    //   return {
    //     ...state,
    //     dataUser: [],
    //   };

    default:
      return state;
  }
};
export default user;
