import express from 'express'
import { Meeting, Participant } from './repository.mjs'
import {
    getRecords, postRecord, deleteRecords,
    getRecord, headRecord, putRecord, patchRecord, deleteRecord
} from './service.mjs'

const router = express.Router()

router.route('/meetings')
    .get(async(request,response)=> getRecords(Meeting, request, response))
    .post(async(request,response)=> postRecord(Meeting, request, response))
    .delete(async(request,response)=> deleteRecords(Meeting, request, response))

router.route('/meetings/:id')
    .get(async(request,response)=> getRecord(Meeting, request, response))
    .head(async(request,response)=> headRecord(Meeting, request, response))
    .put(async(request,response)=> putRecord(Meeting, request, response))
    .patch(async(request,response)=> patchRecord(Meeting, request, response))
    .delete(async(request,response)=> deleteRecord(Meeting, request, response))

router.route('/meetings/:id/participants')
    .get(async(request,response)=> getRecords(Participant, request, response))
    .post(async(request,response)=> postRecord(Participant, request, response))
    .delete(async(request,response)=> deleteRecords(Participant, request, response))

router.route('/meetings/:id/participants/:id')
    .get(async(request,response)=> getRecord(Participant, request, response))
    .head(async(request,response)=> headRecord(Participant, request, response))
    .put(async(request,response)=> putRecord(Participant, request, response))
    .patch(async(request,response)=> patchRecord(Participant, request, response))
    .delete(async(request,response)=> deleteRecord(Participant, request, response))

export default router