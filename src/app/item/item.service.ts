import {Injectable} from "@angular/core";

import {Item} from "./item";

@Injectable({
    providedIn: "root"
})
export class ItemService {
    private items = new Array<Item>(
        {id: 1, name: "Ter Stegen", role: "Goalkeeper", marked: false},
        {id: 3, name: "Piqué", role: "Defender", marked: false},
        {id: 4, name: "I. Rakitic", role: "Midfielder", marked: false},
        {id: 5, name: "Sergio", role: "Midfielder", marked: false},
        {id: 6, name: "Denis Suárez", role: "Midfielder", marked: false},
        {id: 7, name: "Arda", role: "Midfielder", marked: false},
        {id: 8, name: "A. Iniesta", role: "Midfielder", marked: false},
        {id: 9, name: "Suárez", role: "Forward", marked: false},
        {id: 10, name: "Messi", role: "Forward", marked: false},
        {id: 11, name: "Neymar", role: "Forward", marked: false},
        {id: 12, name: "Rafinha", role: "Midfielder", marked: false},
        {id: 13, name: "Cillessen", role: "Goalkeeper", marked: false},
        {id: 14, name: "Mascherano", role: "Defender", marked: false},
        {id: 17, name: "Paco Alcácer", role: "Forward", marked: false},
        {id: 18, name: "Jordi Alba", role: "Defender", marked: false},
        {id: 19, name: "Digne", role: "Defender", marked: false},
        {id: 20, name: "Sergi Roberto", role: "Midfielder", marked: false},
        {id: 21, name: "André Gomes", role: "Midfielder", marked: false},
        {id: 22, name: "Aleix Vidal", role: "Midfielder", marked: false},
        {id: 23, name: "Umtiti", role: "Defender", marked: false},
        {id: 24, name: "Mathieu", role: "Defender", marked: true},
        {id: 25, name: "Masip", role: "Goalkeeper", marked: true}
    );

    getItems(): Array<Item> {
        return this.items;
    }

    getItem(id: number): Item {
        return this.items.filter((item) => item.id === id)[0];
    }
}
