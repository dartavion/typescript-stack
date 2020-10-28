import { NgModule } from '@angular/core';
import { SlidesComponent } from './components/slides/slides.component';
import { UiRoutingModule } from './ui-routing.module';
import { MaterialModule } from '@typescript-stack/material';
import { IntroComponent } from './components/intro/intro.component';
import { StackComponent } from './components/stack/stack.component';
import { AngularComponent } from './components/angular/angular.component';
import { NestjsComponent } from './components/nestjs/nestjs.component';
import { PrismaComponent } from './components/prisma/prisma.component';
import { SqliteComponent } from './components/sqlite/sqlite.component';
import { NxComponent } from './components/nx/nx.component';
import { EndComponent } from './components/end/end.component';
import { ExampleComponent } from './components/example/example.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, UiRoutingModule, MaterialModule, ReactiveFormsModule],
  declarations: [SlidesComponent, IntroComponent, StackComponent, AngularComponent, NestjsComponent, PrismaComponent, SqliteComponent, NxComponent, EndComponent, ExampleComponent],
})
export class UiModule {}
