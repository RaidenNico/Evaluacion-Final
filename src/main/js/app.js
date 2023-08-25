const React = require('react');
const ReactDOM = require('react-dom');
const {createBrowserRouter, RouterProvider} = require('react-router-dom');

const HomePage = require('./pages/home');
const VerUtiltoPage = require('./pages/ver-util');
const NuevoUtilPage = require('./pages/nuevo-util');
const EditarUtilPage = require('./pages/editar-util');



const router = createBrowserRouter([
	{ path: '/', element: <HomePage /> },
	{ path: '/ver-util/:id', element: <VerUtiltoPage /> },
	{ path: '/nuevo-util', element: <NuevoUtilPage /> },
	{ path: '/editar-util/:id', element: <EditarUtilPage /> },
	
])


ReactDOM.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
	document.getElementById('react'))
