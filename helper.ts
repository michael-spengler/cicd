
export enum ESemanticVersion {
    PATCH = 1,
    MINOR,
    MAJOR
}

export class Helper {

    public static incrementVersion(currentVersion: string, semanticVersion: ESemanticVersion): string {

        let major = Number(currentVersion.split('v')[1].split('.')[0])
        let minor = Number(currentVersion.split('.')[1].split('.')[0])
        let patch = Number(currentVersion.split('.')[2])

        if (semanticVersion === ESemanticVersion.PATCH) {
            patch = patch + 1
        } else if (semanticVersion === ESemanticVersion.MINOR){
            minor = minor + 1
            patch = 0
        } else if (semanticVersion === ESemanticVersion.MAJOR){
            major = major + 1
            minor = 0
            patch = 0
        }

        return `v${major}.${minor}.${patch}`
    }

    public static translate(gitHubEventName): string {

        // switch(gitHubEventName) {
        //     case "check_run": return 
        //     case "issue_commet": return "An issue has been created"
        //     default "check_run": return `the following event had been raised: ${}`

        // }
        return ''
    }

}



// check_suite
// create
// delete
// deployment
// deployment_status
// fork
// gollum
// issue_comment
// issues
// label
// milestone
// page_build
// project
// project_card
// project_column
// public
// pull_request
// pull_request_review
// pull_request_review_comment
// pull_request_target
// push
// registry_package
// release
// status
// watch
// workflow_run