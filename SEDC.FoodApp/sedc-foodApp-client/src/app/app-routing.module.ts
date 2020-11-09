import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';

const routes: Routes = [
    { path:'', redirectTo:'/home', pathMatch:'full' },
    { path:'home', component: HomeComponent },
    { path:'admin-panel', component: AdminPanelComponent },
    { path:'restaurant-details/:id', component: RestaurantDetailsComponent }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }