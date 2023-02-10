import { Then } from '@cucumber/cucumber'
import { expect } from 'chai'
import { By } from 'selenium-webdriver'

Then(
    /^the todo "([^"]*)" appears last on my todo list$/,
    async function (todoName:string) {
        const todos = await global.myDriver.findElements(By.xpath('//*/li/div'));
        const lastTodo = await todos[todos.length-1].getText();
        expect(await lastTodo).to.equal(todoName);
    }
)

Then(
    /^the todo item gets updated with the new changes "([^"]*)"$/,
    async function (todoName:string) {
        const todos = await global.myDriver.findElements(By.xpath('//*/li/div'));
        let todoEditedIsPresent;
        for(const t in todos){
            if(todos[t].getText() === todoName){
                todoEditedIsPresent = true;
            }
            return todoEditedIsPresent;
        }
        expect(todoEditedIsPresent).to.be.true;
    }
)