import os
codificado = os.fsencode(r"C:\Users\User\Downloads\presentacion.txt")
print(codificado)

"""el método os.fsencode() de la libreria os recibe una
dirección y retorna un bytestring que representa el nombre del
archivo codificado, para decodificar este nombre podemos usar
la función os.fsdecode()"""