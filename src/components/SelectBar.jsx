import classes from './SelectBar.module.css'

export const SelectBar = () => {
	return(
		<div className={classes.barContainer}>
			<div className={classes.selectBlock}>
				<div className={classes.mountainText}>
					<h4>MOUNTAIN 1</h4>
				</div>
				<div className={classes.mountainText}>
					<h4>MOUNTAIN 2</h4>
				</div>
			</div>
		</div>
	)
}