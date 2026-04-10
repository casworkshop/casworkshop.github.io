// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://casworkshop.github.io',
	integrations: [
		starlight({
			title: 'CAS Workshop',
			
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '2026',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'About', slug: '2026/motivation' },
						{ label: 'Calls for Papers',
							items: [{
								label: 'First CfP', slug: '2026/calls/fcfp'
							}, {
								label: 'Second CfP', slug: '2026/calls/scfp'
							}, {
								label: 'Third CfP', slug: '2026/calls/tcfp'

							}]
						},
						{ label: 'Accepted Papers', slug: '2026/accepted'},
						{ label: 'Program', link: '2026/program_st'	},
						{ label: 'FAQ', slug: '2026/faq' },
						{ label: 'Organizers', slug: '2026/organizers' },
					],
				},
				
			],
		}),
	],
});
