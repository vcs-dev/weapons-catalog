import { Component, OnInit } from '@angular/core';
import { IWeapon } from '../interfaces/iweapon';

@Component({
  selector: 'app-weapon',
  templateUrl: './weapon.component.html',
  styleUrls: ['./weapon.component.sass']
})
export class WeaponComponent implements OnInit {
  public weapon: Weapon | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}

class Weapon implements IWeapon {
  id: number = 0;
  model: string = "";
  brand_id: number = 0;
  type_id: number = 0;
  caliber: string = "";
  barrel_length: string = "";
  total_length: string = "";
  ammunition_storage_type: string = "";
  ammunition_storage_capacity: string = "";
  picatiny_rail: string = "";
  mlok_system: string = "";
  action: string = "";
  permalink: string = "";
  thumbnail: string = "";
  images: string[] = [];
}
