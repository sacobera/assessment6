import { Builder, Capabilities, By } from "selenium-webdriver"

const chromedriver = require('chromedriver')

const driver = new Builder().withCapabilities(Capabilities.chrome()).build()

beforeAll(async () => {
    await driver.get('http://localhost:4000')
})

afterAll(async () => {
    await driver.quit()
})

test('I can start a game', async () => {

    let button = await (await driver).findElement(By.id('start-game'));
    await button.click();
    
});

test('Check that clicking the upper left square adds an X to the square', async () => {

    let upperLeftSquare = await (await driver).findElement(By.id('cell-0'));
    //await driver.sleep(5000)
    upperLeftSquare.click();
    
    //await driver.sleep(5000)
    expect(await upperLeftSquare.getText()).toEqual('X');

});


test('Check that clicking the upper right square adds an X to the square.', async () => {

    let upperRightSquare = await (await driver).findElement(By.id('cell-2'));
    // await driver.sleep(5000)
    upperRightSquare.click();
    
    // await driver.sleep(5000)
    
    expect(await upperRightSquare.getText()).toEqual('X')
});

test('Check that clicking the lower right square adds an X to the square.', async () => {

    let lowerRightSquare = await (await driver).findElement(By.id('cell-8'));
    // await driver.sleep(5000)
    lowerRightSquare.click();
    
    // await driver.sleep(5000)
    
    expect(await lowerRightSquare.getText()).toEqual('X');
});
