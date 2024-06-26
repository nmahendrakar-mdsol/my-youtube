import Body from './components/Body';
import Header from './components/Header';
import './App.css';
import { Provider } from 'react-redux';
import store from './components/utilities/store';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainContainer from './components/MainContainer';
import Watchpage from './components/Watchpage';

const appRouter = createBrowserRouter([
	{
		path: '/',
		element: <Body />,
		children: [
			{
				path: '/',
				element: <MainContainer />,
			},
			{
				path: 'watch',
				element: <Watchpage />,
			},
		],
	},
]);
function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<Header />
				<RouterProvider router={appRouter} />
			</div>
		</Provider>
	);
}

export default App;
