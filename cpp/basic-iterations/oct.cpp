#include <iostream>
#include <cstdlib>

/**
 * Produce the octal of a decimal number
 * using the 'do-while' loop
 */
int main(int argc, char const *argv[])
{
	// This could have been done with a simple, but oh well:
	// std::cout << std::oct << 7 << endl;

	int n = 25;
	// Decimal vaue
	int _dec = n;
	// Octal value
	int _oct = 0;
	// Digits place
	int dp = 1;

	do {
		// Extract the decimal place, then multiply
		// it by the current digits place
		_oct += (_dec % 8) * dp;
		// Divide the decimal value by 8, knowing
		// that we have already extracted its valuable
		// decimal places
		_dec /= 8;
		// Increase digits place
		dp *= 10;
	} while( _dec != 0 );

	std::cout << "The octal of " << n;
	std::cout << " is " << _oct;

	std::cin.get();
	return 0;
}
