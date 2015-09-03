#include <stdio.h>

int main(void)
{
    int* arr;
    int i;
    
	for ( i = 0; i < 5; i++ ) {
	  *(arr++) = i;
	}

    printf("%d", totalArray(arr, 5));
    
    return 0;
}


int totalArray(int* arr, int size)
{
    int i;
    int total = 0;

    for ( i = 0; i < size; i++) {
    	total += *(arr + i);
    }

    return total;
}
