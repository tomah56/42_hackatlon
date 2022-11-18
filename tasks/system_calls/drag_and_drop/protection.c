/* 
 * TOPIC: Protection
 * TASK: Please drag & drop the correct elements into the code snipped
 */

int	main(void)
{
    int  fd;
    int  i;
    char c;

    fd = open("testfile.txt", O_RDONLY);

    /* 
     * -- drop correct element here --
     */

    i = 0;
    while (i < 10)
    {
        get_next_char(c);
        printf("%c", c);
        i++;
    }
    close(fd);

    return (0);
}

    /* CORRECT ELEMENT: 
     * if (fd == -1) {
     *     printf("Error opening file\n");
     * }
     */

    /* WRONG ELEMENT: 
     * if (fd >= 0 ) {
     *     printf("Error opening file\n");
     * }
     */

    /* WRONG ELEMENT: 
     * if (fd == -1 ) {
     *     printf("File opened successfully\n");
     * }
     */
