const logRegModel = require("../models/admin.model");

class AdminController {
  constructor() {}

  /**
   * @Method showIndex
   * @Description To Show The Index Page / Login Page
   */
  async showIndex(req, res) {
    try {
      res.render("admin/index", {
        title: "Admin || Login",
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @Method dashboard
   * @Description To Show The Dashboard
   */
  async dashboard(req, res) {
    try {
      res.render("admin/dashboard", {
        title: "Admin || Dashboard",
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @Method Register
   * @Description To Show The Register Page
   */
  async register(req, res) {
    try {
      res.render("admin/register", {
        title: "Admin || Registration",
      });
    } catch (err) {
      throw err;
    }
  }

  /**
   * @Method template
   * @Description Basic Template
   */
  async template(req, res) {
    try {
      res.render("admin/template", {
        title: "Admin || Template",
      });
    } catch (err) {
      throw err;
    }
  }
  /**
   * @Method Get Registration
   * @Description To save Registration Data
   */

  async getRegister(req, res) {
    try {
      console.log(req.body);
      if (req.body.password === req.body.confirmPassword) {
        let saveData = await logRegModel.create(req.body);
        if (saveData && saveData._id) {
          console.log("Register.....");
          res.redirect("/");
        } else {
          console.log("Register failed....");
          res.redirect("/");
        }
      } else {
        console.log("Password and Confirm Password should be match");
        res.redirect("/");
      }
    } catch (err) {
      throw err;
    }
  }

  /**
   * @Method Get LogIn
   * @Description To save Log In
   */

  async getLogIn(req, res) {
    try {
      let isUserExsist = await logRegModel.findOne({
        email: req.body.email,
      });
      if(isUserExsist){
        console.log('Log in....');
        res.redirect('/dashboard')
      }else{
        console.log('log in failed...');
      }
    } catch (err) {
      throw err;
    }
  }
}

module.exports = new AdminController();
