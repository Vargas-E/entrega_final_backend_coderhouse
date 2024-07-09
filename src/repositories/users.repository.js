const UserModel = require("../models/user.model.js");

class UserRepository {
  async findByEmail(email) {
    try {
      return await UserModel.findOne({ email });
    } catch (error) {
      throw error;
    }
  }

  async findById(id) {
    try {
      return await UserModel.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async getUsers() {
    try {
      return await UserModel.find();
    } catch (err) {
      throw err;
    }
  }

  async deleteUserById(id) {
    try {
      await ProductModel.findByIdAndDelete(id);
    } catch (err) {
      throw err;
    }
  }
}

module.exports = UserRepository;
