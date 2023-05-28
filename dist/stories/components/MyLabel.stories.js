"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomBackgroundColor = exports.CustomFontColor = exports.Tertiary = exports.Secondary = exports.AllCaps = exports.Basic = void 0;
var MyLabel_1 = require("../../components/MyLabel");
var meta = {
    title: "UI/MyLabel",
    component: MyLabel_1.MyLabel,
    tags: ["autodocs"],
    argTypes: {
        size: { control: "select" },
        color: { control: "select" },
        fontColor: { control: "color" },
        backgroundColor: { control: "color" },
    },
};
exports.default = meta;
exports.Basic = {
    args: {
        label: "Basic",
        size: "normal",
        allCaps: false,
    },
};
exports.AllCaps = {
    args: {
        label: "AllCaps",
        size: "h1",
        allCaps: true,
    },
};
exports.Secondary = {
    args: {
        label: "Secondary",
        size: "h1",
        color: "secondary",
    },
};
exports.Tertiary = {
    args: {
        label: "Tertiary",
        size: "h1",
        color: "tertiary",
    },
};
exports.CustomFontColor = {
    args: {
        label: "CustomFontColor",
        size: "h1",
        fontColor: "#5517ac",
    },
};
exports.CustomBackgroundColor = {
    args: {
        label: "CustomBackgroundColor",
        size: "h1",
        fontColor: "#eeeeee",
        backgroundColor: "#000000",
    },
};
