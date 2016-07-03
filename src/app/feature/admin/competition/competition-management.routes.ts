import {RouterConfig} from "@angular/router";
import {CompetitionManagementComponent} from "./competition-management/competition-management.component";
import {CompetitionManagementListComponent} from "./competition-management-list/competition-management-list.component";
import {CompetitionManagementAddComponent} from "./competition-management-add/competition-management-add.component";
import {CompetitionManagementEditComponent} from "./competition-management-edit/competition-management-edit.component";

export const CompetitionManagementRoutes:RouterConfig = [
  {
    path: 'admin/competition-management',
    component: CompetitionManagementComponent,
    children: [
      {
        path: '', // default list
        component: CompetitionManagementListComponent
      },
      {
        path: 'list',
        component: CompetitionManagementListComponent
      },
      {
        path: 'add',
        component: CompetitionManagementAddComponent
      },
      {
        path: 'edit/:id',
        component: CompetitionManagementEditComponent
      },
    ]
  }
];
