import { Routes } from '@angular/router';
import { AlgorithmComponent } from './algorithm/algorithm.component';
import { RegistrationComponent } from './registration/registration.component';
import { LessonsComponent } from './lessons/lessons.component';
import { SubscriptionComponent } from './subscription/subscription.component';
import { LaboratoryComponent } from './laboratory/laboratory.component';
import { LaboratoryEditorComponent } from './laboratory-editor/laboratory-editor.component';

export const routes: Routes = [
    {
        path: '',
        component: AlgorithmComponent
    },
    {
        path: 'authentication',
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
        component: LaboratoryComponent
    },
    {
        path: 'editor',
        component: LaboratoryEditorComponent
    }
];
