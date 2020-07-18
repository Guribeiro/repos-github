import styled from 'styled-components';


export const Owner = styled.header`
	display: flex;
	flex-direction: column;
	align-items: center;

	a{

		display: flex;
		align-items: center;
		justify-content: space-between;

		text-decoration: none;

		color:#6159c1;

		svg{
			margin-right: 4px;
		}
	}

	img{
		width: 120px;
		border-radius: 50%;
		margin-top: 20px;
	}

	h1{
		font-size: 24px;
		margin-top: 10px;
	}

	p{
		margin-top: 5px;
		font-size: 14px;
		color: #666;
		text-align: center;
		line-height: 1.4;
		max-width: 400px;
	}
`;

export const Loading = styled.div`

	min-height: 100vh;

	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;


	h1{
		color: #fff;
		font-size: 36px;
	}
`;

export const LanguagesList = styled.ul`

	width: 100%;
	list-style: none;
	display: flex;
	justify-content: space-evenly;
	align-items: center;
	line-break: auto;

	padding: 6px 0;

	li{
		font-size: 10px;
		font-weight: 600;
		color: #222;
		padding: 4px 6px;
		cursor: default;
	}

`;

export const IssuesList = styled.ul`

	padding-top: 30px;
	margin-top: 18px;
	border-top: 1px solid #eee;

	li{
		display: flex;
		padding: 15px 10px;
		border: 1px solid #eee;
		border-radius: 4px;

		& + li{
			margin-top: 10px
		}

		img{
			width: 36px;
			height: 36px;
			border-radius: 50%;
			border: 2px solid #eee;
		}

		div{
			flex: 1;
			margin-left: 14px;

			strong{
				font-size: 16px;

				a{
					text-decoration: none;
					color: #333;
					transition: 0.3s;

					&:hover{
						color: #6159c1;
					}
				}
			}

			p{
				font-size: 12px;
				margin-top: 4px;

				a{
					text-decoration: none;
					color: #555;

					&:hover{
						color: #222;
					}
				}
			}
		}
	}

`;

export const Pagination = styled.section`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-top: 20px;

	button{
		border-radius: 50%;
		padding: 2px;

		&:disabled{
			opacity: 0.5;
			cursor: not-allowed;
		}
		svg{
			color: #6159c1;
			font-size: 26px;
		}
	}

	span{
		font-size: 12px;
		color: #555;
		-webkit-touch-callout: none;
		-webkit-user-select: none;
		-khtml-user-select: none;
		-moz-user-select: none;
		-ms-user-select: none;
	}
`;
