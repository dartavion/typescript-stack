import { Component, OnInit } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'typescript-stack-stack',
  templateUrl: './stack.component.html',
  styleUrls: ['./stack.component.scss']
})
export class StackComponent implements OnInit {

  constructor(iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIcon(
      'nx',
      sanitizer.bypassSecurityTrustResourceUrl('assets/nx-logo-white.svg'));
    iconRegistry.addSvgIcon(
      'angular',
      sanitizer.bypassSecurityTrustResourceUrl('assets/angular-icon.svg'));
    iconRegistry.addSvgIcon(
      'prisma',
      sanitizer.bypassSecurityTrustResourceUrl('assets/prisma-3.svg'));
    iconRegistry.addSvgIcon(
      'nestjs',
      sanitizer.bypassSecurityTrustResourceUrl('assets/nestjs.svg'));
    iconRegistry.addSvgIcon(
      'sqlite',
      sanitizer.bypassSecurityTrustResourceUrl('assets/sqlite.svg'));
  }

  ngOnInit(): void {
  }

}
