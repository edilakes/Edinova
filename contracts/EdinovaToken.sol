// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

// Importamos el contrato base ERC20 de OpenZeppelin
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// Nombre del contrato
contract EdinovaToken is ERC20 {

    // Total Supply (10 mil millones con 18 decimales)
    // 10,000,000,000 * 10^18
    uint256 private constant INITIAL_SUPPLY = 10000000000000000000000000000;

    // Constructor del contrato
    constructor() 
        // Llama al constructor de ERC20 con los parámetros definidos
        ERC20("Edinova", "EDNV") 
    {
        // Asigna todos los tokens iniciales a la dirección que implementa el contrato (tu wallet)
        _mint(msg.sender, INITIAL_SUPPLY);
    }
}