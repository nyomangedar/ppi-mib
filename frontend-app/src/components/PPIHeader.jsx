import React from "react";
import logo_ppi from "../image/logo_ppi.png";

const PPIHeader = () => {
	return (
		<>
			<div id="" class="shadow mb-5">
				<img
					src={logo_ppi}
					// src={`${serverBaseURI}/logo_ppi.png`}
					class="p-4 mx-auto d-block img-fluid"
					alt="logo-ppi"
					style={{ height: "6.5rem" }}
				></img>
			</div>
		</>
	);
};

export default PPIHeader;
