import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { WeaponsComponent } from './weapons/weapons.component';

const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'weapons', component: WeaponsComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { };