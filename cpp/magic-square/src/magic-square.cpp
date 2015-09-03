#include <iostream>
#include <cstdlib>
#include <cmath>

// Global variable for the grid's size
int size;

// Prototypes
void write(void);
void fillWithZero(int [][1024]);
void magicSquare(int [][1024]);
void drawTable(int [][1024]);
int isWritable(int);
int outOfBounds(int, int);

int main()
{
	// Input
	do
	{
		std::cin >> size;
	} while(size % 2 == 0);

	// Write
	write();

	return 0;
}

/**
 *
 * Writes the table with the provided size
 */
void write()
{
	int grid[size][1024];

	// // Create the magic square
	magicSquare(grid);

	// // Draw the table
	drawTable(grid);
}

/**
 * Fill the array with zero
 *
 */
void fillWithZero(int _array[][1024])
{
	// Index counters, i iterates through the array, while j iterates through an array in the array
	int i, j;

	for(i = 0; i < size; i++)
	{
		for(j = 0; j < size; j++)
		{
			_array[i][j] = 0;
		}
	}
}

/**
 * Checks if zero
 *
 * @param 	int 	n
 * @return 	bool
 */
int isWritable(int n)
{
	return (n == 0) ? 1 : 0;
}

/**
 * Returns -0 if less than zero,
 * 1 if out ouf bounds. Otherwise, 0
 *
 * @param 	int 	max 	Max range
 * @param 	int 	n
 * @return 	int
 */
int outOfBounds(int max, int n)
{
	if( n > max )
	{
		return 1;
	}

	if ( n < 0 )
	{
		return -1;
	}

	return 0;
}

/**
 * Magic Square
 *
 * If out of bounds: (n - n)
 * If the position has a value: go left instead
 * - 1 down, 1 right
 */
void magicSquare(int grid[][1024])
{
	// Fill grid with zero
	fillWithZero(grid);

	// Get max size
	int max = size - 1;

	// Starting positions
	int startY = size / 2;
	int startX = max;

	// Assign first to the starting positions
	int col = startY;
	int row = startX;

	// Index counter
	int i;

	// Holds the data of the last iteration
	int lastCol;
	int lastRow;

	for(i = 1; i <= (size * size); i++)
	{
		// Write the value of the current iteration to the current position
		grid[col][row] = i;

		// Store the current row for future references
		lastRow = row;
		lastCol = col;

		// Increment the position (1 down, 1 right)
		row++;
		col++;

		// If the row goes out of bounds (where such scenario occurs):
		// [] [] []
		// [] [] []
		// [] [] []i
		//
		// -- or
		//
		// [] [] []
		// [] [] []
		// [] [] []
		//		  i
		//
		// Put it this way (or the other way around)
		// [Note]: not including the other example to reduce
		// the comments from taking too much space
		//
		// [] [] [i]
		// [] [] []
		// [] [] []
		//
		// To put it in words, if the position of the row or column
		// is more than its last position (current position: 3, last position: 2)
		// Set the position to the first position (0)
		if ( outOfBounds(max, row) == 1 )
		{
			row = 0;
		}
			
		if ( outOfBounds(max, col) == 1 )
		{
			col = 0;
		}

		if ( ! isWritable(grid[col][row]) )
		{
			row = lastRow - 1;
			col -= 1;

			// If such scenario occurs:
			//  [] [] []
			// i[] [] []
			//  [] [] []
			//
			// We may simply put it this way:
			// [] [] [i]
			// [] [] []
			// [] [] []
			//
			// To put it in words, if the position goes out of bounds
			// where the row or column position is less than the first position,
			// set the position to the last position
			if( outOfBounds(max, row) == -1)
			{
				row = max;
			}

			if( outOfBounds(max, col) == -1)
			{
				col = max;
			}
		}
	}
}

/**
 * Draw the table
 *
 */
void drawTable(int grid[][1024])
{
	int i, j;

	for(i = 0; i < size; i++)
	{
		for(j = 0; j < size; j++)
		{
			std::cout << grid[i][j] << "\t";
		}

		std::cout << std::endl;
	}
}
