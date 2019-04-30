import React from "react";
import { Switch, Route } from "react-router-dom";
import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

import Header from "./Header";
import SearchForm from './SearchForm';
import Error404 from "./Error404";

const GlobalStyles = createGlobalStyle`
body {
  @import url('https://fonts.googleapis.com/css?family=Spicy+Rice');
  font-family: 'Spicy Rice', cursive;
  animation: colorchange 50s;
  -webkit-animation: colorchange 20s infinite;
  @keyframes colorchange {
    0% {
      background: #fec5e2;
    }
    50% {
      background: #23d7ef;
    }
    75% {
      background: tomato;
    }
    100% {
      background: #21bc66;
    }
  }
  @-webkit-keyframes colorchange /* Safari and Chrome - necessary duplicate */ {
    0% {
      background: #fec5e2;
    }
    50% {
      background: #23d7ef;
    }
    75% {
      background: tomato;
    }
    100% {
      background: #21bc66;
    }
  }
}

`;

const Wrapper = styled.div`
  padding: 2em;
  max-width: 100%;
  display: flex;
  margin-top: 30px;
  flex-direction: column;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <GlobalStyles />
      <Header />
      <h2>Enter What You Feel Like...See What You Get in Gifs!</h2>
      <SearchForm />
      <Switch>
        <Route path="/error404" render={() => <Error404 />} />
      </Switch>
    </Wrapper>
  );
}

export default App;
