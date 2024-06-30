import { Request, Response, NextFunction } from 'express'
import { oAuth2Client } from '../0_Config/config'

export const authGoogle = (req: Request, res: Response, next: NextFunction) => {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: [
      'https://www.googleapis.com/auth/gmail.readonly',
      'https://www.googleapis.com/auth/gmail.modify',
    ],
  })
  res.redirect(authUrl)
}

export const oauth2callback = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const { code } = req.query
  // console.log('code =>', code)

  if (!code) {
    return res.status(400).send('Authorization code not provided.')
  }
  try {
    const { tokens } = await oAuth2Client.getToken(code as string)
    // console.log('tokens', tokens)
    oAuth2Client.setCredentials(tokens)

    res.cookie('auth', tokens, { httpOnly: true }) // Store tokens in a cookie
    res.redirect(307, '/unread')
  } catch (error) {
    console.error('Error getting tokens:', error)
    res.status(500).send('Error during authentication')
  }
}
