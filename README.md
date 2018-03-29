# truffle-petshop-tutorial-complete
Finished Petshop Tutorial Original Readme File below
Just running all the commands should now bring up the completed project.
You will still have to configure your metamask to connect to your truffle develop blockchain

# Pet Shop Truffle Box

This box has all you need to get started with our [Pet Shop tutorial](http://truffleframework.com/tutorials/pet-shop).

## Installation

1. Install Truffle globally.
    ```javascript
    npm install -g truffle
    ```
2. CD into your cloned directory. Run `npm install`

3. Run the development console.
    ```javascript
    truffle develop
    ```

4. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```javascript
    compile
    migrate
    ```

IN A NEW COMMAND LINE-
5. Run the `liteserver` development server (outside the development console) for front-end hot reloading. Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // Serves the front-end on http://localhost:3000
    npm run dev
    ```

**NOTE**: This box is not a complete dapp, but the starting point for the [Pet Shop tutorial](http://truffleframework.com/tutorials/pet-shop). You'll need to complete that for this to function.

## FAQ

* __How do I use this with the EthereumJS TestRPC?__

    It's as easy as modifying the config file! [Check out our documentation on adding network configurations](http://truffleframework.com/docs/advanced/configuration#networks). Depending on the port you're using, you'll also need to update line 16 of `src/js/app.js`.

