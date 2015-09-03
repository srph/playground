#include <stdio.h>
#include <string.h>

struct InputStream
{
	char chars[100];
	int index;
};

char func(struct InputStream* p_input)
{
	return p_input->chars[p_input->index++];
}

int main(void)
{
	struct InputStream input;
	strcpy(input.chars, "ABCDEFGHIJ");
	input.index = 4;
	char character = func(&input);
	printf("[4]: %c\n", character);
	printf("index: %c", input.index);
	
	return 0;
}
