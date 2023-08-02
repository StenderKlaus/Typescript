import './CSS/style.css'
import FullList from './model/FullList'
import ListItem from './model/ListItem'
import ListTemplate from './templates/ListTemplate'

const initApp = (): void => {
  const fullList = FullList.instance
  const template = ListTemplate.instance

  // Add listener to new entry form submit
  const itemEntryForm = document.getElementById("itemEntryForm") as HTMLFormElement

  itemEntryForm.addEventListener("submit", (event: SubmitEvent): void => {
    event.preventDefault()

    // Get the new item value
    const input = document.getElementById("newItem") as HTMLInputElement
    const newEntryText: string = input.value.trim()
    if (!newEntryText.length) return

    // Berechnen der ID
    const itemId: number = fullList.list.length
      ? parseInt(fullList.list[fullList.list.length - 1].id) + 1
      : 1
      // Die erforderliche ID wird hier erstellt. Es wird die "fullList-Länge minus 1 abgefragt" und zu diesem Wert bei einem neuen User-Beitrag 1 zur ID addiert. Wenn jedoch noch kein Eintrag existiert, starten wir mit dem Befehl " : 1" automatisch mit der ID = 1.

    
    const newItem = new ListItem(itemId.toString(), newEntryText)
    // Erstellen einer neuen Eingabe

    fullList.addItem(newItem)
    // Füge der gesamten Liste einen neuen Beitrag hinzu.
    
    template.render(fullList)
  })
  // Re-render die neue Liste inclusive der neuen User Eingabe.

  const clearItems = document.getElementById("clearItemsButton") as HTMLButtonElement

  clearItems.addEventListener('click', (): void => {
    fullList.clearList()
    template.clear()
  })
  // Nutze den vorhandenen "Clear-Button" zum löschen


  fullList.load()
  // lade die gesamte Liste

  template.render(fullList)
  // Gib diese Liste aus.
}

document.addEventListener("DOMContentLoaded", initApp) 