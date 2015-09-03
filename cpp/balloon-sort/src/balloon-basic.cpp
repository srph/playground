#include <iostream>
#include <cstdlib>
#include "balloon-sort.h"

int main()
{
	// Order of the sort (asc / desc)
	char order;

	// Index counter to fill up the array
	int i;

	// The array of numbers to sort
	int _array[BUFFER_SIZE];

	// Input number of elements
	// Least of 4 and max of 10 this is due to drawing the balloons
	// (however will not be present) on this file
	do
	{
		std::cout << "Number of elements to sort (" << MIN_INPUT;
		std::cout << " least, " << MAX_INPUT << " max): ";
		std::cin >> size;
	} while( size < MIN_INPUT || size > MAX_INPUT);

	// Input order
	do
	{
		std::cout << "Enter the order of elements (A | D): ";
		std::cin >> order;
	} while( ! orderIsValid(order) );

	// Input values to the array
	for(i = 0; i < size; i++)
	{
		std::cout << "Value of position " << i + 1 << ":";
		std::cin >> _array[i];
	}

	// Ballon sort
	balloonSort(_array, order);

	// Draw the sorted array
	draw(_array);

	system("pause");
	return 0;
}
