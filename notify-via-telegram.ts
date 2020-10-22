import { Request } from 'https://deno.land/x/request@1.3.0/request.ts'

export async function notifyViaTelegram() {
    
    if (Deno.args.length !== 4) {
        throw new Error('Please check the parameterization')
    }

    const telegramBotToken = Deno.args[0]
    const telegramTargetChatId = Deno.args[1]
    const repo = Deno.args[2]
    const message = Deno.args[3]
    
    const messageToBeSent = `https://github.com/${repo}: ${message}`

    const url = `https://api.telegram.org/bot${telegramBotToken}/sendMessage?chat_id=${telegramTargetChatId}&text=${messageToBeSent}&disable_web_page_preview=true`
    
    await Request.get(url)
}

notifyViaTelegram()