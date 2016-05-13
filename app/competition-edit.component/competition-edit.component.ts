import {Component, OnInit, OnDestroy} from "@angular/core";
// import {Router} from "@angular/router";
import {Router, RouteParams} from '@angular/router-deprecated'; // TODO this will change
import {CompetitionsService} from "../core/services/CompetitionsService";
import {Competition} from "../core/domain/Competition";
import {Selection} from "../core/domain/Selection";
import {SelectionsListComponent} from "../selections-list.component/selections-list.component";
import {SelectionsService} from "../core/services/SelectionsService";
import {Subscription} from "rxjs/Subscription";
import {CompetitionStatusComponent} from "../competition-status.component/competition-status.component";
import {SelectionAddComponent} from "../selection-add.component/selection-add.component";


@Component({
    selector: 'competition-edit',
    templateUrl: 'app/competition-edit.component/competition-edit.component.html',
    styleUrls: ['app/competition-edit.component/competition-edit.component.css'],
    directives: [
        SelectionsListComponent,
        CompetitionStatusComponent,
        SelectionAddComponent
    ]
})
export class CompetitionEditComponent implements OnInit, OnDestroy {

    /** Public data */
    competition:Competition;
    selections:Selection[];
    newSelection:Selection;

    private _selectionsSubscription:Subscription;

    constructor(private _router:Router,
                private _routeParams:RouteParams,
                private _competitionsService:CompetitionsService,
                private _selectionsService:SelectionsService) {
        // Subscribe an changes which may happen
        this._selectionsSubscription = this._selectionsService.selectionsChanged$.subscribe((selections) => {
            this.selections = selections;
        });
    }

    deleteCompetition(competition) {
        this._competitionsService.deleteCompetition(competition._id)
            .subscribe(() => {
                this._router.navigate(['AdminCompetitionDashboard']);
            })
    }

    ngOnInit():any {
        var competitionId:string = this._routeParams.get('competitionId');
        this._competitionsService.findCompetition(competitionId)
            .subscribe(
                (data:Competition) => {
                    this.competition = data;
                },
                (err) => console.error(err),
                () => console.log('Loaded competition', this.competition)
            );
    }

    ngOnDestroy():any {
        this._selectionsSubscription.unsubscribe(); // prevent memory leak when component destroyed
    }
}
