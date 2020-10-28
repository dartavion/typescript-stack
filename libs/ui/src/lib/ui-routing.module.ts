import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SlidesComponent } from './components/slides/slides.component';
import { IntroComponent } from './components/intro/intro.component';
import { AngularComponent } from './components/angular/angular.component';
import { NestjsComponent } from './components/nestjs/nestjs.component';
import { SqliteComponent } from './components/sqlite/sqlite.component';
import { StackComponent } from './components/stack/stack.component';
import { NxComponent } from './components/nx/nx.component';
import { PrismaComponent } from './components/prisma/prisma.component';
import { EndComponent } from './components/end/end.component';

const routes: Routes = [
  {
    path: '',
    component: SlidesComponent,
    children: [
      { path: '',   redirectTo: '/intro', pathMatch: 'full' },
      {
        path: 'intro',
        component: IntroComponent,
        data: { animation: 'isLeft' }
      },
      {
        path: 'stack',
        component: StackComponent,
        data: { animation: 'isRight' }
      },
      {
        path: 'nx',
        component: NxComponent,
        data: { animation: 'isLeft' }
      },
      {
        path: 'angular',
        component: AngularComponent,
      },
      {
        path: 'nestjs',
        component: NestjsComponent,
      },
      {
        path: 'prisma',
        component: PrismaComponent,
      },
      {
        path: 'sqlite',
        component: SqliteComponent,
      },
      {
        path: 'end',
        component: EndComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UiRoutingModule { }
