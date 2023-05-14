import classes from "./MountainContainer.module.css";
import { TopBar } from "./TopBar";
import { MountainBody } from "./MountainBody";
import { Footer } from "./Footer";

export const MountainContainer = () => {

	return(
		<div className={classes.container}>
			<TopBar />
			<MountainBody />
			<Footer />
		</div> 
	)
}

