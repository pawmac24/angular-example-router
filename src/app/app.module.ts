import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CrisisListComponent } from './crisis-list.component';
import { HeroesListComponent } from './heroes-list.component';

import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'crisis-list', component: CrisisListComponent },
      { path: 'heroes-list', component: HeroesListComponent },
      { path: '', redirectTo: '/heroes-list', pathMatch: 'full' },
      { path: '**', component: PageNotFoundComponent }
    ])
  ],
  declarations: [AppComponent, CrisisListComponent, HeroesListComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
