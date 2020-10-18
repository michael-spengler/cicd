import { Request } from 'https://deno.land/x/request@1.3.0/request.ts'
import { defaultOptions } from 'https://deno.land/x/request@1.3.0/interfaces-and-constants.ts'
import "https://deno.land/x/dotenv/load.ts"

export async function postPRChecklist() {

    const owner = 'michael-spengler'
    const repo = 'temp-test'
    const issueNumber = '1'
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
