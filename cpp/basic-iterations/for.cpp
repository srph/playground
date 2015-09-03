#include <iostream>
#include <cstdlib>
#define MAX 5

/**
 * Create a half pyramid using the 'for' loop
 *
 * _
 * __
 * ___
 * ____
 * _____
 */
int main(int argc, char const *argv[])
{
	// Index counters:
	// As much as possible, I try to make my variables
	// and programs to mock real life situations and 
	// examples to my programs to make it more understandable
	// In this example, y will be used to create the horizontal line; while
	// x will be used to create the vertical line
	int x, y;

	// In each horizontal line, there will be a vertical line of number of characters
	// which length solely depends on which line it is.
	// For example, on the second iteration, there will be two characters
	// generated; on the fifth iteration, there will be five characters
	// printed to the screen on the fifth line.
	for(y = 0; y < MAX; y++)
	{
		for(x = 0; x <= y; x++)
		{
			std::cout << "*";
		}

		// Create a new line after all characters for
		// the line have been printed
		std::cout << std::endl;
	}

	std::cin.get();
	return 0;
}