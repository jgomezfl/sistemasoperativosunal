import os
r=os.access(r"C:\Users\User\Desktop",os.F_OK)
print (r)
r=os.access(r"C:\Users\User\Desktop",os.R_OK)
print (r)
r=os.access(r"C:\Users\User\Desktop",os.W_OK)
print (r)
r=os.access(r"C:\Users\User\Desktop",os.X_OK)
print (r)

"""el método os.access() de la libreria os recibe una
dirección y segundo un comando, os.F_OK revisa si la
ruta existe, os.R_OK revisa si la ruta se puede leer,
os.W_OK la ruta es legible y por último os.X_OK si la ruta
es ejecutable y nos dirige a ella"""