import CallToActionComponent from './CallToActionComponent.svelte';
import ImageCardComponent from './ImageCardComponent.svelte';

export const CUSTOM_COMPONENTS = [
	{
		component: CallToActionComponent,
		canHaveChildren: true,
		name: 'Call to Action Section',
		noWrap: false,
		inputs: [
			{
				name: 'sectionTitle',
				type: 'string',
				defaultValue: 'My Title'
			},
			{
				name: 'actionText',
				type: 'string',
				defaultValue: 'Click Here'
			},
			{
				name: 'description',
				type: 'string',
				defaultValue: ''
			}
		],
		defaultChildren: [
			{
				component: { name: 'Text', options: { text: 'I am child text block!' } }
			}
		]
	},
	{
		component: ImageCardComponent,
		name: 'Image Card',
		noWrap: false,
		inputs: [
			{
				name: 'image',
				type: 'file',
				required: true,
				allowedFileTypes: ['jpeg', 'png', 'gif', 'svg']
			},
			{
				name: 'description',
				type: 'longText',
				required: true,
				defaultValue: 'Description'
			},
			{
				name: 'actionText',
				type: 'string',
				defaultValue: 'My Action Title'
			},
			{
				name: 'actionUrl',
				type: 'url',
				defaultValue: ''
			},
			{
				name: 'description',
				type: 'string',
				defaultValue: 'Description'
			}
		]
	}
];
