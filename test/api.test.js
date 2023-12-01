import chai from 'chai'
import supertest from 'supertest'
import app from '../src/index.js'
import { describe, it } from 'node:test'

const {expect} = chai
const request = supertest(app)

describe('API test', ()=>{
    it('should return status: success from / endpoint', (done)=>{
        request.get('/')
            .expect(200)
            .end((err, res)=>{
                if (err) return done(err)
                expect(res.body.status).to.equal('seccess')
                return done()
            })
    })
    it('should return status: success from /api/user endpoint', (done)=>{
        request.get('/')
            .expect(200)
            .end((err, res)=>{
                if (err) return done(err)
                expect(res.body.status).to.equal('seccess')
                expect(res.body.status).to.be.an('array')
                return done()
            })
    })
})