
// octokit seems not yet ready for Deno

import { Persistence } from "https://deno.land/x/persistence@1.1.0/persistence.ts"
import { sleep } from "https://deno.land/x/sleep/mod.ts";
import { Request } from 'https://deno.land/x/request@1.3.0/request.ts'
import { defaultOptions } from 'https://deno.land/x/request@1.3.0/interfaces-and-constants.ts'
// import "https://deno.land/x/dotenv/load.ts"
// const token = Deno.env.get('token') as string

export class GitHubWriter {

    public static async writeFile(token: string, repo: string, path: string, body: any): Promise<any> {

        defaultOptions.headers = {
            'Authorization': `token ${token}`
        }

        const url = `https://api.github.com/repos/${repo}/contents/${path}`


        const result = await Request.put(url, body)

        return result
    }
}

