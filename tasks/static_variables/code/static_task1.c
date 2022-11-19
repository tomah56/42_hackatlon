#include <stdio.h>

int	function_calls()
{
	static int	num;

	num++;
	return(num);
}

int	main(void)
{
	int	num;

	num = function_calls();
	num = function_calls();
	num = function_calls();
	num = function_calls();
	num = function_calls();
	num = function_calls();
	num = function_calls();
	printf("%d", num);
}

/*
Task:
Write a function that counts and returns the number of times
it has been called by using a static variable.

In the main: Call your function 7 times and print the 7th return value.
Expected Output: 7

What this task teaches:
- Static variables don't lose their adress and value when
their function ends, it doesn't lose its scope.
- Static variables have a starting value 0.
*/
