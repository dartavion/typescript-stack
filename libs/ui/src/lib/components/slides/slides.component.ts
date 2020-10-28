import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { slideInAnimation, slider } from '../../animations';

@Component({
  selector: 'typescript-stack-slides',
  templateUrl: './slides.component.html',
  styleUrls: ['./slides.component.scss'],
  animations: [
    // slideInAnimation,
    // slider
  ]
})
export class SlidesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet && outlet.activatedRouteData && outlet.activatedRouteData.animation;
  }

  prev($event: MouseEvent) {

  }

  next($event: MouseEvent) {

  }
}
