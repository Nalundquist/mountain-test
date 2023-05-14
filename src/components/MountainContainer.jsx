import classes from "./MountainContainer.module.css";
import { TopBar } from "./TopBar";
import { SelectBar } from "./SelectBar";

export const MountainContainer = () => {

	return(
		<div className={classes.container}>
			<TopBar />
			<MountainBody />
			<Footer />
		</div> 
	)
}

