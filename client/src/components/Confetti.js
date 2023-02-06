import { useState } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";

function ConfettiDrop() {
	const { width, height } = useWindowSize();
	const [party, setParty] = useState(true);

	const colorsConfetti = [
		"#f44336",
		"#e91e63",
		"#9c27b0",
		"#673ab7",
		"#3f51b5",
		"#2196f3",
		"#03a9f4",
		"#00bcd4",
		"#009688",
		"#4CAF50",
		"#8BC34A",
		"#CDDC39",
		"#FFEB3B",
		"#FFC107",
		"#FF9800",
		"#FF5722",
		"#795548",
	];

	const confetti = (
		<Confetti
			className="confetti"
			width={width}
			height={height}
			recycle={false}
			style={{ pointerEvents: "none" }}
			numberOfPieces={party ? 700 : 0}
			colors={colorsConfetti}
			onConfettiComplete={(confetti) => {
				setParty(false);
				confetti.reset();
			}}
		/>
	);
	return (
		<div>{confetti}</div>
	)
}

export default ConfettiDrop