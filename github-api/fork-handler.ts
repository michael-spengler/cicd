

// octokit seems not yet ready for Deno

import { Persistence } from "https://deno.land/x/persistence@1.1.0/persistence.ts"
import { sleep } from "https://deno.land/x/sleep/mod.ts";
import { Request } from 'https://deno.land/x/request@1.3.0/request.ts'
import { defaultOptions } from 'https://deno.land/x/request@1.3.0/interfaces-and-constants.ts'
// import "https://deno.land/x/dotenv/load.ts"
// const token = Deno.env.get('token') as string

export class ForkHandler {

    public static async createFork(token: string, repo: string): Promise<string> {

        defaultOptions.headers = {
            'Authorization': `token ${token}`
        }

        const url = `https://api.github.com/repos/${repo}/forks`


        const result = await Request.post(url, {})

        return result.full_name

    }
}