import { Aliment } from '../models/aliments';

export class ControllerAliment {
  public static getPlat(res: any, req: any) {
    throw new Error('Method not implemented.');
  }

  public static async getAliments(req, res) {
    let listeAliments = await Aliment.getAllAliments();
    res.send(listeAliments);
  }

  public static async getOneAliments(req, res) {
    let alimentId: string = req.params.id;
    let alimentDetail = await Aliment.getOneAliment(alimentId);
    res.send(alimentDetail);
  }
  public static async getAlimentsByType(req, res) {
    let alimentType: string = req.params.type;
    let alimentDetail = await Aliment.getAlimentByType(alimentType);
    res.send(alimentDetail);
  }

  public static async insertAliment(req, res) {
    await Aliment.insertAliment(req.body);
    res.status(201);
    res.send();
  }

  public static async deleteAliment(req, res) {
    let alimentId: string = req.params.id;
    await Aliment.deleteAliment(alimentId);
    res.status(204);
    res.send();
  }

  public static async updateAliment(req, res) {
    let alimentId: string = req.params.id;
    await Aliment.updateAliment(alimentId, req.body);
    res.status(204);
    res.send();
  }
}
