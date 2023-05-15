import { useEffect, useState } from "react";
import classes from "./MountainBody.module.css";
import { MountainContainer } from "./MountainContainer";

export const MountainBody = (props) => {

	const { mountainView } = props;

	const [ visibleSchedule, setVisibleSchedule] = useState()
	useEffect(() => {
		if (mountainView == "MountainOne"){
			setVisibleSchedule(
				<div className={classes.scheduleList}>
					<h4>MOUNTAIN ONE</h4>
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
			)
		} else if (mountainView == "MountainTwo"){
			setVisibleSchedule(
				<div className={classes.scheduleList}>
					<h4>MOUNTAIN TWO</h4>
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
			)
		}
	}, [mountainView])
	return(
		<div className={classes.mtnBackground}>
			<div className={classes.scheduleBox}>
				<h3 className={classes.headerText}>SCHEDULE</h3>
				{visibleSchedule}
			</div>
		</div>
	)
}