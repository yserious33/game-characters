import { Component } from '@angular/core';
import { CharacterItemComponent } from './component.character-item';



export class Character {
  name: string;
  firstApp: string;
  franchise: string;
  shortname: string;
  allies: string;
  bio: string;
}


@Component({
  selector: 'my-app',
  templateUrl: 'pages/app.html',
  styleUrls: ['css/app.css']
})

export class AppComponent {
  characters = CHARACTERS;
  currentCharacter: Character;


  showCharacter(item) {
    this.currentCharacter = item;
  }
}

var CHARACTERS: Character[] = [
  {
    "name":"Crash Bandicoot",
    "firstApp":"1996",
    "franchise": "Crash Bandicoot",
    "shortname":"crash",
    "allies":"Tawna Bandicoot",
    "bio":"Anthropomorphic bandicoot whose quiet life on Wumpa Island is often interrupted by Doctor Neo Cortex, who created Crash and now wants him dead. In most games, Crash must defeat Cortex and foil his plans for world domination."
  }, {
    "name":"Lara Croft",
    "firstApp":"1996",
    "franchise": "Tomb Raider",
    "shortname":"laracroft",
    "allies":"Winston Smith and Kurtis Trent",
    "bio":"Beautiful, intelligent, and athlethic English archaeologist-adventurer who ventures into ancient, hazardous tombs and ruins around the world. Fluent in many languages and fighting styles, she's one female not to be taken lightly."
  }, {
    "name":"Kratos",
    "firstApp":"2005",
    "franchise": "God of War",
    "shortname":"kratos",
    "allies":"Athena and Gaia",
    "bio":"Spartan warrior who embarks on a series of adventures in attempts to avert disaster or to change his fate. Storylines loosely based on Greek Mythology. Vengence is usually a central theme, which is questionable behavior for a supposed protagonist."
  }, {
    "name":"Mario",
    "firstApp":"1981",
    "franchise": "Super Mario",
    "shortname":"mario",
    "allies":"Luigi and Yoshi",
    "bio":"Short, pudgy plumber who lives in Mushroom Kingdom. His adventures generally center upon rescuing Princess Peach from Koopa villain Bowser. Has commonly been mistaken in pop culture for breaking bricks with head, when in fact, he punches through them. "
  }, {
    "name":"Pac-Man",
    "firstApp":"1980",
    "franchise": "PAC-MAN",
    "shortname":"pacman",
    "allies":"Mrs. Pacman",
    "bio":"Spherical character who players control through a maze, in which the objective is to eat pac-dots. He must also avoid touching his four enemies, named Blinky, Pinky, Inky, and Clyde. Power pellets give him the ability to eat his enemies. "
  }, {
    "name":"Master Chief",
    "firstApp":"2001",
    "franchise": "Halo",
    "shortname":"masterchief",
    "allies":"Cortana and comrades",
    "bio":"A towering and faceless biochemically and cybernetically-enhanced supersoldier, who was raised and trained from an early age to be a weapon. He is almost never seen without his green-colored armor and helmet. He is commonly referred to by his naval rank, 'Chief', rather than his given birth-name or serial-designation. "
  }, {
    "name":"Fox McCloud",
    "firstApp":"1993",
    "franchise": "Star Fox",
    "shortname":"starfox",
    "allies":"Falco Lombardi, Peppy Hare and Slippy Toad",
    "bio":" Part of an elite mercenary Star Fox team to defeat Andross, a scientist, who has fled to Planet Venom after being banished from Planet Corneria. Star Fox uses a prototype high-performance fighter aircraft called 'star fox voyager'. Game differs from most shooter games, as it is a rail shooter in a third-person and first-person 3D perspective."
  }, {
    "name":"Sonic the Hedgehog",
    "firstApp":"1991",
    "franchise": "Sonic the Hedgehog",
    "shortname":"sonic",
    "allies":"Tails, Knuckles, and Amy Rose",
    "bio":"Anthropomorphic blue hedgehog whose peaceful life is often interrupted by the series' main antagonist, Doctor Eggman. Typically, Sonic, and usually along with some of his friends, must stop Eggman and foil any plans of world domination. The games focused on Sonic's ability to run and jump at high speeds with the use of springs, checkpoints, and loops. "
  }, {
    "name":"Link",
    "firstApp":"1986",
    "franchise":"The Legend of Zelda",
    "shortname":"link",
    "allies":"Zelda and Navi",
    "bio":" Depicted as a child, teenager, or young adult of the Hylian race. Originates from the fictional land of Hyrule. Link often travels through Hyrule, defeating creatures, evil forces, and the series' primary antagonist, Ganon, while attempting to save Princess Zelda and Hyrule. To defeat Ganon, Link usually requires the mystic Master Sword, or a similar legendary weapon, obtained after many trials and battles."
  }
]
