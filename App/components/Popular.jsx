import * as React from "react";
import { fetchPopularRepos } from "../utils/api";
import Table from "../components/Tables.jsx";

function LanguagesNav({ selected, onUpdateLanguage }) {
	const languages = ["All", "JavaScript", "Python", "C++", "HTML", "CSS"];

	return (
		<select
			onChange={(e) => onUpdateLanguage(e.target.value)}
			selected={selected}
		>
			{languages.map((lang) => (
				<option key={lang} value={lang}>
					{lang}
				</option>
			))}
		</select>
	);
}

export default class Popular extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			selectedLanguage: "All",
			repos: null,
		};

		this.updateLanguage = this.updateLanguage.bind(this);
	}

	updateLanguage(selectedLanguage) {
		this.setState({
			selectedLanguage,
			error: null,
		});
		fetchPopularRepos(selectedLanguage)
			.then((repos) =>
				this.setState({
					repos,
					error: null,
				})
			)
			.catch((error) => {
				console.warn("Error fetching repos: ", error);
				this.setState({
					error: "there was an error fetching from the repositories",
				});
			});
	}

	componentDidMount() {
		this.updateLanguage(this.state.selectedLanguage);
	}

	render() {
		const { selectedLanguage, repos, error } = this.state;
		return (
			<main>
				<div className="split"></div>
				<h1>POPULAR</h1>
				<LanguagesNav
					selected={selectedLanguage}
					onUpdateLanguage={this.updateLanguage}
				/>
				{error && <p className="text-center error">{error}</p>}
				{repos && <Table repos={repos} />}
			</main>
		);
	}
}
