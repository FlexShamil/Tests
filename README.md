# Automated-tests


This repositry for automated tests for end-to-end testing of the Flexshopper website (both Production and Beta). 


## Dependencies

[node.js](https://nodejs.org)<br>

[mocha.js](https://mochajs.org/)<br>

[direnv](https://github.com/direnv/direnv)<br>


## Getting Started

To get started, please follow the instructions below:

1. Install Node.js 

2. Install mocha.js globally

    ```
    npm install --global mocha
    ```

3. Install direnv. To install with homebrew:

    ```
    brew update
    brew install direnv
    ```

    If you are using zsh, include the following in your .zshrc...

    ```
    eval "$(direnv hook zsh)"
    ```
    
    ...then run:

    ```
    exec zsh
    ```

4. Clone this repositry and change into the directory

    ```
    git clone https://github.com/FlexShopper/automated-test.git
    cd automated-test/
    ```

5. Install dependencies

    ```
    npm install
    ```

6. Rename the .envrc.sample file as .envrc

    ```
    cp .envrc.sample .envrc
    ```

7. Fill out the environment variables

    * **SAVE\_LINK**: Sets whether to save links to generated lease PDFs to a text file. Set as 'true' or 'false'.
    * **SAVE\_LINK\_PATH**: Path to the text file for storing URLs for generated lease PDFs. Omit the '.txt'.
    * **TEST\_USER\_EMAIL**: Email address of test user to use during tests.
    * **TEST\_USER\_PASSWORD**: Password of test user to use during tests.
    * **SEARCH\_TERM**: Search term to use when searching for a product to lease. Ideally, this is something cheap to avoid reaching the test user's limit, but high enough to lease.
    * **TEST\_ENV**: Environment to run the test in. Set as 'prod' or 'beta'.
    * **ROOT\_DOMAIN\_PROD**: Root domain for the prod environment. This is almost certainly 'http://flexshopper.com'.
    * **ROOT\_DOMAIN\_BETA**: Root domain for the beta environment. This is almost certainly 'http://fmweb-beta.staging.kops.flexint.net/'.

## Running the tests
To run a test, use the following command:

```
mocha <test file name>
```
