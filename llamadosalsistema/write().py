import os
os.chdir(r"C:\Users\User\Downloads")
fd = os.open( "f.txt", os.O_RDWR|os.O_CREAT )
os.write(fd, 'Hola mundo'.encode())
os.close(fd)

"""El metodo write() nos prmite modificar los archivos ingresando
el archivo y el mensaje que queremos guardar codificado"""