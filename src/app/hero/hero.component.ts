/* Use ngOnInit() (lifecycle hook) for two main reasons:

  To perform complex initializations shortly after construction.
  To set up the component after Angular sets the input properties.*/

/* Angular bootstrap process consists of the two major stages:

1.constructing components tree
2.running change detection */


import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  heroes = HEROES;

  selectedHero: Hero;

 /*  Use the constructor to initialize class members and for dependency injection. 
  Use ngOnInit for initialization work. */
  ngOnInit() {
 
    // called on demand by Angular
    console.log("ngOnInit is called after constructor");
  
    }
  constructor() { 
     /*  this is called by the JavaScript engine
  rather than Angular */

  /* TypeScript allows us to tell Angular what
   dependencies we require to be mapped against a specific property */

   console.log("constructor is called before ngOnInit");
 }

 

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}

/* methodName(variable: Class): returnType {
  // your code here
} */



/* 

ngOnInit is purely there to give us a signal that Angular has finished initialising the component.

This phase includes the first pass at Change Detection against the properties
 that we may bind to the component itself - such as using an @Input() decorator.

Due to this, the @Input() properties are available inside ngOnInit,
 however are undefined inside the constructor, by design. */