import classes from "./TopBar.module.css";

export const TopBar = () => {



	return (
		<div>
			<div className={classes.blueBar}></div>
			<div className={classes.whiteBar}>
				<div className={classes.bigBlock}>
					<h1 className={classes.bigNumber}>02.</h1>
					<h3 className={classes.midText}>CLIMB</h3>
				</div>
				<p className={classes.smallerText}>Guis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
			</div>
			
		</div>
	)
}