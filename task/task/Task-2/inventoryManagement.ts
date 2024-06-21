//interface for the store
export interface Item {
  id: string;
  name: string;
  quantity: number;
  price: number;
}
//function to add item
function addItem(item: Item, inventory: Item[]): Item[] {
  //item->item we are going to add,inventory->current array that stores the item,Item[]->return type
  return [...inventory, item]; //inventory->all existing items in arr and appends item at the end
}
//function to calculate total val of inventory
function getTotalValue(inventory: Item[]): number {
  let totalValue = 0;
  for (let i = 0; i < inventory.length; i++) {
    const item = inventory[i];
    totalValue += item.price * item.quantity;
  }
  return totalValue;
}
//function to find the item by id
function findItemById(id: string, inventory: Item[]): Item | undefined {
  for (let j = 0; j < inventory.length; j++) {
    if (inventory[j].id === id) {
      return inventory[j];
    }
  }
  return undefined;
}
//empty array
let inventory: Item[] = [];
//defining item
const item1: Item = { id: "A1", name: "AAA", quantity: 6, price: 30 };
const item2: Item = { id: "B1", name: "BBB", quantity: 2, price: 34 };
//add item
inventory = addItem(item1, inventory);
inventory = addItem(item2, inventory);
//eg
console.log("Inventory:", inventory);
console.log("The total value of the inventory:", getTotalValue(inventory));
console.log("Finding the inventory by ID:", findItemById("A1", inventory));
console.log("Finding the inventory by ID:", findItemById("2", inventory));
