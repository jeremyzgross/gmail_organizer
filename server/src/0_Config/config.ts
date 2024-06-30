import dotenv from 'dotenv'
import { google } from 'googleapis'

dotenv.config()

const OAuth2 = google.auth.OAuth2
const CLIENT_ID = process.env.CLIENT_ID
const CLIENT_SECRET = process.env.CLIENT_SECRET
const REDIRECT_URI = process.env.REDIRECT_URI

export const oAuth2Client = new OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI)
