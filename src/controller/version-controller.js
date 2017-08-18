

export default class VersionController{


  version = (req, res) => {
    res.status(200).send("1.0");
  }


}
