import classes from "./MountainContainer.module.css";
import { useEffect, useState } from "react";
import { TopBar } from "./TopBar";
import { SelectBar } from "./SelectBar";
import { MountainBody } from "./MountainBody";
import { Footer } from "./Footer";

export const MountainContainer = () => {

	const [ mountainView, setMountainView] = useState("");
	// const [ mobileViewContainer, setMobileViewContainer ] = useState()
	// let mobileQuery = window.matchMedia("(max-width: 768px)");
	// useEffect(() => {
	// 	if (mobileQuery) {
	// 		setMobileViewContainer(
	// 			<SelectBar mountainView={mountainView} setMountainView={setMountainView} />
	// 		)
	// 	} else if (!mobileQuery) {
	// 		<>
	// 			<SelectBar setMountainView={setMountainView} />
	// 			<MountainBody mountainView={mountainView} />
	// 		</>
	// 	}
	// },[mobileQuery])

	return(
		<div className={classes.container}>
			<TopBar />
			{/* {mobileViewContainer} */}
			<SelectBar setMountainView={setMountainView} />
			<MountainBody mountainView={mountainView} />
			<Footer />
		</div> 
	)
}

