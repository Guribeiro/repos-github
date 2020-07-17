import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom';

import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import Container from '../../components/Container';
import { Form, SubmitButton, List } from './styles';


import api from '../../services/api';



export default function Home() {

	const [repo, setRepo] = useState('');
	const [repositorios, setRepositorios] = useState([]);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		const storageRepos = localStorage.getItem('@projeto-repos/repos');

		if (storageRepos) {
			setRepositorios(JSON.parse(storageRepos));
		}

	}, [])

	useEffect(() => {
		localStorage.setItem('@projeto-repos/repos', JSON.stringify(repositorios));
	}, [repositorios])


	async function handleSubmit(e) {
		e.preventDefault();

		setLoading(true);

		const response = await api.get(`repos/${repo}`);

		const { status, data } = response;

		if (status === 200) {
			const { full_name } = data;

			const repositorio = {
				full_name,
			}

			setRepositorios([...repositorios, repositorio]);
			setRepo('');
		}
		setLoading(false)
	}

	return (
		<Container>
			<h1>
				<FaGithubAlt />
				Repositórios
			</h1>

			<Form onSubmit={handleSubmit}>
				<input
					type="text"
					placeholder='Adicionar repositório'
					value={repo}
					onChange={(e) => setRepo(e.target.value)}
				/>
				<SubmitButton loading={loading}>
					{loading ? <FaSpinner /> : <FaPlus />}
				</SubmitButton>
			</Form>

			<List>
				{repositorios.map(repository => (
					<li key={repository.full_name}>
						<span>
							{repository.full_name}
						</span>
						<Link to={`/repository/${encodeURIComponent(repository.full_name)}`}>Detalhes</Link>
					</li>
				))}
			</List>
		</Container>
	)
}
