// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';



// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			customCss: ['./src/styles/configuration.css'],
			title: 'Minified',

			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/dervarex/minified',
				},
				{
					icon: 'discord',
					label: 'Discord',
					href: 'https://discord.gg/aG6NgQBENr',
				},
			],

			sidebar: [
	{
		label: 'Guides',
		items: [
			{
				label: 'Getting Started',
				slug: 'guides/getting-started',
			},
			{
				label: 'Modloaders',
				slug: 'guides/modloaders/introduction',
			},
		],
	},

	{
		label: 'Modules',
		items: [
			{
				label: 'Auth',
				collapsed: true,
				items: [
					{
						label: 'Authentication',
						slug: 'guides/minified-auth/authentication',
					},
				],
			},

			{
				label: 'Launch',
				collapsed: true,
				items: [
					{
						label: 'Basics',
						slug: 'guides/minified-launch/basics',
					},
					{
						label: 'Configuration',
						slug: 'guides/minified-launch/configuration',
					},
					{
						label: 'Modding',
						collapsed: true,
						items: [
							{
								label: 'Loader',
								slug: 'guides/minified-launch/modding/loader',
							},
						],
					},
					{
						label: 'Versions',
						collapsed: true,
						items: [
							{
								label: 'Versions',
								slug: 'guides/minified-launch/versions/versions',
							},
						],
					},
				],
			},

			{
				label: 'Modrinth',
				collapsed: true,
				items: [
					{
						label: 'Loaders',
						collapsed: true,
						items: [
							{
								label: 'Loaders',
								slug: 'guides/minified-modrinth/loaders/loaders',
							},
						],
					},
					{
						label: 'Projects',
						collapsed: true,
						items: [
							{
								label: 'Project',
								slug: 'guides/minified-modrinth/projects/project',
							},
							{
								label: 'Projects Client',
								slug: 'guides/minified-modrinth/projects/projectsclient',
							},
						],
					},
					{
						label: 'Tags',
						collapsed: true,
						items: [
							{
								label: 'Tag',
								slug: 'guides/minified-modrinth/tags/tag',
							},
						],
					},
					{
						label: 'Teams',
						collapsed: true,
						items: [
							{
								label: 'Teams Client',
								slug: 'guides/minified-modrinth/teams/teamsclient',
							},
						],
					},
					{
						label: 'Users',
						collapsed: true,
						items: [
							{
								label: 'Users Client',
								slug: 'guides/minified-modrinth/users/usersclient',
							},
						],
					},
					{
						label: 'Versions',
						collapsed: true,
						items: [
							{
								label: 'Versions Client',
								slug: 'guides/minified-modrinth/versions/versionsclient',
							},
						],
					},
				],
			},
		],
	},
],
		}),
	],
});