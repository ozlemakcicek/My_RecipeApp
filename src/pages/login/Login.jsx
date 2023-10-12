import React from "react";
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyle";

import mealSvg from "../../assets/meal.svg";
// import mealSvg from "../../assets/detail.svg";
// import mealSvg from "../../assets/assortment-pieces-cake.jpg";



const Login = () => {

  return (

    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />

        <Header>Restaurant Lecker</Header>

        <StyledForm>

          <StyledInput type="text" placeholder="username" required />
          <StyledInput type="password" placeholder="password" required />
          <StyledButton type="submit">Login</StyledButton>
        
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
