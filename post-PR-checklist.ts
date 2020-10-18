import { Request } from 'https://deno.land/x/request@1.3.0/request.ts'
import { defaultOptions } from 'https://deno.land/x/request@1.3.0/interfaces-and-constants.ts'
import "https://deno.land/x/dotenv/load.ts"

export async function postPRChecklist() {

    const owner = Deno.args[1]
    const repo = Deno.args[2]
    const issueNumber = Deno.args[3]
    const url = `https://api.github.com/repos/${owner}/${repo}/issues/${issueNumber}/comments`

    const commentContent = {
        "body": `${await getContent(owner, repo, 'pr-checklist.md')}`
    }


    defaultOptions.headers = {
        'Authorization': `token ${Deno.args[0]}`
    }

    const result = await Request.post(url, commentContent)

    console.log(result)
}

async function getContent(owner: string, repo: string, path: string): Promise<string> {

    defaultOptions.headers = {
        'Authorization': `token ${Deno.args[0]}`
    }

    const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`
    const content = window.atob((await Request.get(url, defaultOptions)).content)
    return content
}

postPRChecklist()
