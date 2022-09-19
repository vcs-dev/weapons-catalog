import { Component } from '@angular/core';
import { IWeapon } from '../interfaces/iweapon';
import { Weapon } from '../models/weapon.model';
import { WeaponService } from '../services/weapon.service';

@Component({
  selector: 'app-weapons',
  templateUrl: './weapons.component.html',
  styleUrls: ['./weapons.component.sass']
})
export class WeaponsComponent {
  public weapons: Weapon[] | undefined;

  constructor(private weaponService: WeaponService) {
    this.getWeapons();
  }

  onShowWeaponDetails(event: MouseEvent) {
    console.log(event);
  }

  getWeapons() {
    this.weaponService.getWeapons()
    .subscribe((data: Weapon[]) => this.weapons = { ...data });
    console.log(this.weapons);
  }

}