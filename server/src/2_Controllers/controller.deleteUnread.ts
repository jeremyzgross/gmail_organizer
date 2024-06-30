// src/2_Controllers/controller.deleteUnread.ts
import { Request, Response, NextFunction } from 'express';
import { google } from 'googleapis';
import { oAuth2Client } from '../0_Config/config';
export const delteUnread = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    oAuth2Client.setCredentials(req.cookies.auth) // Ensure cookies are set
    const gmail = google.gmail({ version: 'v1', auth: oAuth2Client })
    const listResponse = await gmail.users.messages.list({
      userId: 'me',
      q: 'is:unread',
    })
    const messages = listResponse.data.messages || []

    if (messages.length === 0) {
      return res.status(200).send('No unread emails found.')
    }
    const deletePromises = messages.map((message) =>
      gmail.users.messages.delete({ userId: 'me', id: message.id as string })
    )
    await Promise.all(deletePromises)
    res.status(200).send('All unread emails deleted successfully.')
    console.log('Unread emails deleted!')
  } catch (error) {
    console.error('Error deleting unread emails:', error)
    res.status(500).send('Error deleting unread emails.')
  }
}
