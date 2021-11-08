import socket, asyncio, os

async def enviar_pagina(i):
    sock = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
    sock.bind(('localhost', 5000))

    sock.listen(1)
    conexion, direccion = sock.accept()
    conexion.send(i)

    conexion.close()
    sock.close()


async def main():
    fichero = os.open( "pagina_enviar.html", os.O_RDWR|os.O_CREAT )
    tamaño = os.path.getsize(fichero)
    os.lseek(fichero, 0, 0)
    contenido = os.read(fichero, tamaño)
    await enviar_pagina(contenido)

asyncio.run(main())
