# BigchainDB Dashboard/Explorer

This is a react/redux single page application showing BigchainDB transactions as a dynamic timeline view using the valid transaction broadcast from the BigchainDB websocket.
This application can be used to visualize the transactions and blocks on any BigchainDB deployment.

More details about the concept and implementation are in the `/specs` directory.

UX/UI assets and artifacts are in the `/ux` directory

The application code is in the `/app` directory

## Structure

The app is structured as a react app created using create-react-app with added redux support.

1. `src/actions` directory contains the react actions
2. `src/components` directory contains the react components
3. `src/configs` directory has 2 json-config files to configure UI and BigchainDB connection
4. `src/containers` directory has the container components
5. `src/reducers` directory has the redux reducers
6. `src/services` directory has the services and utils to connect and listen to BigchainDB
7. `src/App.js` This is the react application the wraps and combines all the components together
8. `src/index.js` This mounts the react app from App.js
9. `src/transactionGenerator.js` this contains functions to create some transactions which can be used during runtime (see index.js)
10. `test/integrationTest.js` Integration test file that produces different creates/transfer transactions on BigchainDB
11. `test/testScript.sh` a bash script to run `integrationTest.js` every 2 seconds
12. `public/` contains static files i.e. html, css, images

## Configurations

The project can be configured using 2 JSON configuration files located at `src/configs`.

1. `bigchaindb.config.js` This file can be used to configure the connection parameters for connecting to the BigchainDB network.
1. `ui-mapper.config.json` This file can be used to configure to modify what user sees in the description for transfer & create transaction card, application context name and the maximum number of blocks a user can see on the UI.

The fields `create.description` & `transfer.description` are used to parse the data from the raw transaction of create and transfer types respectively.

## How to deploy

1. Clone this repository
2. Navigate to app folder with: `cd dashboard/app/`
3. Install node modules: `npm install`
4. Modify the `bigchaindb.config.js` & `ui-mapper.config.json` as per the requirement
5. Run the dev server using `npm start` and open the browser on `localhost:3000`
6. To create a production build you can use `npm run build`

## UX Credits

Big thanks to @mariusgoebel for help with UX design and mockups.
