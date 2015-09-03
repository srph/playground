#include <stdio.h>
//
// In a header (.h) file:
// Define a struct Symbol with three fields, a string id, an int address, and a next pointer.
// Define a struct SymbolTable with a head pointer representing the first Symbol in a linked list.
// Define two function prototypes, add and toString.
// In the .c code file:
// Write two functions: add, which adds a symbol to the end of the SymbolTable, and toString.
// Write a main that sufficiently tests your code.

struct Symbol {
    char id[100];
    int address;
    struct Symbol* next;
};

struct SymbolTable {
    struct Symbol* head;
    int count;
};

//
void add(struct SymbolTable* table) {
   	struct Symbol next;

    if ( table->head == NULL ) {
		table->head = &next; 
	} else {
		struct Symbol* symbol = table->head;

    	while ( symbol->next == NULL ) {
    		symbol = symbol->next;
        }

        symbol->next = &next;
    }
    
    table->count++;
}

int main(void)
{
    struct SymbolTable table;
    table.count = 0;
    add(&table);
    add(&table);
    add(&table);
    add(&table);
    add(&table);
    add(&table);
    printf("%d", table.count);
    return 0;
}
