

class HomePage {
  lblProducts = '#header_container > div.header_secondary_container > span';


  async isProductsPresent(){
    await page.waitForTimeout(5000);
    await page.waitForSelector(this.lblProducts);
    return await page.isVisible(this.lblProducts);
  }

}
module.exports = {HomePage};
