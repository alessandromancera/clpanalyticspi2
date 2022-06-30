const request = require("supertest")
const app = require('../src/config')

describe('Test my App Server', () =>{
    it('should get main route', async () => {
        const res = await request(app).get('/')
        expect(res.body).toHaveProperty('message')
        expect(res.statusCode).toEqual(200)
    })
})

describe('Test my Esteira routes', () =>{
    it('should get count', async () => {
        const res = await request(app).get('/esteira/c')
        expect(res.statusCode).toEqual(200)
    })

    it('should get list route', async () => {
        const res = await request(app).get('/esteira')
        expect(res.body).toHaveProperty('count')
        expect(res.statusCode).toEqual(200)
    })

    it('should get one item route', async () => {
        const res = await request(app).get('/esteira/1')
        expect(res.body).toHaveProperty('id')
        expect(res.statusCode).toEqual(200)
    })

    it('should get one item route error', async () => {
        const res = await request(app).get('/esteira/x')
        expect(res.body).toHaveProperty('error')
        expect(res.statusCode).toEqual(400)
    })
})

describe('Test my Forno routes', () =>{
    it('should get count', async () => {
        const res = await request(app).get('/forno/c')
        expect(res.statusCode).toEqual(200)
    })

    it('should get list route', async () => {
        const res = await request(app).get('/forno')
        expect(res.body).toHaveProperty('count')
        expect(res.statusCode).toEqual(200)
    })

    it('should get one item route', async () => {
        const res = await request(app).get('/forno/1')
        expect(res.body).toHaveProperty('id')
        expect(res.statusCode).toEqual(200)
    })

    it('should get one item route error', async () => {
        const res = await request(app).get('/forno/x')
        expect(res.body).toHaveProperty('error')
        expect(res.statusCode).toEqual(400)
    })
})

describe('Test my FlowPack routes', () =>{
    it('should get count', async () => {
        const res = await request(app).get('/flowpack/c')
        expect(res.statusCode).toEqual(200)
    })

    it('should get list route', async () => {
        const res = await request(app).get('/flowpack')
        expect(res.body).toHaveProperty('count')
        expect(res.statusCode).toEqual(200)
    })

    it('should get one item route', async () => {
        const res = await request(app).get('/flowpack/1')
        expect(res.body).toHaveProperty('id')
        expect(res.statusCode).toEqual(200)
    })

    it('should get one item route error', async () => {
        const res = await request(app).get('/flowpack/x')
        expect(res.body).toHaveProperty('error')
        expect(res.statusCode).toEqual(400)
    })
})