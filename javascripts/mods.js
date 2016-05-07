'use strict';

var MasterBattleDome = (function(Battledome) {

  /////////////////////////////////////
  ///    Modifications Base Code    ///
  /////////////////////////////////////
  Battledome.Armory.Mod = () => {
    this.name = "Factory";

    this.health = this.health;

    this.defense = this.defense;
    this.strength = this.strength;
    this.evasion = this.evasion;

    this.toString = () => return this.name;
  };

  /////////////////////////
  //   Library of Mods   //
  /////////////////////////
  Battledome.Armory.Industrial = () => {
    this.name = "Industrial";

    this.defense = this.defense + 15;
  };

  Battledome.Armory.Industrial.prototype = new Battledome.Armory.Mod();

  Battledome.Armory.Cordless = () => {
    this.name = "Cordless";

    this.evasion = this.evasion + 15;
  };

  Battledome.Armory.Cordless.prototype = new Battledome.Armory.Mod();

  Battledome.Armory.HighPerformance = () => {
    this.name = "High Performance";

    this.strength = this.strength + 15;
  };

  Battledome.Armory.HighPerformance.prototype = new Battledome.Armory.Mod();

  Battledome.Armory.CommercialUse = () => {
    this.name = "Commercial Use";

    this.health = this.health + 30;
  };

  Battledome.Armory.CommercialUse.prototype = new Battledome.Armory.Mod();

  Battledome.Armory.Custom = () => {
    this.name = "Custom";

    this.defense = this.defense + 8;
    this.evasion = this.evasion + 8;
  };

  Battledome.Armory.Custom.prototype = new Battledome.Armory.Mod();

  Battledome.Armory.SpecialEdition = () => {
    this.name = "Special Edition";

    this.strength = this.strength + 8;
    this.health = this.health + 10;
  };

  Battledome.Armory.SpecialEdition.prototype = new Battledome.Armory.Mod();

  return Battledome;

}) (MasterBattleDome || {});
