import os
os.chdir(r"C:\Users\User\Downloads")
fd = os.open( "f.txt", os.O_RDWR|os.O_CREAT )
print(os.fstat(fd))
os.close(fd)

"""el metodo fstat() de la libreria os nos ofrece toda la
información de un archivo"""