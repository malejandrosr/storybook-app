import "./mylabel.css";

export interface IMyLabelProps {
	/**
	 * This the description of my label component
	 */
	label: string;

	/**
	 * This is the size of my label component
	 */
	size: "normal" | "h1" | "h2" | "h3";

	/**
	 * This capitalize all my label text
	 */
	allCaps?: boolean;

	/**
	 * This is the color of my label component
	 */
	color?: "primary" | "secondary" | "tertiary";

	/**
	 * This is the custom font color of my label component
	 */
	fontColor?: string;

	/**
	 * This is the background color of my label component
	 */
	backgroundColor?: string;
}

export const MyLabel = ({
	label = "No Label",
	size = "normal",
	allCaps = false,
	color = "primary",
	fontColor,
	backgroundColor = "transparent",
}: IMyLabelProps) => {
	return (
		<span className={`label ${size} text-${color}`} style={{ backgroundColor, color: fontColor }}>
			{allCaps ? label.toUpperCase() : label}
		</span>
	);
};
