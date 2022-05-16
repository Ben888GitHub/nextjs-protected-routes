import { createContext, useState, useContext, useEffect } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();
const { Provider } = AuthContext;
export const AuthProvider = ({ children }) => {
	const router = useRouter();
	const [authState, setAuthState] = useState({
		token: ''
	});
	const [currentToken, setCurrentToken] = useState('');

	const setUserAuthInfo = (tokenData) => {
		const token = localStorage.setItem('token', tokenData);
		setAuthState({ token });
	};

	// check if user is authenticated or not
	const isUserAuthenticated = () => {
		!localStorage.getItem('token') && router.push('/');
	};

	useEffect(() => {
		setCurrentToken(localStorage.token !== 'undefined' && localStorage.token);
	}, [authState.token]);

	return (
		<Provider
			value={{
				authState,
				setUserAuthInfo,
				isUserAuthenticated,
				currentToken
			}}
		>
			{children}
		</Provider>
	);
};

// export { AuthContext };
export const useAuth = () => {
	return useContext(AuthContext);
};
