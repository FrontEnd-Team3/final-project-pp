import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "routes/Routing";
import GlobalStyles from "styles/global";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "context/auth.ctx";

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<AuthProvider>
				<ThemeProvider theme={theme}>
					<QueryClientProvider client={queryClient}>
						<GlobalStyles />
						<RouterProvider router={router} />
					</QueryClientProvider>
				</ThemeProvider>
			</AuthProvider>
		</>
	);
}

export default App;
