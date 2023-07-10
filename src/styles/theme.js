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
	DEVICE,
};

export default theme;
