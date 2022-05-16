import { createContext, useState, useContext } from 'react';
import { useRouter } from 'next/router';

const AuthContext = createContext();
const { Provider } = AuthContext;
export const AuthProvider = ({ children }) => {
	const router = useRouter();
	const [authState, setAuthState] = useState({
		token: ''
	});

	const setUserAuthInfo = (tokenData) => {
		const token = localStorage.setItem('token', tokenData);
		setAuthState({ token });
	};

	// check if user is authenticated or not
	const isUserAuthenticated = () => {
		!localStorage.getItem('token') && router.push('/');
	};

	return (
		<Provider
			value={{
				authState,
				setUserAuthInfo,
				isUserAuthenticated
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
