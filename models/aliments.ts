import { Schema } from 'mongoose';
const mongoose = require('mongoose');

const alimentSchema = new Schema({
  nom: String, // String isshorthandfor {type: String}
  type: String,
  quantiteInStock: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

export interface AlimentType {
  nom: string;
  type: string;
  quantiteInStock: number;
}

const AlimentModel = mongoose.model('Aliment', alimentSchema);

export class Aliment {
  public static async getAllAliments(): Promise<any> {
    return new Promise(async (resolve) => {
      let listeAliments: any[] = await AlimentModel.find();
      console.log(listeAliments);
      resolve(listeAliments);
    });
  }

  public static async getOneAliment(id: string): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await AlimentModel.findOne({ _id: id }));
    });
  }

  public static async getAlimentByType(type: string): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await AlimentModel.find({ type: type }));
    });
  }

  public static async insertAliment(body: AlimentType) {
    const aliment = new AlimentModel({
      nom: body.nom,
      type: body.type,
      quantiteInStock: body.quantiteInStock,
      date: new Date(),
    });
    return await aliment.save();
  }

  public static async deleteAliment(id: string): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await AlimentModel.deleteOne({ _id: id }));
    });
  }

  public static async updateAliment(
    id: string,
    body: AlimentType
  ): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await AlimentModel.findOneAndUpdate({ _id: id }, body));
    });
  }
}
