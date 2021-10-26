import os
os.chdir(r"C:\Users\User\Downloads")
fd = os.open( "f.txt", os.O_RDWR|os.O_CREAT )
os.close(fd)
print("El archivo se abrió y cerró sin problemas")

"""El metodo close() nos permite cerrar y guardar los cambios en 
un archivo, el metodo closerange() nos permitirá cerrar multiples
archivos y guardar los cambios"""