import 'dotenv/config';
import { capitalize, InstallGlobalCommands } from './utils.js';

// Help command for showing help dialogue
const HELP_COMMAND = {
	name: 'Help',
	description: 'Get help with this bot or one of its commands',
	options: [
	{
		type: 3,
		name: 'command',
		description: 'The command you want help with',
		choices: getAllCommands(),
	},
	type: 1,
};

// submit new pb for a boss
const SUBMIT_COMMAND = {
	name: 'submit',
	description: 'Submit a new time for a boss',
	options: [
		{
			type: 3,
			name: 'boss',
			description: 'The boss you got a new pb for',
			required: true,
			// TODO: add db connection, for now it's only what's hardcoded here
			choices: [
			{
				name: "test",
				value: "test_test"
			},
			{
				name: "Obor",
				value: "boss_obor"
			},
			{
				name: "Sarachnis",
				value: "boss_sarachnis"
			}
			],
		},
		{
			type: 4,
			name: 'time',
			description: 'Give in this format: hh:mm:ss.ms',
			required: true,
		},
	],
	type: 1,
};

// highscores to get a top 3 for the requested boss
const HIGHSCORES_COMMAND = {
	name: 'highscores',
	description: 'Get highscores for a boss',
	options: [
		{
			type: 3,
			name: 'boss',
			description: 'The boss you want to know the highscores for'
			required: true,
			// TODO: add db connection, for now it's only what's hardcoded here
			choices: [
				{
					name: "test",
					value: "test_test"
				},
				{
					name: "Obor",
					value: "boss_obor"
				},
				{
					name: "Sarachnis",
					value: "boss_sarachnis"
				}
			],
		},
		{
			type: 4,
			name: 'nr',
			description: 'The number of entries you want to show. The default is 3.'
			required: false,
		},
	],
	type: 1,
};


const ALL_COMMANDS = [HELP_COMMAND, SUBMIT_COMMAND, HIGHSCORES_COMMAND];

// parse ALL_COMMANDS into options
function getAllCommands() {
	const listAllCommands = [];

	for (let comm of ALL_COMMANDS) {
		listAllCommands.push({
			name: comm,
			value: "comm_"+comm
		});
	}
	return listAllCommands;
}

InstallGlobalCommands(process.env.APP_ID, ALL_COMMANDS);
