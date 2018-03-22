import Button from '@enact/moonstone/Button';
import kind from '@enact/core/kind';
import {Panel, Header} from '@enact/moonstone/Panels';
import React from 'react';
import MyItem from '../components/item/MyItem'

const MainPanel = kind({
	name: 'MainPanel',

	render: (props) => (
		<Panel {...props}>
			<Header title="Hello world!" />
			<MyItem/>
			<Button>Click me</Button>
		</Panel>
	)
});

export default MainPanel;
