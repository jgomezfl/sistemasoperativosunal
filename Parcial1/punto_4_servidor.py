import socket, os, asyncio

async def recibir():
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    port = 5000
    sock.bind(('localhost',port))
    sock.listen(1)

    while True:
        con, addr = sock.accept()
        try:
            data = con.recv(4096)
            mensaje = data.decode()            
        finally:
            con.close()
        return mensaje
    
async def enviar_contenido(i):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    port = 5000
    sock.bind(('localhost',port))
    sock.listen(1)

    while True:
        con, addr = sock.accept()
        try:
            f = open(i, 'rb')
            contenido = f.read()
            con.sendall(contenido)
            f.close()
            break
        finally:
            con.close()

async def main():
    os.chdir(r"C:\Users\User\Downloads")
    i = await recibir()
    print(i)
    await enviar_contenido(i)

asyncio.run(main())