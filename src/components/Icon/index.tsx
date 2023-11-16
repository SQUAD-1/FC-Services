import { ReactElement, ReactNode } from "react";
import { IconContainer, IconImage } from "./styles";
import { StaticImageData } from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

interface IconProps {
	src?: any;
	alt?: string;
	color?: string;
	size?: number;
	onClick?: () => void;
	hasPadding?: boolean;
}

const Icon = ({ src, alt, onClick, size, hasPadding = false }: IconProps) => {
	return (
		<IconContainer
			hasPadding={hasPadding}
			onClick={() => onClick}>
			<IconImage
				src={src}
				alt={alt || "ícone"}
				width={size}
				height={size}
			/>
		</IconContainer>
	);
};

export { Icon };
