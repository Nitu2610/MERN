import { Box, Button, Container, Heading, Input } from "@chakra-ui/react";
import React, { useReducer } from "react";


const initialState = {
  email: "",
  password: "",
  loading: false,
  loginError: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_EMAIL":
      return { ...state, email: action.payload };

    case "UPDATE_PASSWORD":
      return { ...state, password: action.payload };

      case "LOGGEDIN":
      return { ...state, loading: !state.loading };

       case "RESET":
      return { ...state, ...action.payload };
      
    default:
      return state;
  }
};



export const Login = () => {
  //  const reducer=LoginReducerFn;
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleSubmit=()=>{
    dispatch({type:"LOGGEDIN"});
     console.log(state.loading)
  }

  return (
    <>
      <Container>
        <Heading> Login </Heading>

        <Box px="2">
          <Input
            placeholder="Enter the email"
            type="email"
            value={state.email}
            onChange={(e) => {
              dispatch({
              type: "UPDATE_EMAIL",
              payload: e.target.value,
            }) 
            }
          }
          />

           <Input
            placeholder="Enter the password"
            type="password"
            value={state.password}
            onChange={(e) => {
              dispatch({
              type: "UPDATE_PASSWORD",
              payload: e.target.value,
            }) 
            }
          }
          />

          <Button onClick={handleSubmit}> Submit </Button>
           <Button
           onClick={(e)=>{
            e.preventDefault();
            dispatch({type:"RESET",payload:initialState})
           }}
           > Reset </Button>
        </Box>
      </Container>
    </>
  );
};
