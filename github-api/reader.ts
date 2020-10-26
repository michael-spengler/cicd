
// octokit seems not yet ready for Deno

import { Persistence } from "https://deno.land/x/persistence@1.1.0/persistence.ts"
import { sleep } from "https://deno.land/x/sleep/mod.ts";
import { Request } from 'https://deno.land/x/request@1.3.0/request.ts'
import { defaultOptions } from 'https://deno.land/x/request@1.3.0/interfaces-and-constants.ts'
// import "https://deno.land/x/dotenv/load.ts"
// const token = Deno.env.get('token') as string

export class GitHubReader {

    public static async getFile(token: string, repo: string, path: string): Promise<any> {

        const token = Deno.args[0] as string
        const repo = Deno.args[1] as string

        defaultOptions.headers = {
            'Authorization': `token ${token}`
        }

        const url = `https://api.github.com/repos/${repo}/contents/${path}`


        const result = await Request.get(url)
        console.log(result)

        return result

    }
}

