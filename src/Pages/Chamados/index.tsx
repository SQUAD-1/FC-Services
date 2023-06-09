import { IssueMobile } from "../../Components/Home/CalledMobile";
import { HeaderMobile } from "../../Components/Home/HeaderMobile";
import { NavigationBar } from "../../Components/MenuNavegation";
import { MainMobile, ScreenContainer } from "../Home/styles";
import { Calls } from "./styles";
import { issueMobileData } from "../Home/data";

export const Chamados = () => {
	const usuarioLogado = JSON.parse(localStorage.getItem("userData") ?? "null");
	function verificarLogin() {
		if (!usuarioLogado) {
			window.location.replace("/login");
		}
	}
	verificarLogin();
	const issuesNumber = issueMobileData.length;
	return (
		<ScreenContainer>
			<MainMobile>
				<HeaderMobile
					userName={usuarioLogado ? usuarioLogado.nome : ""}
					pageTittle="Meus Chamados"
					issueQuantify={issuesNumber}
				/>
				<Calls>
					{issueMobileData.map((item) => (
						<IssueMobile
							key={item.id}
							id={item.id}
							nome={item.nome}
							date={item.date}
							status={item.status}
							isUpdated={item.isUpdated}
							color={item.color}
						/>
					))}
				</Calls>
			</MainMobile>
			<NavigationBar />
		</ScreenContainer>
	);
};
