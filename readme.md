# Product Registration System Demo - Express App

This repository provides an Express Application to interact with the Blockchain (https://github.com/AlexandreDejous/PRP-Chaincode-HF) without the CLI.
To work correctly, this app requires you to install PRP-Chaincode-HF first.

## Manual of the user

* Clone this repository anywhere on your system.

* Open a terminal in PRP-App-HF and issue `npm install`.

* Go to the blockchain folder `cd blockchain` and issue `npm install` again.

* Now, open with a text editor query.js and invoke.js, they're situated in the blockchain folder.
You need to change in the code their relative path pointing to the hfc-key-store (line 32 in query.js and 34 in invoke.js). The hfc-key-store is a folder created when the script enrollAdmin.js from PRP-Chaincode-HF is executed, itself executed by startFabric.sh . If you already installed PRP-Chaincode-HF, this folder is located at `PRP-Chaincode-HF/PRS/hfc-key-store`

* Get back to the root of the folder `cd ..` and issue `npm start`.

* Open a web browser and access localhost:3000 .

* If you installed correctly PRP-Chaincode-HF and launched its network -> You can now query all products, add a new product (the "type" field must be either filled with refrigerator or lighting), modify a product, change the status of a product, search for a product and get the history of changes for a product.
