import os
os.chdir(r"C:\Users\User\Downloads")
fd = os.open( "f.txt", os.O_RDWR|os.O_CREAT )
os.write(fd, 'Hola mundo, me siento feliz'.encode())
os.ftruncate(fd,10)
os.lseek(fd, 0, 0)
os.close(fd)

"""el metodo lseek(fd,pos,how) nos permite ubicarnos en el archivo
abierto; en pos debemos ubicarnos en el archivo, 0 para escribir
al principio del archivo, 1 para ubicarnos en la posicion actual y
2 para ubicarnos al final; en how será el como nos ubicamos
en el archivo, 0 para el princio, 1 para la posicion actual y 2
para el final del archivo"""