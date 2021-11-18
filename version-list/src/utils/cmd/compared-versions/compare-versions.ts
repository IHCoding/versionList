import semverOutside from 'semver/ranges/outside';
import semverEq from 'semver/functions/eq';
import semverGt from 'semver/functions/gt';
import semverLt from 'semver/functions/lt';
import semverGte from 'semver/functions/gte';
import semverLte from 'semver/functions/lte';
import semverGtr from 'semver/ranges/gtr';
import semverLtr from 'semver/ranges/ltr';
import semverSatisfies from 'semver/functions/satisfies';


import semverIntersects from 'semver/ranges/intersects';

import { BTWNEAEB, BTWNIAEB, BTWNIAIB, EQ, GT, GTE, LT, LTE, OperatorsListValues } from '../../global-values/operators-list-values/operators-list-values';
import { IVersionData } from '../../data-types/versions-types';


export const markVersionsAsConflicted = (versions: IVersionData[], { operator, minVersion, maxVersion }: IVersionData) => {
    return versions.map(version => {
        return {
            ...version,
            // isConflicted: compareVersions(versions, { operator, minVersion, maxVersion })() || false
            isConflicted: !semverEq(maxVersion, version.maxVersion)
        };
    });
};


export const compareVersions = (versions: IVersionData[], { operator, minVersion, maxVersion }: IVersionData) => {
    const operationCallbacks = {
        [EQ]: () => {
            const pos = versions.findIndex(version => maxVersion === version.maxVersion);
            const copyOfVersions = [...versions];
            copyOfVersions.splice(pos, 1);
            const every = copyOfVersions.some((version) => {
                try {
                    // equal or the same 
                    if ([BTWNEAEB, BTWNIAEB, BTWNIAIB].includes(version.operator)) {
                        const checkSemVer = semverSatisfies(maxVersion, `>=${version.minVersion} <=${version.maxVersion}`);
                        console.log('check range -> %s (%s - %s) -> %s', `${maxVersion}`, version.minVersion, version.maxVersion, checkSemVer);
                        return checkSemVer;
                    }
                    console.log('check same -> %s - %s', maxVersion, version.maxVersion, semverEq(maxVersion, version.maxVersion));
                    return semverEq(maxVersion, version.maxVersion);

                } catch (e) {
                    console.log(e);
                    return true;
                }
            });
            return every;
        },
        [LT]: () => {
            return !semverLt(maxVersion, versions[0].maxVersion);
        },
        [GT]: () => {
            return !semverGt(maxVersion, versions[versions.length - 1].maxVersion);
        },
        [LTE]: () => {
            return !semverLte(maxVersion, versions[0].maxVersion);
        },
        [GTE]: () => {
            return !semverGte(maxVersion, versions[versions.length - 1].maxVersion);
        },
        [BTWNIAIB]: () => {
            if (versions.length) {
                return semverIntersects(`>=${minVersion} <=${maxVersion}`, `>=${versions[0].maxVersion} <=${versions[versions.length - 1].maxVersion}`);
            } else {
                return false;
            }
        },
        [BTWNIAEB]: () => {
            if (versions.length) {
                return semverIntersects(`>=${minVersion} <${maxVersion}`, `>=${versions[0].maxVersion} <=${versions[versions.length - 1].maxVersion}`);
            } else {
                return false;
            }
        },
        [BTWNEAEB]: () => {
            if (versions.length) {
                return semverIntersects(`>${minVersion} <${maxVersion}`, `>=${versions[0].maxVersion} <=${versions[versions.length - 1].maxVersion}`);
            } else {
                return false;
            }
        },
    };
    // @ts-ignore
    return operationCallbacks[operator];
};