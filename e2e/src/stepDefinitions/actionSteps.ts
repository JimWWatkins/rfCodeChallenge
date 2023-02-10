import { When } from '@cucumber/cucumber'
import { By, Key } from 'selenium-webdriver'

When(
    /^I create a new todo item "([^"]*)"$/,
    async function (todoName:string) {
        await global.myDriver.findElement(By.xpath("//*/header/input")).sendKeys(todoName, Key.ENTER);
    }
)

When(
    /^I edit the todo item "([^"]*)" to "([^"]*)"$/,
    async function (todoName:string, todoNameEdited:string) {
        const todo = await global.myDriver.findElement(By.xpath(`//label[contains(text(),'${todoName}')]`));
        const actions = global.myDriver.actions()
        actions.doubleClick(todo).perform();
        await global.myDriver.findElement(By.className("edit")).sendKeys(todoNameEdited, Key.ENTER);
    }
)