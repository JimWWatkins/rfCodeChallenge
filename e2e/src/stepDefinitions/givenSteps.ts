import { Given } from '@cucumber/cucumber'

Given(
    /^I am a user of todomvc$/,
    async function () {
        await global.myDriver.get("https://todomvc.com/examples/react/#/");
    }
)