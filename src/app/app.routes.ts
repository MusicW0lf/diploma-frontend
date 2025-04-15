import { Routes } from '@angular/router';
import { AlgorithmComponent } from './algorithm/algorithm.component';
import { RegistrationComponent } from './registration/registration.component';
import { LessonsComponent } from './lessons/lessons.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { LaboratoryEditorComponent } from './laboratory-editor/laboratory-editor.component';
import { UserComponent } from './user/user.component';
import { AuthGuard } from './registration/auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: AlgorithmComponent
    },
    {
        path: 'auth',
        component: RegistrationComponent
    },
    {
        path: 'lessons',
        component: LessonsComponent
    },
    {
        path: 'subscription',
        component: SubscriptionComponent
    },
    {
        path: 'laboratory',
        component: LaboratoryComponent, 
        canActivate: [AuthGuard]
    },
    {
        path: 'project/:id',
        component: LaboratoryEditorComponent,
        canActivate: [AuthGuard]
    },
    {
        path: 'profile',
        component: UserComponent,
        canActivate: [AuthGuard]
    },
];
