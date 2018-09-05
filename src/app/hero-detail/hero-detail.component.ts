import { Component, OnInit,Input } from '@angular/core';
import { Hero } from '../hero';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

}
/* 
An Input property is a settable property annotated with an @Input decorator. 
Values flow into the property when it is data bound with a property binding

An Output property is an observable property annotated with an @Output decorator.
The property almost always returns an Angular EventEmitter. 
Values flow out of the component as events bound with an event binding.
 */