import os
os.chdir(r"C:\Users\User\Downloads")
fd = os.open( "f.txt", os.O_RDWR|os.O_CREAT )
print("El archivo se abrió sin problemas")

"""el método os.open() de la libreria os recibe el nombre
 de un archivo y el tipo de acción que desea realizar"""