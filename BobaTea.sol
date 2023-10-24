// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract CyberBobaTea {
    string public selectedFlavor;
    string public selectedIngredients;
    string public selectedIceLevel;

    event FlavorEvent(string _selectedFlavor, string _selectedIngredients, string _selectedIceLevel);

function chooseBobaTea(string memory flavor, string memory ingredients, string memory iceLevel) public {
        selectedFlavor = flavor;
        selectedIngredients = ingredients;
        selectedIceLevel = iceLevel;
        emit FlavorEvent(selectedFlavor, selectedIngredients, selectedIceLevel);
    }

}