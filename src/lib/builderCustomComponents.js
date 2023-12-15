import CallToActionComponent from './CallToActionComponent.svelte';
import ImageCardComponent from './ImageCardComponent.svelte';
import ImageGalleryComponent from './ImageGalleryComponent.svelte';
import QuoteComponent from './QuoteComponent.svelte';
import SectionComponent from './SectionComponent.svelte';
import ListComponent from './ListComponent.svelte';

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
	},
	{
		component: ImageGalleryComponent,
		name: 'Image Gallery',
		inputs: [
			{
				name: 'title',
				type: 'string',
				required: true,
				defaultValue: 'Gallery Title'
			},
			{
				name: 'uniqueID',
				type: 'string',
				required: true,
				defaultValue: 'Gallery ID'
			},
			{
				name: 'photos',
				type: 'list',
				defaultValue: [{ description: 'This is a photo description' }],
				subFields: [
					{
						name: 'description',
						type: 'string',
						required: true,
						defaultValue: '"This is a photo description"'
					},
					{
						name: 'height',
						type: 'string',
						required: true,
						defaultValue: '1'
					},
					{
						name: 'width',
						type: 'string',
						required: true,
						defaultValue: '1'
					},
					{
						name: 'image',
						type: 'file',
						allowedFileTypes: ['jpeg', 'jpg', 'png', 'svg'],
						required: true,
						defaultValue:
							'https://cdn.builder.io/api/v1/image/assets%2Fpwgjf0RoYWbdnJSbpBAjXNRMe9F2%2Ffb27a7c790324294af8be1c35fe30f4d'
					}
				]
			}
		],
		canHaveChildren: false
	},
	{
		component: QuoteComponent,
		name: 'Quote',
		inputs: [
			{
				name: 'title',
				type: 'string',
				required: true,
				defaultValue: 'Our Quote'
			},
			{
				name: 'quote',
				type: 'longText',
				required: true,
				defaultValue: 'Ipsum Lorem'
			}
		]
	},
	{
		component: SectionComponent,
		name: 'Section',
		canHaveChildren: true,
		defaultChildren: [
			{
				component: { name: 'Text', options: { text: 'I am child text block!' } }
			}
		],
		inputs: [
			{
				name: 'title',
				type: 'string',
				required: true,
				defaultValue: 'Title'
			},
			{
				name: 'subTitle',
				type: 'string',
				required: false,
				defaultValue: 'Sub Title'
			}
		]
	},
	{
		component: ListComponent,
		name: 'List',
		noWrap: true,
		inputs: [
			{
				name: 'items',
				type: 'list',
				defaultValue: [{ title: 'This is a bulleted item' }],
				subFields: [
					{
						name: 'title',
						type: 'richText',
						required: true,
						defaultValue: '"This is a bulleted item"'
					}
				]
			}
		]
	}
];
