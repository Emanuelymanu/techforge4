abstract class Inventory {
    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;
    abstract getInventory(): Record<string, number>;
}

class WarehouseInventory extends Inventory {
    protected items: Map<string, number> = new Map();

    addItem(item: string, quantity: number): void {
        const currentQuantity = this.items.get(item) || 0;
        this.items.set(item, currentQuantity + quantity);
    }

    removeItem(item: string): void {
        if (this.items.has(item)) {
            const currentQuantity = this.items.get(item)!;
            if (currentQuantity > 1) {
                this.items.set(item, currentQuantity - 1);
            } else {
                this.items.delete(item);
            }
        }
    }

    getInventory(): Record<string, number> {
        const result: Record<string, number> = {};
        this.items.forEach((quantity, item) => {
            result[item] = quantity;
        });
        return result;
    }
}

class StoreInventory extends WarehouseInventory {
    private readonly MAX_QUANTITY = 10;

    addItem(item: string, quantity: number): void {
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