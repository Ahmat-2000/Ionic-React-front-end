import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
// for amplify configuration
import { Amplify } from 'aws-amplify';
import awsExports from './aws-exports';
Amplify.configure(awsExports);

const container = document.getElementById('root');
const root = createRoot(container!);
/* 
const client = new ApolloClient({
  uri: 'http://localhost:3000/',
  cache: new InMemoryCache(),
}); */


root.render(
  <React.StrictMode>
   { /*<ApolloProvider client={client}>*/}
      <App />
    {/* </ApolloProvider> */}
  </React.StrictMode>
);