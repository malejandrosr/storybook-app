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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor, backgroundColor, }: IMyLabelProps) => import("react/jsx-runtime").JSX.Element;
