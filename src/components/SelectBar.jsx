import classes from './SelectBar.module.css'
import { useState } from 'react';

export const SelectBar = (props) => {

	const { setMountainView } = props;
	
	const [mountainOneStyle, setMountainOneStyle] = useState(classes.mountainText);
	const [mountainTwoStyle, setMountainTwoStyle] = useState(classes.mountainText);

	const handleMountainOneClick = () => {
		setMountainOneStyle(classes.clickMountainText);
		setMountainTwoStyle(classes.mountainText);
		setMountainView("MountainOne");
	}

	const handleMountainTwoClick = () => {
		setMountainOneStyle(classes.mountainText);
		setMountainTwoStyle(classes.clickMountainText);
		setMountainView("MountainTwo");
	}

	return(
		<div className={classes.barContainer}>
			<div className={classes.selectBlock}>
				<div 
					id="MountainOne" 
					className={mountainOneStyle}
					onClick={handleMountainOneClick}>
					<h4>MOUNTAIN 1</h4>
				</div>
				<div 
					id="MountainTwo" 
					className={mountainTwoStyle}
					onClick={handleMountainTwoClick}>
					<h4>MOUNTAIN 2</h4>
				</div>
			</div>
		</div>
	)
}