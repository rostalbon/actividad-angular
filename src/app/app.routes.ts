import { Routes } from '@angular/router';
import { About } from './about/about';
import { Projects } from './projects/projects';
import { Contact } from './contact/contact';
import { Main } from './main/main';

export const routes: Routes = [
    {path:"about", component:About},
    {path:"projects", component:Projects},
    {path:"contact", component:Contact},
    {path:"main", component:Main}
];
