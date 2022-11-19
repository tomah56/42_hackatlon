/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   static_ex.c                                        :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: kisikogl <kisikogl@student.42.fr>          +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2022/11/18 13:58:21 by kisikogl          #+#    #+#             */
/*   Updated: 2022/11/19 05:01:24 by kisikogl         ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

#include <stdio.h>

int	duplicate()
{
	static int	num = 1;

	num *= 2;
	return (num);
}

int	main(void)
{
	int	i;
	int	num;

	i = 0;
	while (i < 5)
	{
		num = duplicate();
		i++;
	}
	printf("%d", num);
	return (0);
}

/*
Task:
Write a function that returns num.
num is a static int that equals to 2^n after every function call
n = number of function calls

In the main: Call your function 5 times and print the 5th return value.
Expected Output: 32

What this task teaches:
- Static variables don't lose their adress and value when
their function ends, it doesn't lose its scope.
- When declaring and initialising in the same line, the value
is only assigned to the variable on the first iteration.
*/
