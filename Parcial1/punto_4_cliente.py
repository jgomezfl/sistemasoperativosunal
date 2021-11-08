import socket, asyncio, os


async def enviar(i):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    port = 5000 # Establecemos el puerto de comunicación
    sock.connect(('localhost',port))

    try:
        sock.send(i.encode())
    finally:
        sock.close()

async def recibir_contenido():
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    port = 5000 # Establecemos el puerto de comunicación
    sock.connect(('localhost',port))

    try:
        data = sock.recv(4096)
        print(data.decode())
    finally:
        sock.close()

async def escoger():
    os.chdir(r"C:\Users\User\Downloads")
    with os.scandir(os.getcwd()) as ficheros:
        ficheros = [fichero.name for fichero in ficheros if fichero.is_file() and fichero.name.endswith('.txt')]
    a = 1
    for i in ficheros:
        print(a,i)
        a+=1
    a = int(input("Escoge el número del archivo que quieras abrir: "))
    return(ficheros[a-1])

async def main():
    i = await escoger()
    await enviar(i)
    await asyncio.sleep(2)
    await recibir_contenido()


asyncio.run(main())