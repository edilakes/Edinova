// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

/**
 * @title Edinova
 * @dev Contrato ERC-20 para los créditos del juego Edinova.
 * @custom:dev-run-script default_workspace/tests/edinova_test.js
 */
contract Edinova is ERC20 {
    
    // Total Supply (10 mil millones con 18 decimales)
    uint256 private constant INITIAL_SUPPLY = 10000000000000000000000000000;
    
    constructor() 
        ERC20("Edinova", "EDNV") 
    {
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}