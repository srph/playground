#include <iostream>
#include <cstdlib>

/**
 * Find the GCF of the two numbers
 * using the 'while' loop
 */
int main(int argc, char const *argv[])
{
	int _gcf = 1;
	// We will be using variables a and b to store the
	// original values of our number
	int a = 30, b = 24;
	// Then, use f and g to extract the GCF
	int f = a, g = b;
	// Index counter

	while( true )
	{
		// If a modulo of both numbers result
		// to zero, then it is said that one
		// of them should be the gcf
		if(f % g == 0) {
			_gcf = (f > g) ? g : f;
			break;
		}

		// Take the first by fetching number of greater value,
		// then get the decimal place by: (greater value modulo lower value)
		f = (f > g) ? f : g;
		g = (f > g) ? f % g : g % f;
	}

	// Print the results
	std::cout << "The GCF of " << a;
	std::cout << " and " << b;
	std::cout << " is " << _gcf;

	std::cin.get();
	return 0;
}