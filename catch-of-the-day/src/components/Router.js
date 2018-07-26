import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StorePicker from './../StorePicker';
import App from './App';
import NotFound from './NotFound';

const Router = () => (
	<BrowserRouter>
		<Switch>
			<Route exact="/" component={StorePicker} />
			<Route path="/store/:storeId" component={App} />
			<Route path="/store/:storeId" component={NotFound} />
		</Switch>
	</BrowserRouter>
);