import React, { useState, useEffect } from 'react';
import api from '../../services/api';

import { Link } from 'react-router-dom';

import { FiArrowLeft } from 'react-icons/fi'

import Container from '../../components/Container';
import { Owner, Loading, LanguagesList, IssuesList } from './styles';

export default function Repository({ match }) {

	const [repository, setRepository] = useState({})
	const [issues, setIssues] = useState([]);
	const [languages, setLanguages] = useState({});
	const [loading, setLoading] = useState(true)

	useEffect(() => {

		async function handleRequests() {

			const repoName = decodeURIComponent(match.params.repository)

			const [repositoryData, issuesData, languagesData] = await Promise.all([
				api.get(`repos/${repoName}`),
				api.get(`repos/${repoName}/issues`, {
					params: {
						state: 'open',
						per_page: 5
					},
				}),
				api.get(`repos/${repoName}/languages`)
			]);

			setRepository(repositoryData.data);
			setIssues(issuesData.data);
			setLanguages(Object.keys(languagesData.data))
			setLoading(false)
		}

		handleRequests();

	}, [match.params.repository])


	if (loading) {
		return (
			<Loading>
				<h1>Carregando</h1>
			</Loading>
		)
	}

	return (
		<Container>
			<Owner>
				<Link to='/'>
					<FiArrowLeft />
					Voltar
				</Link>
				<img src={repository.owner.avatar_url} alt={repository.owner.login} />
				<h1>{repository.name}</h1>
				<p>{repository.description}</p>

				<LanguagesList>
					{languages.map(language => (
						<li key={language}>{language}</li>
					))}
				</LanguagesList>
			</Owner>

			<IssuesList>
				{issues.map(issue => (
					<li key={String(issue.id)}>
						<img src={issue.user.avatar_url} alt={issue.user.html_url} />
						<div>
							<strong>
								<a href={issue.html_url}>{issue.title}</a>
							</strong>
							<p>
								<a href={issue.user.html_url}>{issue.user.login}</a>
							</p>
						</div>
					</li>
				))}
			</IssuesList>
		</Container>
	)
}
