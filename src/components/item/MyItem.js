import ItemOverlay from '@enact/moonstone/Item';
import Icon from '@enact/moonstone/Icon';
import kind from '@enact/core/kind';
import React from 'react';

const MyItem = kind({
	name: 'MyItem',

	render: (props) => (
		<ItemOverlay {...props} autoHide="both">
			<overlayBefore>
				<Icon>flag</Icon>
				<Icon>star</Icon>
			</overlayBefore>
			An Item that will show some icons before and after this text when spotted
			<Icon slot="overlayAfter">trash</Icon>
		</ItemOverlay>
	)
});

export default MyItem;