import os
os.chdir(r"C:\Users\User\Downloads")
fd = os.open( "f.txt", os.O_RDWR|os.O_CREAT )
fd_copy = os.dup( fd )
closerange(fd,fd_copy)
print("el archivo se copió exitosamente")

"""El metodo dup() me permite copiar un archivo"""