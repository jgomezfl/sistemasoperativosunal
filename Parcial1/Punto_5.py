import hashlib, os

ficheros = os.listdir()
for i in ficheros:
    fichero = open(i, "rb")
    data = fichero.read()
    fichero.close()
    aux = hashlib.sha1()
    aux.update(data)
    print(i+": "+(aux.hexdigest())+"\n")