import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const pageStyle: React.CSSProperties = {
	height: "100vh",
	width: "100vw",
};

const pageOneStyles: React.CSSProperties = {
	background: "blue",
};
const pageTwoStyles: React.CSSProperties = {
	background: "red",
};

const App = () => {
	return (
		<Router>
			<div>
				<Link to="/">Page 1</Link>
				<Link to="/page2">Page 2</Link>
				<Link to="/page22">Page 22</Link>
			</div>
			<Switch>
				<Route path="/page2">
					<Page styles={{ ...pageTwoStyles, ...pageStyle }}>page 2</Page>
				</Route>
				<Route path="/">
					<Page styles={{ ...pageOneStyles, ...pageStyle }}>page 1</Page>
				</Route>
				<Route path="/page22">
					<Page styles={{ ...pageTwoStyles, ...pageStyle }}>page 22</Page>
				</Route>
			</Switch>
		</Router>
	);
};

export default App;

interface PageProps {
	styles: React.CSSProperties;
}

const Page: React.FC<PageProps> = ({ children, styles }) => {
	return <div style={styles}>{children}</div>;
};
