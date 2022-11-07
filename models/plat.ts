import { Schema } from 'mongoose';
const mongoose = require('mongoose');

const platSchema = new Schema({
  nom: String, // String isshorthandfor {type: String}
  aliments: Array,
  image: String,
  prix: Number,
  type: String,
  description: String,
  date: {
    type: Date,
    default: Date.now,
  },
});

export interface PlatType {
  nom: string;
  type: string;
  description: string;
  prix: number;
  image: string;
  aliments: { alimentId: string; quantite: number }[];
}
const PlatModel = mongoose.model('Plat', platSchema);

export class Plat {
  public static async getAllPlat(): Promise<any> {
    return new Promise(async (resolve) => {
      let listePlat: PlatType[] = await PlatModel.find();
      console.log(listePlat);
      resolve(listePlat);
    });
  }

  public static async getOnePlat(id: string): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await PlatModel.findOne({ _id: id }));
    });
  }

  public static async getPlatByType(type: string): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await PlatModel.find({ type: type }));
    });
  }

  public static async insertPlat(body: PlatType) {
    const plat = new PlatModel({
      nom: body.nom,
      quantiteInStock: body.quantiteInStock,
      aliments: body.aliments,
      description: body.description,
      image: body.image,
      prix: body.prix,
      type: body.type,
      date: new Date(),
    });
    return await plat.save();
  }

  public static async deletePlat(id: string): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await PlatModel.deleteOne({ _id: id }));
    });
  }

  public static async updatePlat(id: string, body: PlatType): Promise<any> {
    return new Promise(async (resolve) => {
      resolve(await PlatModel.findOneAndUpdate({ _id: id }, body));
    });
  }
}
