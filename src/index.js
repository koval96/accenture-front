import React, {useContext} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import {ApolloProvider, ApolloClient, InMemoryCache, from, HttpLink, createHttpLink} from "@apollo/client";
import {onError} from "@apollo/client/link/error";
import { setContext } from '@apollo/client/link/context';

// APOLLO CONFIGURATION
const errorLink = onError(({ graphQLErrors, networkError }) => {
    if (graphQLErrors) {
        console.log('graphQLErrors', graphQLErrors);
    }
    if (networkError) {
        console.log('networkError', networkError);
    }
});

const link = from([
    errorLink,
    new HttpLink({ uri: 'http://localhost:8000/graphql', credentials: 'include' }) // http://localhost:8000/graphql // https://lycnet-api.herokuapp.com/graphql
])


const authLink = setContext((_, { headers }) => {
    const token = localStorage.getItem('accessToken');
    return {
        headers: {
            ...headers,
            authorization: token ? `JWT ${token}` : "",
        }
    }
});

const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: authLink.concat(link),
})

// End Apollo


ReactDOM.render(
    <ApolloProvider client={client}>
        {" "}
        <React.StrictMode>
            <App />
        </React.StrictMode>
    </ApolloProvider>,
    document.getElementById('root')
);

reportWebVitals();