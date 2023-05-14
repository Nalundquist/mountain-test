import classes from "./Footer.module.css";

export const Footer = () => {
	return(
		<div className={classes.footerContainer}>
			<div className={classes.footerLogo}>
				<div className={classes.logoCircle} />
				<div className={classes.laMountBlock}>
					<p>LOSANGELES</p>
					<p>MOUNTAINS</p>
				</div>
			</div>
			<p className={classes.copyright}>COPYRIGHT 2023, ALL RIGHTS RESERVED</p>
		</div>
	)
}