import { Given } from '@cucumber/cucumber'
import { Key, By } from 'selenium-webdriver'

Given(
    /^I am a user of todomvc$/,
    async function () {
        await global.myDriver.get("https://todomvc.com/examples/react/#/");
    }
)

Given(
    /^I have created a todo item "([^"]*)"$/,
    async function (todoName:string) {
        await global.myDriver.get("https://todomvc.com/examples/react/#/");
        const todoTextField = await global.myDriver.findElement(By.xpath("/html/body/section/div/header/input")).sendKeys(todoName, Key.ENTER);
    }
)