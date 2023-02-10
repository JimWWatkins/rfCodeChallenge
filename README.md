# rfCodeChallenge

## How to run tests:
    1.  Clone repro
    2.  cd to repro location
    3.  cd codeChallenge/e2e
    4.  yarn run cucumber (optionally run cucumber:smoke or cucumber:regression for tagged scenarios)

## Things I would refactor:
    1. Most importantly the ability add data-test-id's to elements I need to interact with.  This can make a huge
    increase in test reliability as its not dependent on DOM structure, or attributes that could change in the future.
    2. Create helper functions to reduce the need for waits/timeouts/etc. and ensure tests reliability
    3. With more tests employ the page object pattern and have Given/When/Then methods on each corresonding page.
