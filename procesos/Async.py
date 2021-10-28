import asyncio
#primero definimos una función asíncrona
async def nested(i):
    await asyncio.sleep(1) #antes de llevar a cabo una acción esperará
    if i <= 1:
        print (i)
    else:
        print(i)
        await nested(i-1)
    

async def main():
    print(await nested(10))#llamaremos a la función desde otra función asíncrona

asyncio.run(main()) 
