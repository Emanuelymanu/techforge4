"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Inventory {
}
class WarehouseInventory extends Inventory {
    items = new Map();
    addItem(item, quantity) {
        const currentQuantity = this.items.get(item) || 0;
        this.items.set(item, currentQuantity + quantity);
    }
    removeItem(item) {
        if (this.items.has(item)) {
            const currentQuantity = this.items.get(item);
            if (currentQuantity > 1) {
                this.items.set(item, currentQuantity - 1);
            }
            else {
                this.items.delete(item);
            }
        }
    }
    getInventory() {
        const result = {};
        this.items.forEach((quantity, item) => {
            result[item] = quantity;
        });
        return result;
    }
}
class StoreInventory extends WarehouseInventory {
    MAX_QUANTITY = 10;
    addItem(item, quantity) {
        const currentQuantity = this.items.get(item) || 0;
        const newQuantity = currentQuantity + quantity;
        if (newQuantity > this.MAX_QUANTITY) {
            console.log(`Não é possível adicionar ${quantity} unidades de ${item}. Limite máximo de ${this.MAX_QUANTITY} unidades por item.`);
            return;
        }
        this.items.set(item, newQuantity);
    }
}
const warehouse = new WarehouseInventory();
warehouse.addItem("Notebook", 50);
warehouse.addItem("Mouse", 100);
warehouse.removeItem("Mouse");
const store = new StoreInventory();
store.addItem("Teclado", 5);
store.addItem("Teclado", 3);
store.addItem("Teclado", 5);
console.log("Inventário do Armazém:", warehouse.getInventory());
console.log("Inventário da Loja:", store.getInventory());
//# sourceMappingURL=Inventory.js.map