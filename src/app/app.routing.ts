import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllSubsComponent } from './all-subs/all-subs.component';
import { WoodWorkComponent } from './wood-work/wood-work.component';
import { CookingComponent } from './cooking/cooking.component';
import { HikingComponent } from './hiking/hiking.component';
import { GamingComponent } from './gaming/gaming.component';

const appRoutes: Routes = [
  {
    path: '',
    component: AllSubsComponent
  },
  {  path: 'Wood-Working',
    component: WoodWorkComponent
  },
  {  path: 'Cooking',
    component: CookingComponent
  },
  {  path: 'Hiking',
    component: HikingComponent
  },
  {  path: 'Gaming',
    component: GamingComponent
  },
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
