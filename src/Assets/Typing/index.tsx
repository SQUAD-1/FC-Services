import React from "react";

type IssueMobileProps = {
	id: string;
	nome: string;
	date: string;
	status: string;
	isUpdated?: boolean;
	color?: string;
	borderColor?: string;
	isClicked?: boolean;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

type IssueDto = {
	idChamado: number;
	nome: string;
	dataRelato: string;
	descricao: string;
	prioridade: string;
	horarioAbertura: string;
	horarioUltimaAtualizacao: string;
	status: string;
	tempoDecorrido: string;
	empregado_Matricula: number;
	tipo: string;
};

type IconsProps = {
	width?: string;
	height?: string;
	color?: string;
};

type OptionMenuStyleProps = {
	isClicked?: string;
	backgroundColor?: string;
};

type OptionMenuProps = {
	name: string;
	path: string;
	alt: string;
	iconUnselect: string;
	iconSelect: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	isSelected?: boolean;
	backgroundColor?: string;
};

type IconButtonProps = {
	icon?: string;
	onClick?: React.MouseEventHandler<HTMLButtonElement> | undefined;
	color?: string;
	width?: string;
	height?: string;
	onHover?: React.MouseEventHandler<HTMLButtonElement> | undefined;
};

type BoxEmptyProps = {
	title?: string;
	icon?: string;
	alt?: string;
	color?: string;
	fontSize?: string;
};

export type {
	IssueMobileProps,
	IconsProps,
	OptionMenuStyleProps,
	OptionMenuProps,
	IconButtonProps,
	BoxEmptyProps,
	IssueDto,
};
