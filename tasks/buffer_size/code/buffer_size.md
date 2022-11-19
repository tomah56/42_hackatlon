How do you need to compile this main.c file in order to get the output: 42

printf("%d", MY_MACRO);

Tip: See cc -D option.

Solution:
cc -D MY_MACRO=42 main.c