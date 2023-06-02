import { Link } from "react-router-dom";
import { BackButton } from "../../../Components/BackButton";
import {
	CodeVerificationContainer,
	CodeVerificationContent,
	CodeVerificationTitle,
	CodeWrraper,
	ErrorText,
	MainCointainer,
} from "./styles";
import { BoxEmpty } from "../../../Components/BoxEmpty";
import VerificationIcon from "../../../Assets/verification.svg";
import { InputBoxValidation } from "../../../Components/InputCodeValidation";
import { Button } from "../../../Components/Button";
import { ContainerButton } from "../RecoverPassword/styles";
import { ChangeEvent, useEffect, useState } from "react";
import axios from "axios";
import { useTypeCall } from "../../../Assets/Contexts";

// interface VerifyCodeProps {
// 	matricula: string;
// 	codigo: string;
// }

export const CodeVerification = () => {
	const [matricula, setMatricula] = useState("");
	const [codigo, setCodigo] = useState("");

	const { changeCode } = useTypeCall();

	const handleCodeChange = (event: ChangeEvent<HTMLInputElement>) => {
		const code = event.target.value;
		setCodigo(code);
	};

	useEffect(() => {
		const savedMatricula = localStorage.getItem("matricula");
		if (savedMatricula) {
			setMatricula(savedMatricula);
		}
	}, []);

	useEffect(() => {
		changeCode(codigo);
	}, [codigo, changeCode]);

	const verifyCode = () => {
		axios
			.get(
				`/FluxoRecuperarSenha/verificar-codigo/${localStorage.getItem(
					"matricula"
				)}/${JSON.stringify(codigo)}`
			)
			.then(() => {
				window.location.replace("/Login");
			})
			.catch(() => {
				console.error("Código incorreto!");
			});

			console.log(codigo)
	};

	return (
		<MainCointainer>
			{isLoading && <LoadingScreen />}
			<Link to="/login">
				<BackButton
					actionText={"Login"}
					color="#AA0E27"
					fontWeight={"600"}
				/>
			</Link>
			<BoxEmpty
				title="Dados confirmados!"
				icon={VerificationIcon}
				color="#68A439"
				fontSize="16px"
			/>
			<CodeVerificationContent>
				<CodeVerificationTitle>
					Digite abaixo o código enviado ao seu email!
				</CodeVerificationTitle>
				<InputBoxValidation onChange={handleCodeChange} value={codigo}/>
			</CodeVerificationContent>
			<ContainerButton>
				<Button
					text="Voltar"
					bg="transparent"
					color="#635F60"
					colorBorder="#635F60"
					nextPage="/RecuperarSenha"
				/>
				<Button
					text="Próximo"
					onClick={verifyCode}
				/>
			</ContainerButton>
		</MainCointainer>
	);
};
