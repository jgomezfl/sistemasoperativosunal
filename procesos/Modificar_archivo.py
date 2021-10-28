import os

os.chdir(r"C:\Users\User\Downloads")#primero nos ubicamos donde se espera que este el fichero
fd = open("Goodbye_Agony.txt",'w+') #w+ es la acción que valida la existencia del archivo, crea el fichero en caso de que no exista
print("Te gustaría escuchar una canción?")
respuesta = input()
if respuesta =='si':
    fd.write("https://www.youtube.com/watch?v=f-cxPIOAfSk&list=RDHBB37gsHJmQ&index=10")#sobreescribimos sobre el archivo
    print("Espero te guste, revisa el documento")
else:
    fd.write("No me agradas")#sobreescribimos sobre el archivo
    print("No me agradas")