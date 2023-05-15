import classes from './SelectBar.module.css'

export const SelectBar = (props) => {

	const { setMountainView } = props;
	
	let mountainOneStyle = classes.mountainText;
	let mountainTwoStyle = classes.mountainText;

	const handleMountainOneClick = () => {
		mountainOneStyle = classes.clickMountainText;
		mountainTwoStyle = classes.mountainText;
		setMountainView("MountainOne");
		console.log("mountain one click")
		console.log(mountainOneStyle)
		console.log(mountainTwoStyle)
	}

	const handleMountainTwoClick = () => {
		mountainTwoStyle = classes.clickMountainText;
		mountainOneStyle = classes.mountainText;
		setMountainView("MountainTwo");
		console.log("mountain two click")
		console.log(mountainOneStyle)
		console.log(mountainTwoStyle)
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