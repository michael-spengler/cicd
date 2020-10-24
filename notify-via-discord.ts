
import { Request } from 'https://deno.land/x/request@v1.3.1/request.ts'

// import "https://deno.land/x/dotenv/load.ts"
// const discordWebHookUrl = Deno.env.get('discordWebHook') as string

export async function notifyViaDiscord() {

    const discordWebHookUrl = Deno.args[0]
    const repo = Deno.args[1]
    const message = Deno.args[2]

    const payload = {
        "content": `https://github.com/${repo}: ${message}`
    };

    try {
        await Request.post(discordWebHookUrl, payload)
    } catch (error) {
        console.log(error.message)
    }

}

notifyViaDiscord()

