import { Route } from '@angular/router';
import { Example1Component } from './Example1/example1.component';
import { Example2Component } from './Example2/example2.component';
import { Example3Component } from './Example3/example3.component';
import { Example4Component } from './Example4/example4.component';

export const appRoutes: Route[] = [
    {
        path: 'example-1',
        component: Example1Component,
    },
    {
        path: 'example-2',
        component: Example2Component,

    },
    {
        path: 'example-3',
        component: Example3Component,
    },
    {
        path: 'example-4',
        component: Example4Component,
    },
    {
        path: '',
        redirectTo: '/example-1',
        pathMatch: 'full',
    }
];
