import classes from "./MountainBody.module.css";

export const MountainBody = () => {
	return(
		<div className={classes.mtnBackground}>
			<div className={classes.scheduleBox}>
				<h3 className={classes.headerText}>SCHEDULE</h3>
				<div className={classes.scheduleList}>
					<div id="nov-sched" className={classes.monthBlock}>
						<div className={classes.schedItem}>
							<p>25 Nov 2016</p>
							<p>Vestibulum viverra</p>
						</div>
						<div className={classes.schedItem}>
							<p>25 Nov 2016</p>
							<p>Vestibulum viverra</p>
						</div>
					</div>
					<div id="dec-sched" className={classes.monthBlock}>
						<div className={classes.schedItem}>
							<p>18 Dec 2016</p>
							<p>Vestibulum viverra</p>
						</div>
					</div>
					<div id="jan-sched" className={classes.monthBlock}>
						<div className={classes.schedItem}>
							<p>7 Jan 2017</p>
							<p>Vestibulum viverra</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}