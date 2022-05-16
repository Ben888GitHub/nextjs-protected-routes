import { useEffect, useState } from 'react';

import Head from 'next/head';
import { useAuth } from '../context/auth-context';

function Dashboard() {
	const { isUserAuthenticated } = useAuth();
	const [currentToken, setCurrentToken] = useState('');

	useEffect(() => {
		isUserAuthenticated();
		setCurrentToken(localStorage.token !== 'undefined' && localStorage.token);
	}, []);

	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>

			<div>
				<h2>Dashboard</h2>
				<h3>Hello, {currentToken && currentToken}</h3>
			</div>
		</>
	);
}

export default Dashboard;
