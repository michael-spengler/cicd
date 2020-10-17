export async function postPRChecklist() {

    const textToBePosted = await Deno.readTextFile("./path-to-PR-checklist")
    console.log(textToBePosted)
    throw new Error('not yet implemented')
}

postPRChecklist()
