import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider} from 'react-apollo';

//ReactDOM.render(<App />, document.getElementById('root'));
//registerServiceWorker();

const client = new ApolloClient({
  link: new HttpLink({ uri:'https://api.graph.cool/relay/v1/cj9xct9sy007x01529279zz0h' }),
  cache: new InMemoryCache()
});


ReactDOM.render(
	<ApolloProvider client ={client}>
		<App />
	</ApolloProvider>
	, document.getElementById('root')
);
registerServiceWorker();