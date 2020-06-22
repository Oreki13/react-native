import Axios from 'axios';
// Axios.defaults.headers.common["authorization"] = "soul";

export const login = body => {
  return {
    type: 'POST_LOGIN',
    payload: Axios.post(
      `http://192.168.8.101:8080/auth/login
    `,
      body,
      {
        headers: {authorization: 'soul'},
      },
    ),
  };
};

export const register = body => {
  return {
    type: 'POST_REGISTER',
    payload: Axios.post(
      `http://192.168.8.101:8080/auth/register
    `,
      body,
      {
        headers: {authorization: 'soul'},
      },
    ),
  };
};

export const GetAll = () => {
  return {
    type: 'GET_ALL_USER',
    payload: Axios.get(`http://192.168.8.101:8080/user/getAll`, {
      headers: {authorization: 'soul'},
    }),
  };
};

export const GetById = id => {
  return {
    type: 'GET_BY_ID',
    payload: Axios.get(`http://192.168.8.101:8080/auth/getus/${id}`, {
      headers: {authorization: 'soul'},
    }),
  };
};

export const updateUser = (id, body) => {
  return {
    type: 'POST_EDIT',
    payload: Axios.post(
      `http://192.168.8.101:8080/user/updateUser/${id}
    `,
      body,
      {
        headers: {authorization: 'soul'},
      },
    ),
  };
};
export const checkToken = (token, id) => {
  return {
    type: 'GET_TOKEN',
    payload: Axios.get(
      `http://192.168.8.101:8080/auth/checkTok/${token}`,

      {
        headers: {'x-control-user': id, authorization: 'soul'},
      },
    ),
  };
};

// export const deleteUser = id => {
//     return {
//         type: "DELETE_USER",
//         payload: Axios.post(
//             `http://192.168.8.101:8080/user/deleted/${id}`,
//             {

//                 headers: { 'authorization': 'soul' }
//             }

//         )
//     };
// };

export const deleteUser = id => {
  return {
    type: 'DELETE_USER',
    payload: Axios.get(`http://192.168.8.101:8080/user/deleted/${id}`, {
      headers: {authorization: 'soul'},
    }),
  };
};
export const logoutUser = () => {
  return {
    type: 'LOGOUT',
  };
};
