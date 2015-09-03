#include <iostream>
#include <cstdlib>
#define MAX 5

/**
 * Create a half pyramid using the 'while' loop
 * _____
 * ____
 * ___
 * __
 * _
 */
int main(int argc, char const *argv[])
{
	// Index counters:
	// As much as possible, I try to make my variables
	// and programs to mock real life situations and 
	// examples to my programs to make it more understandable
	// In this example, y will be used to create the horizontal line; while
	// x will be used to create the vertical line
	int x, y = MAX;

	// In each horizontal line, there will be a vertical line of number of characters
	// which length solely depends on which line it is.
	// For example, on the second iteration, there will be two characters
	// generated; on the fifth iteration, there will be five characters
	// printed to the screen on the fifth line.
	while(y >= 0)
	{
		x = 0;
		while(x <= y)
		{
			std::cout << "*";
			x++;
		}

		// Create a new line after all characters for
		// the line have been printed
		std::cout << std::endl;
		y--;
	}

	std::cin.get();
	return 0;
}