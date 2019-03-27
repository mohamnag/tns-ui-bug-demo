import { Component, OnInit } from "@angular/core";

import { Item } from "./item";
import { ItemService } from "./item.service";
import {ListViewEventData} from "nativescript-ui-listview";
import {View} from "tns-core-modules/ui/core/view";

@Component({
    selector: "ns-items",
    moduleId: module.id,
    templateUrl: "./items.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Item>;
    swipedIndex: number = -1;

    // This pattern makes use of Angular’s dependency injection implementation to
    // inject an instance of the ItemService service into this class.
    // Angular knows about this service because it is included in your app’s main NgModule,
    // defined in app.module.ts.
    constructor(private itemService: ItemService) { }

    ngOnInit(): void {
        this.items = this.itemService.getItems();
    }

    onSwipeStarted(args: ListViewEventData) {
        console.log(`onSwipeStarted`);

        const swipeLimits = args.data.swipeLimits;
        const radListView = args.object;
        const leftItem = radListView.getViewById<View>('mark-view');
        const rightItem = radListView.getViewById<View>('delete-view');

        swipeLimits.left = leftItem.getMeasuredWidth();
        swipeLimits.right = rightItem.getMeasuredWidth();
        swipeLimits.threshold = leftItem.getMeasuredWidth() / 2;

        this.swipedIndex = args.index;
    }

    onSwipeEnded(args: ListViewEventData) {
        console.log(`onSwipeEnded`);
        this.swipedIndex = -1;
    }

    mark(args: ListViewEventData): void {
        const item: Item = args.object.bindingContext;
        console.log(`marking ${item.name}`);
        item.marked = !item.marked;
    }
}
