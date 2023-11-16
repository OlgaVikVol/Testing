import { MemoryRouter } from "react-router-dom";
import { createReduxStore } from "../../store/store";
import { Provider } from "react-redux";
import AppRouter from "../../router/AppRouter"

export const renderTestApp = (component, options) => {
	const store = createReduxStore(options?.initialState);

    return (
				
        <Provider store={store}>
            <MemoryRouter initialEntries={[options?.route]}>
							<AppRouter />
							{component}
						</MemoryRouter>
        </Provider>
    )
}
