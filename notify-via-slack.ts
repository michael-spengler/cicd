import { Request } from 'https://deno.land/x/request@1.3.1/request.ts'

export async function notifyViaSlack() {

    if (Deno.args.length !== 3) {
        throw new Error('Please check the number of parameters!')
    }

    const slackWebhookUrl = Deno.args[0]
    const repo = Deno.args[1]
    const message = Deno.args[2]

    const payload = {
        "text": `https://github.com/${repo}: ${message}`
    };


    try {
        await Request.post(slackWebhookUrl, payload)
    } catch (error) {
        console.log(error.message)
    }

}

notifyViaSlack()