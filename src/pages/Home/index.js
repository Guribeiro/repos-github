import React, { useState } from 'react';

import { Container, Form, SubmitButton } from './styles';
import { FaGithubAlt, FaPlus, FaSpinner } from 'react-icons/fa';

import api from '../../services/api';



export default function Home() {

	const [repo, setRepo] = useState('');
	const [repositorios, setRepositorios] = useState([]);
	const [loading, setLoading] = useState(false);

	async function handleSubmit(e) {
		e.preventDefault();

		setLoading(true);

		const response = await api.get(`repos/${repo}`);

		const { status, data } = response;

		if (status === 200) {
			const { full_name, language, html_url } = data;

			const repositorio = {
				full_name,
				language,
				html_url,
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
		</Container>
	)
}
