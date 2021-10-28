import socket

sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM) #Crearemos la conexión
port = 5000 # Definiremos el puerto de comunicación
sock.bind(('localhost',port))#el metodo .blind() recibe la dirección IP y un puerto, se usa para crear un servidor

sock.listen(1) #será necesario esperar a que se conecte el cliente

while True:
    con, direccion_cliente = sock.accept()
    try:
        while True:
            data = con.recv(4096)
            print(data.decode())
            if data:
                con.sendall(data.encode())
            else:
                print('no data from', con)
                break

    finally:
        con.close()
