import { When } from '@cucumber/cucumber'
import { By, Key } from 'selenium-webdriver'

When(
    /^I create a new todo item "([^"]*)"$/,
    async function (todoName:string) {
        await global.myDriver.findElement(By.xpath("//*/header/input")).sendKeys(todoName, Key.ENTER);
    }
)