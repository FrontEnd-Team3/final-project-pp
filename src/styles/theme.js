const PALETTE = {
	primary: {
		dark: "#8490C8",
		light: "#E2E2FE",
	},
	secondary: "#EFD6FB",
	gray: "#D8D8D8",
	red: "#e44b4b",
	yellow: "#FACC47",
	black: "#404040",
	white: "#FFFFFF",
	pricePoint: "#705ECB",
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
