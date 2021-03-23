import React, { useState, useContext } from 'react';

import PositionContext from '../../contexts/PositionContext';
import IndexContext from '../../contexts/IndexContext';
import ScrollyButton from './ScrollyButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import './styles.scss';

export default function Navigation() {
	const [isClicked, setIsClicked] = useState(false);
	const [active, setActive] = useState(false);
	const { positions } = useContext(PositionContext);
	const { onIndexChange } = useContext(IndexContext);
	const activeClass = active ? 'active' : 'inactive';

	const checkCurrentIndex = (scrollTop) => {
		let index = 0;
		let correctPoint = scrollTop;
		if (correctPoint >= 0 && correctPoint < positions[1]) {
			index = 0;
		} else if (correctPoint >= positions[1] && correctPoint < positions[2]) {
			index = 1;
		} else if (correctPoint >= positions[2] && correctPoint < positions[3]) {
			index = 2;
		} else if (correctPoint >= positions[3] && correctPoint < positions[4]) {
			index = 3;
		} else if (correctPoint >= positions[4] && correctPoint < positions[5]) {
			index = 4;
		} else if (correctPoint >= positions[5] && correctPoint < positions[6]) {
			index = 5;
		} else if (correctPoint >= positions[6]) {
			index = 6;
		}
		onIndexChange(index);
	};

	window.addEventListener(
		'scroll',
		(event) => {
			checkCurrentIndex(document.documentElement.scrollTop);
		},
		false
	);

	const handleClickAway = () => {
		if (active) {
			setActive(false);
		}
	};

	const handleButtonClicked = () => {
		setActive(false);
	};

	return (
		<ClickAwayListener onClickAway={handleClickAway}>
			<section id="sidebar" className={`${activeClass}`}>
				<button
					id="menuButton"
					onClick={() => {
						setActive((prev) => !prev);
					}}
				>
					<MenuIcon className="icon" />
				</button>
				<div className="inner">
					<nav>
						<ul>
							<li>
								<ScrollyButton
									label="Info"
									index={0}
									isClicked={isClicked}
									onClick={() => {
										setIsClicked(true);
										handleButtonClicked();
										window.scrollTo({ behavior: 'smooth', top: positions[0] });
									}}
								/>
							</li>
							<li>
								<ScrollyButton
									label="Educations"
									index={1}
									isClicked={isClicked}
									onClick={() => {
										setIsClicked(true);
										handleButtonClicked();
										window.scrollTo({ behavior: 'smooth', top: positions[1] });
									}}
								/>
							</li>
							<li>
								<ScrollyButton
									label="Works"
									index={2}
									isClicked={isClicked}
									onClick={() => {
										setIsClicked(true);
										handleButtonClicked();
										window.scrollTo({ behavior: 'smooth', top: positions[2] });
									}}
								/>
							</li>
							<li>
								<ScrollyButton
									label="Expertises"
									index={3}
									isClicked={isClicked}
									onClick={() => {
										setIsClicked(true);
										handleButtonClicked();
										window.scrollTo({ behavior: 'smooth', top: positions[3] });
									}}
								/>
							</li>
							<li>
								<ScrollyButton
									label="Skills"
									index={4}
									isClicked={isClicked}
									onClick={() => {
										setIsClicked(true);
										handleButtonClicked();
										window.scrollTo({ behavior: 'smooth', top: positions[4] });
									}}
								/>
							</li>
							<li>
								<ScrollyButton
									label="Introduction"
									index={5}
									isClicked={isClicked}
									onClick={() => {
										setIsClicked(true);
										handleButtonClicked();
										window.scrollTo({ behavior: 'smooth', top: positions[5] });
									}}
								/>
							</li>
							<li>
								<ScrollyButton
									label="Collections"
									index={6}
									isClicked={isClicked}
									onClick={() => {
										setIsClicked(true);
										handleButtonClicked();
										window.scrollTo({ behavior: 'smooth', top: positions[6] });
									}}
								/>
							</li>
						</ul>
					</nav>
				</div>
			</section>
		</ClickAwayListener>
	);
}
