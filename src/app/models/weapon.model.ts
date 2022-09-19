import { IWeapon } from "../interfaces/iweapon";

export class Weapon implements IWeapon {
    public id: number;
    public model: string;
    public brand_id: number;
    public type_id: number;
    public caliber: string;
    public barrel_length: string;
    public total_length: string;
    public ammunition_storage_type: string;
    public ammunition_storage_capacity: string;
    public picatiny_rail: string;
    public mlok_system: string;
    public action: string;
    public permalink: string;
    public thumbnail: string;
    public images: string[];
  
    constructor(
      id: number,
      model: string,
      brand_id: number,
      type_id: number,
      caliber: string,
      barrel_length: string,
      total_length: string,
      ammunition_storage_type: string,
      ammunition_storage_capacity: string,
      picatiny_rail: string,
      mlok_system: string,
      action: string,
      permalink: string,
      thumbnail: string,
      images: string[]
    ) {
      this.id = id;
      this.model = model;
      this.brand_id = brand_id;
      this.type_id = type_id;
      this.caliber = caliber;
      this.barrel_length = barrel_length;
      this.total_length = total_length;
      this.ammunition_storage_type = ammunition_storage_type;
      this.ammunition_storage_capacity = ammunition_storage_capacity;
      this.picatiny_rail = picatiny_rail;
      this.mlok_system = mlok_system;
      this.action = action;
      this.permalink = permalink;
      this.thumbnail = thumbnail;
      this.images = images;
    }
  }
  