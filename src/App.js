import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "routes/Routing";
import GlobalStyles from "styles/global";
import { ThemeProvider } from "styled-components";
import theme from "styles/theme";
import { QueryClient, QueryClientProvider } from "react-query";
import AuthProvider from "context/auth.ctx";
import ChatDataContextProvider from "context/chatData.ctx";
import ChatListProvider from "context/chatList.ctx";

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<AuthProvider>
				<ThemeProvider theme={theme}>
					<QueryClientProvider client={queryClient}>
						<ChatDataContextProvider>
							<ChatListProvider>
								<GlobalStyles />
								<RouterProvider router={router} />
							</ChatListProvider>
						</ChatDataContextProvider>
					</QueryClientProvider>
				</ThemeProvider>
			</AuthProvider>
		</>
	);
}

export default App;
