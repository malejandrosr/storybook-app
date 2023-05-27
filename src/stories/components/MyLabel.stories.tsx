import { Meta, StoryObj } from "@storybook/react";
import { MyLabel } from "../../components/MyLabel";

const meta: Meta<typeof MyLabel> = {
	title: "UI/MyLabel",
	component: MyLabel,
	tags: ["autodocs"],
	argTypes: {
		size: { control: "select" },
		color: { control: "select" },
		fontColor: { control: "color" },
	},
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Basic: Story = {
	args: {
		label: "Basic",
		size: "normal",
		allCaps: false,
	},
};

export const AllCaps: Story = {
	args: {
		label: "AllCaps",
		size: "h1",
		allCaps: true,
	},
};

export const Secondary: Story = {
	args: {
		label: "Secondary",
		size: "h1",
		color: "secondary",
	},
};

export const Tertiary: Story = {
	args: {
		label: "Tertiary",
		size: "h1",
		color: "tertiary",
	},
};

export const CustomFontColor: Story = {
	args: {
		label: "CustomFontColor",
		size: "h1",
		fontColor: "#5517ac",
	},
};
