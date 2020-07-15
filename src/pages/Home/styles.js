import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`

	max-width: 700px;
	background: #fff;
	border-radius: 4px;

	box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);

	margin: 80px auto;
	padding: 30px;

	h1{
		display: flex;
		align-items: center;
		font-size: 20px;

		svg{
			margin-right: 10px;
		}
	}
`;

export const Form = styled.form`
	margin-top: 30px;
	display: flex;
	flex-direction: row;

	input{
		flex: 1;
		border: 1px solid #eee;
		padding: 10px 15px;
		border-radius: 4px;
		font-size: 16px;
	}

`;

export const SubmitButton = styled.button.attrs(props => ({
	type: 'submit',
	disabled: props.loading
}))`

	background: #7159c1;
	border: none;
	padding: 0 15px;
	margin-left: 10px;
	border-radius: 4px;

	display: flex;
	justify-content: center;
	align-items: center;

	&[disabled]{
		cursor: not-allowed;
		opacity: 0.6;
	}

	svg{
		color: #fff;
	}

	${props => props.loading && css`
		svg{
		animation: ${rotate} 2s linear infinite
		}
	`}
`;

const rotate = keyframes`

	from{
		transform: rotate(0deg)
	}
	to{
		transform: rotate(360deg)
	}
`;