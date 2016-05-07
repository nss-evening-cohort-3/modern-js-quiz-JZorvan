'use strict';

var MasterBattledome = (function(Battledome) {

  //////////////////////////////
  ///    Weapon Base Code    ///
  //////////////////////////////
  Battledome.Armory = {};
  Battledome.Armory.Weapon = () => {
    this.name = "Malfunction";
    this.damage = 0;

    this.toString = () => return this.name;
  };
  ////////////////////////
  // Library of Attacks //
  ////////////////////////
  Battledome.Armory.BladeWheel = () => {
    this.name = "Blade Wheel";
    this.damage = Math.random() * (20 - 15) + 15;
  };

  Battledome.Armory.BladeWheel.prototype = new Battledome.Armory.Weapon();

  Battledome.Armory.ElectricalFire = () => {
    this.name = "Electrical Fire";
    this.damage = Math.random() * (20 - 15) + 15;
  };

  Battledome.Armory.ElectricalFire.prototype = new Battledome.Armory.Weapon();

  Battledome.Armory.ShockCannon = () => {
    this.name = "Shock Cannon";
    this.damage = Math.random() * (25 - 12) + 12;
  };

  Battledome.Armory.ShockCannon.prototype = new Battledome.Armory.Weapon();

  Battledome.Armory.AftermarketLaser = () => {
    this.name = "Aftermarket Laser";
    this.damage = Math.random() * (35 - 7) + 7;
  };

  Battledome.Armory.AftermarketLaser.prototype = new Battledome.Armory.Weapon();

  Battledome.Armory.HeatRay = () => {
    this.name = "Heat Ray";
    this.damage = Math.random() * (30 - 10) + 10;
  };

  Battledome.Armory.HeatRay.prototype = new Battledome.Armory.Weapon();

  Battledome.Armory.ProjectileScythe = () => {
    this.name = "Projectile Scythe";
    this.damage = Math.random() * (25 - 12) + 12;
  };

  Battledome.Armory.ProjectileScythe.prototype = new Battledome.Armory.Weapon();

  Battledome.Armory.BladeWheel = () => {
    this.name = "Blade Wheel";
    this.damage = Math.random() * (30 - 10) + 10;
  };

  Battledome.Armory.BladeWheel.prototype = new Battledome.Armory.Weapon();

  Battledome.Armory.ExtensionCord = () => {
    this.name = "Extension Cord";
    this.damage = Math.random() * 17 - 14) + 14;
  };

  Battledome.Armory.ExtensionCord.prototype = new Battledome.Armory.Weapon();

  Battledome.Armory.ExtendedWarranty = () => {
    this.name = "Extended Warranty";
    this.damage = Math.random() * (35 - 5) + 5;
  };

  Battledome.Armory.ExtendedWarranty.prototype = new Battledome.Armory.Weapon();

  return Battledome;

}) (MasterBattledome || {});
