import { NgModule } from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { PartialsModule } from './partials/partials.module';

import { AppComponent } from './app.component';

import { routing } from './app.routes';

@NgModule({
    imports: [BrowserModule, PartialsModule, routing],
    declarations: [AppComponent],
    bootstrap: [AppComponent],
    providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy}]

})

export class AppModule {
    
}
