import { Request } from 'https://deno.land/x/request@1.3.0/request.ts'
import { defaultOptions } from 'https://deno.land/x/request@1.3.0/interfaces-and-constants.ts'

export async function postPRChecklist() {

    const repo = Deno.args[1]
    console.log(`repo: ${repo}`)

    const prNumber = Deno.args[2]
    console.log(`prNumber: ${prNumber}`)

    const url = `https://api.github.com/repos/${repo}/issues/${prNumber}/comments`

    const commentContent = {
        "body": `${await getContent(repo, 'pr-checklist.md')}`
    }


    defaultOptions.headers = {
        'Authorization': `token ${Deno.args[0]}`
    }

    const result = await Request.post(url, commentContent)

    console.log(result)
}

async function getContent(repo: string, path: string): Promise<string> {

    defaultOptions.headers = {
        'Authorization': `token ${Deno.args[0]}`
    }

    const url = `https://api.github.com/repos/${repo}/contents/${path}`

    console.log(`reading checklist content via ${url}`)

    const base64Content = (await Request.get(url, defaultOptions)).content

    console.log(`base64Content: ${base64Content}`)

    const content = window.atob(base64Content)

    console.log(`content: ${content}`)

    return content
}

postPRChecklist()
