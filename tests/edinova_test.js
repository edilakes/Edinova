/* eslint-disable no-undef */
// Usamos 'expect' de chai para las aserciones
const { expect } = require("chai");

// Usamos el objeto global 'ethers', que Remix proporciona para scripts
const { ethers } = require("ethers"); 

describe("Edinova Token Tests", function () {
    // Total Supply esperado (10 mil millones seguido de 18 ceros)
    const expectedSupply = ethers.BigNumber.from("10000000000000000000000000000");
    let tokenInstance;
    let owner;

    before(async function () {
        // 1. Obtener la fábrica del contrato (Nombre del contrato: "Edinova")
        // Este es el paso crucial que reemplaza a artifacts.require
        const EdinovaFactory = await ethers.getContractFactory("Edinova");
        
        // 2. Obtener la cuenta del dueño (deployer)
        // Usamos ethers.getSigners para obtener las cuentas de la Remix VM
        const accounts = await ethers.getSigners();
        owner = accounts[0].address;

        // 3. Desplegar el contrato
        tokenInstance = await EdinovaFactory.deploy(); 
        await tokenInstance.deployed(); // Espera a que la implementación se complete

        console.log(`\n✅ Contrato Edinova desplegado en: ${tokenInstance.address} (Remix VM)`);
    });

    it("Debe tener el nombre correcto: Edinova", async function () {
        expect(await tokenInstance.name()).to.equal("Edinova");
    });

    it("Debe tener el símbolo correcto: EDNV", async function () {
        expect(await tokenInstance.symbol()).to.equal("EDNV");
    });

    it("El Total Supply debe ser 10,000,000,000 (con 18 decimales)", async function () {
        const totalSupply = await tokenInstance.totalSupply();
        expect(totalSupply.toString()).to.equal(expectedSupply.toString());
    });

    it("El creador del contrato debe poseer todo el Total Supply inicial", async function () {
        const ownerBalance = await tokenInstance.balanceOf(owner);
        expect(ownerBalance.toString()).to.equal(expectedSupply.toString());
    });
});