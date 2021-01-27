import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AddComponent} from './add/add.component';
import {EditComponent} from './edit/edit.component';
import {DetailComponent} from './detail/detail.component';
import {MainComponent} from './main/main.component';
import {NotfoundComponent} from './notfound/notfound.component';
const routes = [
{
	path:'add',
	component:AddComponent
},
{
path:'edit/:id',
component:EditComponent
},
{
	path:'detail/:id',
	component:DetailComponent
},
{
	path:'',
	component:MainComponent
},
{
	path:'**',
	component:NotfoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
