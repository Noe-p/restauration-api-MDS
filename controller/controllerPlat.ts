import { Plat } from '../models/plat';

export class ControllerPlat {
  public static async getPlat(req, res) {
    let listePlat = await Plat.getAllPlat();
    res.send(listePlat);
  }

  public static async getOnePlat(req, res) {
    let platId: string = req.params.id;
    let platDetail = await Plat.getOnePlat(platId);
    res.send(platDetail);
  }

  public static async getPlatByType(req, res) {
    let platType: string = req.params.type;
    let platDetail = await Plat.getPlatByType(platType);
    res.send(platDetail);
  }

  public static async insertPlat(req, res) {
    await Plat.insertPlat(req.body);
    res.status(201);
    res.send();
  }

  public static async deletePlat(req, res) {
    let PlatId: string = req.params.id;
    await Plat.deletePlat(PlatId);
    res.status(204);
    res.send();
  }

  public static async updatePlat(req, res) {
    let PlatId: string = req.params.id;
    await Plat.updatePlat(PlatId, req.body);
    res.status(204);
    res.send();
  }
}
