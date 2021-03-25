import React, { useState, useContext } from 'react';

import PositionContext from '../../contexts/PositionContext';
import IndexContext from '../../contexts/IndexContext';
import ScrollyButton from './ScrollyButton';
import MenuIcon from '@material-ui/icons/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

import './styles.scss';

export default function Navigation() {
	const [active, setActive] = useState(false);
	const { positions } = useContext(PositionContext);
	const { onIndexChange } = useContext(IndexContext);
	const activeClass = active ? 'active' : 'inactive';

	const checkCurrentIndex = (scrollTop) => {
		let index = 0;
		scrollTop += 2;
		try {
			if (scrollTop - positions[6].current.offsetTop > 0) {
				index = 6;
			} else if (scrollTop - positions[5].current.offsetTop > 0) {
				index = 5;
			} else if (scrollTop - positions[4].current.offsetTop > 0) {
				index = 4;
			} else if (scrollTop - positions[3].current.offsetTop > 0) {
				index = 3;
			} else if (scrollTop - positions[2].current.offsetTop > 0) {
				index = 2;
			} else if (scrollTop - positions[1].current.offsetTop > 0) {
				index = 1;
			}
		} catch (error) {
			return;
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
									onClick={() => {
										handleButtonClicked();
										positions[0].current.scrollIntoView({ behavior: 'smooth' });
									}}
								/>
							</li>
							<li>
								<ScrollyButton
									label="Educations"
									index={1}
									onClick={() => {
										handleButtonClicked();
										positions[1].current.scrollIntoView({ behavior: 'smooth' });
									}}
								/>
							</li>
							<li>
								<ScrollyButton
									label="Works"
									index={2}
									onClick={() => {
										handleButtonClicked();
										positions[2].current.scrollIntoView({ behavior: 'smooth' });
									}}
								/>
							</li>
							<li>
								<ScrollyButton
									label="Expertises"
									index={3}
									onClick={() => {
										handleButtonClicked();
										positions[3].current.scrollIntoView({ behavior: 'smooth' });
									}}
								/>
							</li>
							<li>
								<ScrollyButton
									label="Skills"
									index={4}
									onClick={() => {
										handleButtonClicked();
										positions[4].current.scrollIntoView({ behavior: 'smooth' });
									}}
								/>
							</li>
							<li>
								<ScrollyButton
									label="Introduction"
									index={5}
									onClick={() => {
										handleButtonClicked();
										positions[5].current.scrollIntoView({ behavior: 'smooth' });
									}}
								/>
							</li>
							<li>
								<ScrollyButton
									label="Collections"
									index={6}
									onClick={() => {
										handleButtonClicked();
										positions[6].current.scrollIntoView({ behavior: 'smooth' });
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
