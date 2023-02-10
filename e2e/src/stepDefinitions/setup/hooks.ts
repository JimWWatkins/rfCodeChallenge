import { Before, After } from "@cucumber/cucumber"
import { Builder } from 'selenium-webdriver'
import { Options } from 'selenium-webdriver/chrome'
import * as fs from "fs"
    
Before(
    async function() {
        const driver = new Builder();
        const browserOptions = (
            new Options());
            browserOptions.addArguments(
                '--headless',
        );

        global.myDriver = driver.forBrowser("chrome").withCapabilities(browserOptions).build()
        await global.myDriver.manage().window().maximize();
    }
)

After(
    async function(scenario) {
        const scenarioStatus = scenario.result?.status;
        if( scenarioStatus === "FAILED"){
            global.myDriver.takeScreenshot().then(
                (image)=>{
                    fs.writeFileSync(`./src/reports/screenshots/${scenario.pickle.name}.png`, image, "base64");
                }
            )
        }
        await global.myDriver.quit();
        }
)