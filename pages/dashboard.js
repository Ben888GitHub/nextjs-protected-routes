import { useEffect } from 'react';

import Head from 'next/head';
import { useAuth } from '../context/auth-context';

function Dashboard() {
	const { isUserAuthenticated } = useAuth();

	useEffect(() => {
		isUserAuthenticated();
	}, []);

	return (
		<>
			<Head>
				<title>Dashboard</title>
			</Head>
			<div>
				<h2>Dashboard</h2>
				<h3>Hello, {localStorage.token}</h3>
			</div>
		</>
	);
}

export default Dashboard;
