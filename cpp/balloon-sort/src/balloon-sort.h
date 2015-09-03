#include <iostream>
#include <cstdlib>
#include <windows.h>
/**
 * @see http://www.daniweb.com/software-development/cpp/threads/331239/how-to-configure-graphics.h-in-dev-c
 */
#include <graphics.h>

#define BUFFER_SIZE 	1024
#define CIRCLE_RADIUS 	50
#define DELAY_MS 		100
#define ANI_FRAME 		10
#define MAX_INPUT 		6
#define MIN_INPUT 		3

// Array size
int size;

// // Prototypes
// void gotoxy(short, short);

// void draw(int *);
// void graphicInit(void);
// void graphicallyDraw(int *);
// int orderIsValid(char);
// void balloonSort(int *, char);

/**
 * gotoxy() is a Turbo-C++ specific function, which means it is not part of the standard
 *
 * @link http://instilledbee.wordpress.com/2011/01/30/using-gotoxy-in-dev-c/comment-page-1/
 */
void gotoxy(short x, short y)
{
	COORD pos = {x, y};
	SetConsoleCursorPosition(GetStdHandle(STD_OUTPUT_HANDLE), pos);
}

/**
 * Draws the sorted array
 *
 * @param 	int|array
 * @return 	void
 */
void draw(int *_arr)
{
	int i;

	for(i = 0; i < size; i++)
	{
		std::cout << _arr[i] << std::endl;
	}
}

/**
 * Initialize window
 */
void graphicInit(void)
{
	// Initialize window
	initwindow(800,600);
}

/**
 * Draw balloons with the sorted array using the graphics.h library
 *
 * @param 	int|arr
 * @return 	void
 */
void graphicallyDraw(int *_arr)
{
	int i;
	int j;

	// Clear everything
	system("cls");

	// Initialize window
	graphicInit();

	// Stores the number
	char buffer[5];

	// Origin
	int orig = 100;

	// Current vert position
	int vert = orig * 2;

	// Position of the line
	int linePos;

	// Line extension
	const int lineLen = CIRCLE_RADIUS;

	for(j = 0; j < ANI_FRAME; j++)
	{
		// Draw
		for(i = 0; i < size; i++)
		{
			int offset = (i + 1) * orig;

			// settextstyle(DEFAULT_FONT, HORIZ_DIR, 5);
			setcolor(WHITE);
			// A hackish way to convert integer to string
			sprintf(buffer, "%d", _arr[i]);
			outtextxy(offset, (orig * i) + vert, buffer);

			// setlinestyle(i, 0, 2);
			setcolor(i + 1);
			circle(offset, (orig * i) + vert, CIRCLE_RADIUS);

			// Calibrate the position of the line
			linePos = (orig * i) + (orig / 2) + vert;

			line(offset, linePos, offset, linePos + lineLen );
		}

		// Decrease Y-offset (i)
		vert -= 20;

		// Delay the next frame (this actually what makes it appear to animation)
		delay(DELAY_MS);

		// On the last iteration, delay times ten the delay rate
		// of each frame. Otherwise, clear screen
		if ( j < ANI_FRAME - 1 )
		{
			cleardevice();
		}
		else
		{
			delay(DELAY_MS * 10);
		}
	}
}

/**
 * Checks if the order given is valid
 *
 * A - Ascending
 * D - Descending

 * @param 	char
 * @return 	int
 */
int orderIsValid(char order)
{
	switch(order)
	{
		case 'A':
		case 'a':
		case 'D':
		case 'd':
			return 1;
		default:
			return 0;
	}
}

/**
 * Checks if the representation is valid
 *
 * @param 	char
 * @return	bool
 */
int repIsValid(char rep)
{
	switch(rep)
	{
		case 'G':
		case 'g':
		case 'P':
		case 'p':
			return 1;
	}

	return 0;
}

/**
 * Sorts an array with the balloon sort algortihm
 *
 * @param 	int
 * @return 	void
 */
void balloonSort(int *_arr, char order)
{
	// Index counters
	int i, j;

	// Placeholder to allow us swap the positions
	// of the elements
	int temp;
	
	for(i = 0; i < size; i++)
	{
		// Iterate through the following elements
		// If i = 0, then the following elements are 1, 2, 3.. and so on.
		for(j = i; j < size; j++)
		{
			switch(order)
			{
				// If the current element is less than its
				// following elements, switch positions
				case 'A':
				case 'a':
					if(_arr[j] < _arr[i])
					{
						temp = _arr[i];
						_arr[i] = _arr[j];
						_arr[j] = temp;
					}

					break;

				// If the current element is greater than
				// its following elements, switch positions
				case 'D':
				case 'd':
					if(_arr[i] > _arr[j])
					{
						temp = _arr[j];
						_arr[j] = _arr[i];
						_arr[i] = temp;
					}

					break;

				// If no valid parameter was passed (order),
				// return to stop the process
				default:
					std::cout << "Invalid!" << std::endl;
					return;
			}
		}
	}
}
