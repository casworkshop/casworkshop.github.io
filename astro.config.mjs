// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://casworkshop.github.io',
	integrations: [
		starlight({
			title: 'Computational Affective Science',
			logo: {
				'src': './src/assets/houston.webp',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '2026',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Motivation', slug: '2026/motivation' },
						{ label: 'First CfP', slug: '2026/fcfp' },
						{ label: 'Organizers', slug: '2026/organizers' },
					],
				},
				
			],
		}),
	],
});
