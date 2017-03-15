import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CharacterItemComponent } from './component.character-item';
import { CharacterDetailsComponent } from './component.character-details';

import { SearchPipe } from './pipe.search';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
   declarations: [
    AppComponent, CharacterItemComponent, CharacterDetailsComponent, SearchPipe
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
