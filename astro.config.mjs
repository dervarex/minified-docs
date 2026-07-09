// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Minified',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Getting Started', slug: 'guides/getting-started' },
					],
				},
				{
					label: 'Auth',
					items: [
							{
								label: 'Authentication',
								slug: 'guides/minified-auth/authentication',
							},
					],
				},
				{
					label: 'Launching',
					items: [
							{
								label: 'Basics',
								slug: 'guides/minified-launch/basics',
							},
							{
								label: 'Loaders',
								slug: 'guides/minified-launch/modding/loader',
							},
							{
								label: 'Configuration',
								slug: 'guides/minified-launch/configuration',
							},
							{
								label: 'Versions',
								slug: 'guides/minified-launch/versions/versions',
							},
					],
				},
			],
		}),
	],
});
