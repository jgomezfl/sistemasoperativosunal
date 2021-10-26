import os
os.chdir(r"C:\Users\User\Downloads")
fd = os.open( "f.txt", os.O_RDWR|os.O_CREAT )
os.write(fd, 'Hola mundo, me siento feliz'.encode())
os.ftruncate(fd,10)
os.lseek(fd, 0, 0)
print(os.read(fd, 100))
os.close(fd)

"""Este metodo nos sirve para definir una cantidad especifica de
informcaión para un archivo"""