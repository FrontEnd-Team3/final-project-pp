const { useRef, useEffect } = require("react");

const LazyImage = ({ src, alt, className }) => {
	const imgRef = useRef();

	useEffect(() => {
		const img = imgRef.current;
		const observer = new IntersectionObserver(([entry]) => {
			if (entry.isIntersecting) {
				img.src = src;
				observer.disconnect();
			}
		});

		observer.observe(img);

		return () => {
			observer.disconnect();
		};
	}, [src]);
	return <img ref={imgRef} alt={alt} className={className} />;
};
export default LazyImage;
