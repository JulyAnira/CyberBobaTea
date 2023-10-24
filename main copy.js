// Get references to HTML elements
const flavorInput = document.getElementById("flavor");
const generateButton = document.getElementById("generate");
const selectedFlavorElement = document.getElementById("selectedFlavor");
const selectedIngredientsElement = document.getElementById("selectedIngredients");
const selectedIceLevelElement = document.getElementById("selectedIceLevel");

// Event listener for the "Generate Boba Tea" button
generateButton.addEventListener("click", async function () {
    const flavor = flavorInput.value;

    try {
        // Check if MetaMask is installed and connected
        if (window.ethereum) {
            // Request user permission to connect to their Ethereum wallet (MetaMask)
            await window.ethereum.enable();

            // Create a provider with MetaMask as the signer
            const provider = new ethers.providers.Web3Provider(window.ethereum);

            // Get the signer (the user's wallet)
            const signer = provider.getSigner();


            // Initialize the contract instance
            const contract = new ethers.Contract(contractAddress, contractABI, signer);

            // Ingredients and Ice Level options
            const ingredientsOptions = ["pearl", "coconut", "grass jelly", "coffee jelly", "aloe", "taro balls", "pudding"];
            const iceLevelOptions = ["extra ice", "ice", "light ice", "normal", "no ice", "room temperature", "hot"];

            // Randomly select Ingredients and Ice Level
            const randomIngredients = ingredientsOptions[Math.floor(Math.random() * ingredientsOptions.length)];
            const randomIceLevel = iceLevelOptions[Math.floor(Math.random() * iceLevelOptions.length)];

            // Call the smart contract function to choose Boba Tea
            const tx = await contract.chooseBobaTea(flavor, randomIngredients, randomIceLevel);

            // Wait for the transaction to be mined
            await tx.wait();

            // Update the UI with the selected options
            selectedFlavorElement.textContent = flavor;
            selectedIngredientsElement.textContent = randomIngredients;
            selectedIceLevelElement.textContent = randomIceLevel;
        } else {
            alert("Please install and connect MetaMask to use this Dapp.");
        }
    } catch (error) {
        console.error("Error while interacting with the smart contract:", error);
    }
});
