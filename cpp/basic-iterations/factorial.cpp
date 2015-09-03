#include <iostream>
#include <cstdlib>

/**
 * Recursion: calls itself, passing a decremented value of the
 * first argument and returns something only and only if it
 * satisfies the condition: n > 1
 * (as long as the passed argument is greater than 1)
 *
 * @param 	int 	n
 * @return 	int
 */
// int factorial(int n)
// {
// 	if (n > 1) return n * factorial(n - 1);
// }

/**
 * Get the factorial of a number using the 'for' loop
 */
int main()
{
	// Could have been done with this simple solution
	// but I feel that this won't be accepted for now
	// cout << factorial(5) << endl;

	int _total = 5;
	// Total value
	int _value = 1;
	// Index counter
	int i;

	// Iterate
	for(i = _total; i > 1; i--)
	{
		_value *= i;
	}

	std::cout << "The factorial of " << _total;
	std::cout << " is " << _value;

	std::cin.get();
	return 0;
}