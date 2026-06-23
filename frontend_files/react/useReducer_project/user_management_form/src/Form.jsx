import {
  Container,
  Heading,
  Button,
  Field,
  Fieldset,
  For,
  Input,
  NativeSelect,
  Stack,
  GridItem,
} from "@chakra-ui/react";
import React, { useEffect, useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  loading: false,
  error: null,
  users: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "UPDATE__NAME":
      return { ...state, name: action.payload };
    case "UPDATE__EMAIL":
      return { ...state, email: action.payload };
    case "ADD_USER":
      return { ...state, users: [...state.users,action.payload] , name:"", email:"" }; // The mistake I did, state.users.push(action.payload). !!!
    case "DELETE_USER":
      return {
        ...state,
        users: state.users.filter(
          ({ name }) => name.toLowerCase() !== action.payload.toLowerCase(),
        ),
      };
    case "RESET_USER":
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

export const Form = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Container
        bg={"red.focusRing"}
        border={"3px solid brown"}
        borderRadius={"15px"}
        m={"auto"}
        padding={"50px"}
      >
        <Heading
          textAlign={"center"}
          pb={"50px"}
          fontSize={"36px"}
          fontWeight={"bold"}
        >
          {" "}
          User Details
        </Heading>

        <Container
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          boxShadow="
    0 0 0 2px rgba(6, 24, 44, 0.4),
    0 4px 6px -1px rgba(6, 24, 44, 0.65),
    inset 0 1px 0 rgba(255, 255, 255, 0.08)
  "
          borderRadius={"md"}
          p={"20px"}
        >
          <Fieldset.Root size="lg" maxW="md">
            <Stack>
              <Fieldset.Legend>Contact details</Fieldset.Legend>
              <Fieldset.HelperText>
                Please provide your contact details below.
              </Fieldset.HelperText>
            </Stack>

            <Fieldset.Content>
              <Field.Root>
                <Field.Label>Name</Field.Label>
                <Input
                  name="name"
                  value={state.name}
                  onChange={(e)=> dispatch({
                    type: "UPDATE__NAME",
                    payload: e.target.value,
                  })}
                />
              </Field.Root>

              <Field.Root>
                <Field.Label>Email address</Field.Label>
                <Input
                  name="email"
                  type="email"
                  value={state.email}
                  onChange={(e)=>dispatch({
                    type: "UPDATE__EMAIL",
                    payload: e.target.value,
                  })}
                />
              </Field.Root>
            </Fieldset.Content>

            <Button type="submit" alignSelf="flex-start" 
            onClick={ ()=> dispatch(
              {type:"ADD_USER", 
              payload:{
                name:state.name, 
                email:state.email}
                }) }>
              Submit
            </Button>
            

             <Button type="submit" alignSelf="flex-end" onClick={()=>dispatch({type:"RESET_USER", payload:initialState})} >
              Reset
            </Button>
          </Fieldset.Root>
        </Container>

      </Container>

      <Container>
            <Heading> User Details</Heading>
             <ul>
          {state.users.map( (item,i)=> <li key={i}>
            {item.name}
             <Button type="submit" alignSelf="flex-right" marginLeft={'30px'} onClick={()=>dispatch({type:"DELETE_USER", payload:item.name})} > Delete </Button>
             </li>) }
        </ul>
      </Container>
      
    </>
  );
};
