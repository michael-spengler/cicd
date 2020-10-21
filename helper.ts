
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

}