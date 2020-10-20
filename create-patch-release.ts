
import { Request } from 'https://deno.land/x/request@1.3.0/request.ts'
import { defaultOptions } from 'https://deno.land/x/request@1.3.0/interfaces-and-constants.ts'
// import "https://deno.land/x/dotenv/load.ts"

import { Helper, ESemanticVersion } from './helper.ts'


export async function createPatchRelease() {

    // const token = Deno.env.get('token') as string
    const token = Deno.args[0] as string

    defaultOptions.headers = {
        'Authorization': `token ${token}`
    }

    const repo = Deno.args[1] as string

    const nextVersion = await getNextVersion(token, repo)
    
    console.log(nextVersion)

    const url = `https://api.github.com/repos/${Deno.args[1]}/releases`

    const xy = {
        "tag_name": nextVersion,
        "target_commitish": "main",
        "name": nextVersion,
        "body": "Description of the release",
        "draft": false,
        "prerelease": false
    }


    await Request.post(url, xy)

}

async function getNextVersion(token: string, repo: string): Promise<string> {
    const url = `https://api.github.com/repos/${repo}/releases/latest`

    const result = await Request.get(url)

    return Helper.incrementVersion(result.tag_name, ESemanticVersion.PATCH)
}

createPatchRelease()