int	main(void)
{
	int		fd;
	int		i;
	char	*line;

	i = 0;
	fd = open("test.txt", O_RDONLY);
	while (i < 16638)
	{
		line = get_next_line(fd);
		printf("%s", line);
		i++;
		free(line);
	}
	return (0);
}