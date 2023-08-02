import FullList from "../model/FullList"

interface DOMList {
    ul: HTMLUListElement,
    clear(): void,
    render(fullList: FullList): void,
}

export default class ListTemplate implements DOMList {

    ul: HTMLUListElement

    static instance: ListTemplate = new ListTemplate()

    private constructor() {
        this.ul = document.getElementById("listItems") as HTMLUListElement
    }

    clear(): void {
        this.ul.innerHTML = ''
    }
    // Hier wird mit "clear" die komplette Liste mit einem leeren string gesetzt.

    render(fullList: FullList): void {
        this.clear()
        // Bevor etwas angezeigt wird, wird die Ausgabe komplett gelöscht, denn es sollen ja keine Duplikate der Liste erstellt werden.

        fullList.list.forEach(item => {
            const li = document.createElement("li") as HTMLLIElement
            li.className = "item"
            // Durch den Befehl ".forEach" wird angegeben, das jeder Usereintrag einem eigenen "li" (Listelement) zugewieseen wird.

            const check = document.createElement("input") as HTMLInputElement
            check.type = "checkbox"
            check.id = item.id
            check.checked = item.checked
            li.append(check)
            // Hier wird die checkbox initialisiert, in der später die Usereingaben erfolgen.
            // Mit dem ".append" Befehl wird der Liste jeweils ein neuer ToDo-Eintrag hinzugefügt.

            check.addEventListener('change', () => {
                item.checked = !item.checked
                fullList.save()
            })

            const label = document.createElement("label") as HTMLLabelElement
            label.htmlFor = item.id
            label.textContent = item.item
            li.append(label)

            const button = document.createElement("button") as HTMLButtonElement
            button.className = 'button'
            button.textContent = 'X'
            li.append(button)
            // Um jeden einzelnen Listenpunkt löschen zu können, wird ein Button mit der Aufschrift "X" definiert.

            button.addEventListener('click', () => {
                fullList.removeItem(item.id)
                this.render(fullList)
            })
            // Der "addEventListener" wartet nun darauf das der oben definierte Button geklickt wird, um dann die Funktion "löschen dieses Eintrages" durch zu führen.

            this.ul.append(li)
            // Wo sollen diese Aufgaben ausgeführt werden? In der HTML-Index-Datei ist eine UL definiert worden. In dieser gibt es die jeweiligen LI Einträge. Dies wird hier dieser UL zugewiesen.
        })
    }
}