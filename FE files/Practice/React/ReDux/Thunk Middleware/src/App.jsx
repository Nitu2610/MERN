import { useEffect } from "react";
import { Provider, useDispatch, useSelector } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import "./App.css";

// Action Types
const FETCH_USER_REQUEST = "FETCH_USER_REQUEST";
const FETCH_USER_SUCCESS = "FETCH_USER_SUCCESS";
const FETCH_USER_FAILURE = "FETCH_USER_FAILURE";

// Action Creator
const fetchUserRequest = () => ({
  type: FETCH_USER_REQUEST,
});
const fetchUserSuccess = (userData) => ({
  type: FETCH_USER_SUCCESS,
  payload: userData,
});
const fetchUserFailure = (error) => ({
  type: FETCH_USER_FAILURE,
  payload: error,
});

const fetchUser = () => {
  return async function (dispatch) {
    dispatch(fetchUserRequest());
    try {
      let res = await fetch("https://reqres.in/api/users/3", {
        headers: { "x-api-key": "reqres-free-v1" },
      });
      let data = await res.json();
      setTimeout(() => {
        dispatch(fetchUserSuccess(data.data));
      }, 2000);
    } catch (error) {
      dispatch(fetchUserFailure(error));
    }
  };
};

// Initial State
const initialState = {
  user: null,
  loading: false,
  error: null,
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return { ...state, loading: true };
    case FETCH_USER_SUCCESS:
      return { ...state, loading: false, user: action.payload };
    case FETCH_USER_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

// Create Store
const reduxStore = createStore(reducer, applyMiddleware(thunk));

// User Card Component
function UserCard({ user }) {
  return (
    <div className="card">
      <img
        src={user.avatar}
        alt={`${user.first_name} ${user.last_name}`}
        className="avatar"
      />
      <h2 className="name">
        {user.first_name} {user.last_name}
      </h2>
      <p className="email">{user.email}</p>
    </div>
  );
}

// Container Component
function UserCardContainer() {
  const { user, loading, error } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  if (loading) return <div className="loading"> Loading...</div>;
  if (error) return <div className="error"> Error: {error}</div>;
  if (!user) return null;

  return <UserCard user={user} />;
}

// App Component
export const App = () => {
  return (
    <Provider store={reduxStore}>
      <UserCardContainer />
    </Provider>
  );
};
