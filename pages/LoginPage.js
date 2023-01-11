
class LoginPage {
  txtUserName= '[name="user-name"]';
  txtPassword= '[name="password"]';
  btnLogin= '#login-button';


  async navigateToApplication(){
    await page.goto("https://www.saucedemo.com/");
  }

  async enterCredentialsAndLogin(){
    await page.fill(this.txtUserName,'standard_user');
    await page.fill(this.txtPassword,'secret_sauce');
    await page.click(this.btnLogin);
}


}
module.exports = {LoginPage};
