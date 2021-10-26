import os
print(os.supports_bytes_environ)

"""El metodo supports_bytes_environ no recibirá ningun parametro y
devolverá True en caso de que el tipo sistema operativo nativo del
entorno es bytes y false de lo contrario"""