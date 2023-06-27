import express from "express";

import AssistantV2 from 'ibm-watson/assistant/v2';
import { IamAuthenticator } from 'ibm-watson/auth';

const assistant = new AssistantV2({
  version: '2023-06-12',
  authenticator: new IamAuthenticator({
    apikey: 'M8UDcWwov5XPUBmx-_tS1kEcIuwi874WoerDaLqjVIFA',
  }),
  serviceUrl: 'https://api.us-south.assistant.watson.cloud.ibm.com/instances/0a87f19a-7621-4bd7-b2a2-ce4a0d524e8b',
});

const createSession = async (req,res) => {
    try {
        const session = await assistant.createSession({
            assistantId: 'ed456c57-8b60-489e-adca-1cbbc48101f0',
        });
        console.log(session['result']);
        res.json(session['result']);
    } catch (err) {
        console.log(err);
        res.status(500);
        res.send(err.message);
    }
};

const sendMessage = async (req,res) => {
    try {
        const { text, sessionId } = req.body;
        const message = await assistant.message({
            assistantId: 'ed456c57-8b60-489e-adca-1cbbc48101f0',
            sessionId: sessionId,
            input: {
                'message_type': 'text',
                'text': text
            }
        });
        console.log(message['result']);
        res.json(message['result']);
    } catch (err) {
        console.log(err);
        res.status(500);
        res.send(err.message);
    }
};

export const methods = {
    createSession,
    sendMessage
}