import { Request } from 'https://deno.land/x/request@1.3.0/request.ts'
import { defaultOptions } from 'https://deno.land/x/request@1.3.0/interfaces-and-constants.ts'

export async function postPRChecklist() {

    const repo = Deno.args[1]
    const issueNumber = Deno.args[2]
    const url = `https://api.github.com/repos/${repo}/issues/${issueNumber}/comments`

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
    const content = window.atob((await Request.get(url, defaultOptions)).content)
    return content
}

postPRChecklist()
