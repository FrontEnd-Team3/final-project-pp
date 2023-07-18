const PALETTE = {
	primary: "#3CB371",
	neon: "#B8F11A",
	black: "#404040",
	white: "#FFFFFF",
	gray: "#D9D9D9",
	yellow: "#FACC47",
	highlightTitle: "#7FC0BC",
	ivory: "#FCF9F3",
	orange: "#FD5E09",
	turquoise: "#005666",
	disabled: "#E6E6E6",
	darkPrimary: "#2E8B57",
};

const FONT_SIZE = {
	xxxsmall: "10px",
	xxsmall: "12px",
	xsmall: "14px",
	small: "16px",
	xsmedium: "18px",
	smedium: "20px",
	semimedium: "22px",
	medium: "24px",
	mmlarge: "26px",
	mlarge: "28px",
	large: "32px",
	mlarge: "36px",
	xlarge: "40px",
	xxlarge: "48px",
	xxxlarge: "60px",
};

const deviceSizes = {
	mobile: "580px",
	tablet: "768px",
	pc: "1060px",
};

const DEVICE = {
	mobile: `screen and (max-width: ${deviceSizes.mobile})`,
	tablet: `screen and (max-width: ${deviceSizes.tablet})`,
	pc: `screen and (max-width: ${deviceSizes.pc})`,
};

const theme = {
	deviceSizes,
	DEVICE,
	PALETTE,
	FONT_SIZE,
};

export default theme;
