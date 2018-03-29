Westside Blockchain slides: https://docs.google.com/presentation/d/1IhtHU9m94zeoiMBvVjFeoPcxc8VbbE-2U6rdACGHSrk/edit?usp=sharing

# truffle-petshop-tutorial-complete
Finished Petshop Tutorial modified Readme File below
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
    
 6. Install MetaMask - https://chrome.google.com/webstore/detail/metamask/nkbihfbeogaeaoehlefnkodbefgpgknn?hl=en
 
 7. In metamask, top left corner, Connect to your local blockchain server - http://127.0.0.1:9545/
 
 8. Get one of generated private keys from truffle develop. Use switch accounts on metamasm and add the private key from the truffle develop console.


## FAQ

* __How do I use this with the EthereumJS TestRPC?__

    It's as easy as modifying the config file! [Check out our documentation on adding network configurations](http://truffleframework.com/docs/advanced/configuration#networks). Depending on the port you're using, you'll also need to update line 16 of `src/js/app.js`.

