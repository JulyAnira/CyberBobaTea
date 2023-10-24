let contract;
let signer;
let contractWithSigner;

main();

async function main() {

    if (!window.ethereum) {
        alert("No Web3 Provider detected");
        return;
    }

    const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

    await provider.send("eth_requestAccounts", []);

    signer = provider.getSigner();
    contract = new ethers.Contract(contractAddress, contractABI, provider);
    contractWithSigner = contract.connect(signer);

    // WRITE YOUR CODE BELOW THIS LINE

    

    // Call the smart contract function to choose Boba Tea
   

    $('#generate').click(async function () {
        // what happens when you click the button
        const flavor = $("#flavor").val();
        const ingredientsOptions = ["pearl", "coconut", "grass jelly", "coffee jelly", "aloe", "taro balls", "pudding"];
        const iceLevelOptions = ["extra ice", "ice", "light ice", "normal", "no ice", "room temperature", "hot"];

        // Randomly select Ingredients and Ice Level
        const randomIngredients = ingredientsOptions[Math.floor(Math.random() * ingredientsOptions.length)];
        const randomIceLevel = iceLevelOptions[Math.floor(Math.random() * iceLevelOptions.length)];

        await contractWithSigner.chooseBobaTea(flavor, randomIngredients, randomIceLevel);
    })
    

    // Update the UI with the selected options when the event emits from the contract

   //contract.on("FlavorEvent"), function(){

    
       
        // selectedFlavorElement.textContent = flavor;
        // selectedIngredientsElement.textContent = randomIngredients;
        // selectedIceLevelElement.textContent = randomIceLevel;
    
        contract.on("FlavorEvent", (selectedFlavor, selectedIngredients, selectedIceLevel) => {
            console.log("Flavor Event Received");
            console.log("Selected Flavor:", selectedFlavor);
            console.log("Selected Ingredients:", selectedIngredients);
            console.log("Selected Ice Level:", selectedIceLevel);
        
            // Update the UI
            $("#selectedFlavor").text(selectedFlavor);
            $("#selectedIngredients").text(selectedIngredients);
            $("#selectedIceLevel").text(selectedIceLevel);
        });
        
        
    

}