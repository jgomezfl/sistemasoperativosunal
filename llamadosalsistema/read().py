import os
os.chdir(r"C:\Users\User\Downloads")
fd = os.open( "f.txt", os.O_RDWR|os.O_CREAT )
os.write(fd, 'Hola mundo, me siento feliz'.encode())
os.lseek(fd, 0, 0)
print(os.read(fd, 100))
os.close(fd)


"""El metodo actual nos permite obtener en string lo que se
encuentra en un archivo recibiendo como parametros el archivo
y la cantidad de bits a convertir"""