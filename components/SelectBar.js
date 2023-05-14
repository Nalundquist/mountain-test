import * as 'classes' from './SelectBar.module.css'

export const SelectBar = () => {
	return(
		<div className={classes.barContainer}>
			<div className={classes.mountainSelect}>
				<h4>Mountain 1</h4>
			</div>
			<div className={classes.mountainSelect}>
				<h4>Mountain 2</h4>
			</div>
		</div>
	)
}