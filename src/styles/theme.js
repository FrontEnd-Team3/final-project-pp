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
};

const FONT_SIZE = {
	xsmail: "10px",
	small: "16px",
	medium: "24px",
	large: "32px",
	xlarge: "48px",
	xxlarge: "60px",
};

const deviceSizes = {
	mobile: "580px",
	tablet: "768px",
	pc: "1024px",
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
