import socket, ssl, asyncio, os

protocolo = ssl.create_default_context()

funciones = [b"GET /api/v2/markets/eth-btc/trades HTTP/1.0\r\nHost: www.buda.com\r\n\r\n", b"GET /api/v2/currencies/eth/fees/deposit HTTP/1.0\r\nHost: www.buda.com\r\n\r\n",
b"GET /api/v2/currencies/eth/fees/withdrawal HTTP/1.0\r\nHost: www.buda.com\r\n\r\n"]

async def resultado(i):
    socketCliente = protocolo.wrap_socket(socket.socket(socket.AF_INET, socket.SOCK_STREAM), server_hostname="www.buda.com")
    socketCliente.connect(("www.buda.com", 443))

    socketCliente.send(i)

    while True:
        mensaje = socketCliente.recv(2048)
        if len(mensaje) < 1:
            break
        else:
            return (mensaje.decode())
    socketCliente.close()

async def interprete(cadena):
    index = cadena.find('{')
    resultado = ''
    for i in range(index, len(cadena)):
        resultado += cadena[i]
    resultado += '\n'
    return  resultado

async def main():
    info=''
    index = 0
    for i in funciones:
        if index == 0:
            info+='La función número 1 obtiene una lista de las ordenes activas en el mercado de ethereums y bitcoin'+'\n'
        if index == 1:
            info+='La función número 2 retorna los costos asociados a un abono asociado a la moneda ethereums'+'\n'
        if index == 2:
            info+='La función número 3 retorna los costos asociados a un retiro asociado a la moneda ethereums'+'\n'
        info += await interprete(await resultado(i)) + '\n'
        index += 1
    os.chdir(r"C:\Users\User\Downloads")
    fd = os.open( "buda.com.txt", os.O_RDWR|os.O_CREAT )
    os.write(fd, info.encode())
    os.close(fd)

asyncio.run(main())