import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";
import { useState } from "react";

const useTabletorMobileStyle = (styleDefault, styleChange, width = 783) => {
	const [style, styleSetter] = useState(styleDefault);
	const isTabletOrMobile = useMediaQuery({
		query: `(max-width: ${width}px)`,
	});

	// const isLargeScreen = useMediaQuery({
	// 	query: `(min-width: ${width}px)`,
	// });

	useEffect(() => {
		if (isTabletOrMobile) {
			styleSetter(styleChange);
		} else {
			styleSetter(styleDefault);
		}
	}, [isTabletOrMobile]);
	return style;
};

export default useTabletorMobileStyle;
