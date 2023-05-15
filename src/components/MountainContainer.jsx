import classes from "./MountainContainer.module.css";
import { useState } from "react";
import { TopBar } from "./TopBar";
import { SelectBar } from "./SelectBar";
import { MountainBody } from "./MountainBody";
import { Footer } from "./Footer";

export const MountainContainer = () => {

	const [ mountainView, setMountainView] = useState("");

	return(
		<div className={classes.container}>
			<TopBar />
			<SelectBar setMountainView={setMountainView} />
			<MountainBody mountainView={mountainView} />
			<Footer />
		</div> 
	)
}

