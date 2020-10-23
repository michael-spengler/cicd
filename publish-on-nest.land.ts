import { Request } from 'https://deno.land/x/request@1.3.0/request.ts'
import { defaultOptions } from 'https://deno.land/x/request@1.3.0/interfaces-and-constants.ts'

import { CommandLineProcessor } from "https://x.nest.land/commandline-processor@1.1.0/mod.ts"

export async function publishOnNestLand(): Promise<void> {

    const versionToBePublished = await getCurrentVersion(Deno.args[0], Deno.args[2])

    let commandToBeExecuted = `deno install -A -f --unstable -n eggs https://x.nest.land/eggs@0.2.3/mod.ts`
    await CommandLineProcessor.process(commandToBeExecuted)
    
    commandToBeExecuted = `deno run -A --unstable https://x.nest.land/eggs@0.2.1/mod.ts link ${Deno.args[1]}`
    await CommandLineProcessor.process(commandToBeExecuted)

    commandToBeExecuted = `deno run -A --unstable https://x.nest.land/eggs@0.2.1/mod.ts publish --version ${versionToBePublished}`
    await CommandLineProcessor.process(commandToBeExecuted)

}
 

async function getCurrentVersion(token: string, repo: string): Promise<string> {
    const url = `https://api.github.com/repos/${repo}/releases/latest`

    defaultOptions.headers = {
        'Authorization': `token ${token}`
    }

    const result = await Request.get(url)

    return result.tag_name
}


publishOnNestLand()



