// imports necesarios
import { ModuleWithProviders } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//importar componentes
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { ErrorComponent } from "./components/error/error.component";
import { HomeComponent } from "./components/home/home.component";

// Definir las rutas
const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  { path: "inicio", component: HomeComponent },
  { path: "login", component: LoginComponent },
  { path: "registro", component: RegisterComponent },
  { path: "**", component: ErrorComponent }
];

// Exportar configuracion de las rutas
export const appRoutingProviders: any = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);