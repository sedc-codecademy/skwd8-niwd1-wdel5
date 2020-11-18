import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/admin-panel/admin-panel.component';
import { HomeComponent } from './components/home/home.component';
import { RestaurantDetailsComponent } from './components/restaurant-details/restaurant-details.component';
import { RestaurantMenuComponent } from './components/restaurant-menu/restaurant-menu.component';
import { RestaurantsComponent } from './components/restaurants/restaurants.component';
import { LoginComponent } from './user/login/login.component';
import { RegisterComponent } from './user/register/register.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [
    { path:'', redirectTo:'/home', pathMatch:'full' },
    { path:'home', component: HomeComponent },
    { path:'admin-panel', component: AdminPanelComponent },
    { path:'restaurant-details/:id', component: RestaurantDetailsComponent },
    { path:'restaurants', component: RestaurantsComponent},
    { path:'restaurants/restaurant-menu/:id', component: RestaurantMenuComponent},
    {
        path: 'user', component: UserComponent,
        children: [
            { path:'register', component: RegisterComponent },
            { path:'login', component: LoginComponent },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }