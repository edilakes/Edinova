# 🪙 EdinovaToken (EDNV) - Créditos de Juego

## 📝 Descripción del Proyecto

Este repositorio contiene la implementación del contrato inteligente **EdinovaToken (EDNV)**, un token ERC-20 diseñado específicamente para ser utilizado como la moneda de crédito dentro del ecosistema del juego **[NOMBRE DE TU JUEGO]**.

El objetivo principal de este token es servir como **activo de utilidad interno**, recompensando a los jugadores por su actividad y proporcionando una economía interna robusta, sin el enfoque principal en la especulación financiera externa.

## ⚙️ Especificaciones Técnicas del Token

El token ha sido implementado utilizando el estándar **ERC-20** y los contratos base auditados de **OpenZeppelin** para garantizar seguridad y compatibilidad.

| Característica | Valor | Notas |
| :--- | :--- | :--- |
| **Nombre del Token** | `Edinova` | Nombre oficial del crédito en el juego. |
| **Símbolo (Ticker)** | `EDNV` | Símbolo único elegido tras verificación de disponibilidad. |
| **Estándar** | ERC-20 | El estándar más común para tokens de Ethereum. |
| **Decimales** | **18** | Este alto número de decimales (el estándar de Ethereum) asegura la precisión necesaria para manejar fracciones mínimas de recompensas. |
| **Suministro Total (Total Supply)** | 10.000.000.000 EDNV (10 mil millones) | El suministro inicial está acuñado y asignado al **Deployer** (propietario del contrato) para su distribución en el juego. |

## 💰 Modelo de Recompensa (Economía)

El modelo económico de EdinovaToken se centra en compartir los ingresos del juego directamente con los jugadores, incentivando la participación a largo plazo.

* **Política de Distribución:** El 10% de los beneficios generados por ciertas acciones de los jugadores (ej. visualización de anuncios, compras específicas) se convierte en tokens EDNV y se recompensa al jugador.
* **Precisión:** La alta granularidad (18 decimales) permite distribuir con precisión el valor de recompensas que equivalen a céntimos o fracciones de céntimo.

## 🛠️ Estructura del Repositorio

El proyecto utiliza la estructura de carpetas estándar de Remix IDE:

```
.
├── contracts/
│   └── EdinovaToken.sol     # El contrato inteligente principal (ERC-20).
├── scripts/
│   └── ...                  # Scripts para despliegue e interacción.
└── tests/
    └── ...                  # Archivos para pruebas unitarias del token.
```

## 💻 Instrucciones de Desarrollo y Despliegue

### Requisitos
* Remix IDE (Navegador) o un entorno local (Hardhat/Foundry, si se migra).
* Metamask o una wallet compatible con Ethereum.
* ETH para tarifas de gas (real en Mainnet, de prueba en Testnets).
### 1. Compilación
1.  Abre `contracts/EdinovaToken.sol` en Remix.
2.  Ve a la pestaña **Solidity Compiler** (versión `^0.8.0`).
3.  Compila el contrato `EdinovaToken`.
### 2. Despliegue (Deploy)
1.  Ve a la pestaña **Deploy & Run Transactions**.
2.  En **Environment**, selecciona `Injected Provider - Metamask`.
3.  Asegúrate de estar conectado a la **Testnet (Sepolia, Holesky)** para pruebas, o a la **Mainnet** si estás listo para el lanzamiento final.
4.  En la sección `Contract`, selecciona `EdinovaToken`.
5.  Haz clic en **\"Transact\"** (o \"Deploy\"). El constructor del contrato asignará el Total Supply a la dirección de tu wallet.

### 3. Interacción

Una vez desplegado:

* **Dirección del Contrato:**  [0x35eFF8D336BB8c6a256799b95B41cC54Bdf3e133]


* **Explorer:** [https://arbiscan.io/token/0x35eff8d336bb8c6a256799b95b41cc54bdf3e133]
Puedes usar la sección **Deployed Contracts** en Remix para llamar a funciones como `balanceOf(tu_direccion)` para verificar tu saldo de `10,000,000,000 EDNV`.

* **Verificacion:** [https://repo.sourcify.dev/42161/0x35eFF8D336BB8c6a256799b95B41cC54Bdf3e133]
---

## 🔒 Auditoría y Seguridad

Este contrato utiliza la librería **OpenZeppelin**, la cual es una de las librerías de contratos inteligentes más auditadas y seguras de la industria.

---
## 📝 Licencia

Este proyecto está licenciado bajo la **MIT License**.

