import ListItem from './ListItem'

interface List {
    list: ListItem[],
    load(): void,
    save(): void,
    clearList(): void,
    addItem(itemObj: ListItem): void,
    removeItem(id: string): void,
}

export default class FullList implements List {

    static instance: FullList = new FullList()

    private constructor(private _list: ListItem[] = []) { }

    get list(): ListItem[] {
        return this._list
    }

    load(): void {
        const storedList: string | null = localStorage.getItem("myList")
        if (typeof storedList !== "string") return
        // Wenn die neue Usereingabe kein "string" ist, bricht der if-loop ab.

        const parsedList: { _id: string, _item: string, _checked: boolean }[] = JSON.parse(storedList)
        // Hier wird in der Variablen "parsedList" die User-Eingabe in ein JSON lesbares Format umgewandelt.

        parsedList.forEach(itemObj => {
            const newListItem = new ListItem(itemObj._id, itemObj._item, itemObj._checked)
            FullList.instance.addItem(newListItem)
        })
        // Durch den Zusatz ".forEach" werden der Variablen "parsedList" alle vorhandenen Eingaben aufgelistet.
    }

    save(): void {
        localStorage.setItem("myList", JSON.stringify(this._list))
    }
    // Mit "save" werden alle items welche in zeile 3 ( interface list) definiert wurden im localstarage gespeichert.

    clearList(): void {
        this._list = []
        this.save()
    }
    // Mit "clearList" werden alle items mit einem Befehl gelöscht.

    addItem(itemObj: ListItem): void {
        this._list.push(itemObj)
        this.save()
    }
    // Mit "addItem" wird ein einzelnes Item durch den Befehl ".push" der Liste hinzugefügt.

    removeItem(id: string): void {
        this._list = this._list.filter(item => item.id !== id)
        this.save()
    }
    // Mit "removeItem" wird ein einzelnes Item aus der gesamten Liste gelöscht. Es wird über den Befehl ".filter" der Liste der dazu gehörende Eintrag gesucht und gelöscht. 
}