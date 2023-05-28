import { BackButton } from "../../../Components/BackButton";
import { BoxEmpty } from "../../../Components/BoxEmpty";
import { Button } from "../../../Components/Button";
import UserFound from "../../../Assets/Images/UserFound.png";
import EyeIcon from "../../Login/svg/eye.svg";
import EyeClosedIcon from "../../Login/svg/eyeClosed.svg";
import { InputLegend } from "../../../Components/FildestInput";
import { Link } from "react-router-dom";
import { useState } from "react";
import { InputContainer, NewPasswordContainer, Title } from "./styles";
import { Modal } from "../../../Components/Modal";
import { ContainerButton } from "../RecoverPassword/styles";

export const NewPassword = () => {
	const [passwordVisible, setPasswordVisible] = useState(false);
	const [newPasswordVisible, setNewPasswordVisible] = useState(false);
	const [openModal, setOpenModal] = useState(false);

	const verifyModal = () => {
		if (!openModal) {
			setOpenModal(true);

			setTimeout(() => {
				window.location.href = "/Login";
			}, 3000);
		}
	};

	return (
		<NewPasswordContainer>
			<Link to="/login">
				<BackButton
					actionText={"Login"}
					color="#AA0E27"
					fontWeight={"600"}
				/>
			</Link>
			<BoxEmpty
				// alt=""
				// src=""
				title="Identidade Confirmada!"
				color="#68A439"
				fontSize="16px"
				icon={UserFound}
			/>
			<InputContainer>
				<Title>Digite uma nova senha:</Title>
				<InputLegend
					legendText="Nova senha"
					inputType={passwordVisible ? "text" : "password"}
					maxLength={38}
					minLength={8}
					hasImage
					source={passwordVisible ? EyeClosedIcon : EyeIcon}
					// onChange={(e) => {
					// 	setFormState({
					// 		...formState,
					// 		senha: e.target?.value,
					// 	});
					// }}
					onClickImage={() => {
						setPasswordVisible(!passwordVisible);
					}}
					placeholder="Digite sua senha"
					height="56px"
					width="auto"
					border="1px solid #49454f"
				/>
				<InputLegend
					legendText="Confirmar senha"
					inputType={newPasswordVisible ? "text" : "password"}
					maxLength={38}
					minLength={8}
					hasImage
					source={newPasswordVisible ? EyeClosedIcon : EyeIcon}
					// onChange={(e) => {
					// 	setFormState({
					// 		...formState,
					// 		senha: e.target?.value,
					// 	});
					// }}
					onClickImage={() => {
						setNewPasswordVisible(!newPasswordVisible);
					}}
					placeholder="Digite sua senha"
					height="56px"
					width="auto"
					border="1px solid #49454f"
				/>
			</InputContainer>
			<ContainerButton>
				<Button
					text="Voltar"
					bg="transparent"
					color="#635F60"
					colorBorder="#635F60"
					nextPage="/VerificacaoCodigo"
				/>
				<Button
					text="Alterar Senha"
					onClick={() => verifyModal()}
				/>
			</ContainerButton>
			<Modal
				message={"Senha alterada com sucesso!"}
				isTrue={openModal}
			/>
		</NewPasswordContainer>
	);
};