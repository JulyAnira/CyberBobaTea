const contractAddress = "0xd2a5bC10698FD955D1Fe6cb468a17809A08fd005";
const contractABI = [
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "string",
				"name": "_selectedFlavor",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_selectedIngredients",
				"type": "string"
			},
			{
				"indexed": false,
				"internalType": "string",
				"name": "_selectedIceLevel",
				"type": "string"
			}
		],
		"name": "FlavorEvent",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "string",
				"name": "flavor",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "ingredients",
				"type": "string"
			},
			{
				"internalType": "string",
				"name": "iceLevel",
				"type": "string"
			}
		],
		"name": "chooseBobaTea",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "selectedFlavor",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "selectedIceLevel",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "selectedIngredients",
		"outputs": [
			{
				"internalType": "string",
				"name": "",
				"type": "string"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
	