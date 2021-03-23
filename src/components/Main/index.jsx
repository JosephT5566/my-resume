import React from 'react';

import Collections from '../InfoCards/Collections';
import Educations from '../InfoCards/Educations';
import Expertises from '../InfoCards/Expertises';
import Info from '../InfoCards/Info';
import Intro from '../InfoCards/Intro';
import Skills from '../InfoCards/Skills';
import Works from '../InfoCards/Works';

import InfoCard from '../InfoCards/InfoCard';

export default function Menu() {
	return (
		<div className="ui container">
			<InfoCard id={0}>
				<Info />
			</InfoCard>
			<InfoCard id={1}>
				<Educations />
			</InfoCard>
			<InfoCard id={2}>
				<Works />
			</InfoCard>
			<InfoCard id={3}>
				<Expertises />
			</InfoCard>
			<InfoCard id={4}>
				<Skills />
			</InfoCard>
			<InfoCard id={5}>
				<Intro />
			</InfoCard>
			<InfoCard id={6}>
				<Collections />
			</InfoCard>
		</div>
	);
}
