import {Component, Input, ChangeDetectionStrategy} from "@angular/core";

@Component({
    selector: 'selection-item',
    templateUrl: 'app/selection-item.component/selection-item.component.html',
    styleUrls: ['app/selection-item.component/selection-item.component.css'],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectionItemComponent  {

    /** Public data */
    @Input() selection:Selection;
    
}
