class userController {
  static async getUser(req, res) {
    return res.status(200).json("Api");
  }
}

export default userController;
