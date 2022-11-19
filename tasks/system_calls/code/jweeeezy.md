=== Command Line ===
Create a file test.txt with echo that has 42bytes of zeroes followed by a 42 in it.

echo 00000000000000000000000000000000000000000042 > test.txt


--- Code ---
Write a program that prints the first 42 bytes of test.txt, followed by a \n character.

Allowed functions:
open, read, close, write, malloc, free

No memory leaks allowed!

Your output should be the following:
"00000000000000000000000000000000000000000042
"