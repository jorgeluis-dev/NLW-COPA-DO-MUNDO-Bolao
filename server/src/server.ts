import Fastify from 'fastify';
import { PrismaClient} from '@prisma/client'
import cors from '@fastify/cors'

const prisma = new PrismaClient({
    log: ['query', 'info', 'warn'],
})

async function bootstrap(){
    const fasfity = Fastify({
        logger: true,
    })

    await fasfity.register(cors, {
        origin: true,
    })

    //Routes
    fasfity.get('/pools/count', async () => {
        const count = await prisma.pool.count()
        
        return { count }
    })










   await fasfity.listen({ port: 3333, /*host: '0.0.0.0'*/ })     
}

bootstrap();