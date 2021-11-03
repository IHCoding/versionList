import semverOutside from 'semver/ranges/outside';
import semverEq from 'semver/functions/eq';
import semverGt from 'semver/functions/gt';
import semverLt from 'semver/functions/lt';
import semverGte from 'semver/functions/gte';
import semverLte from 'semver/functions/lte';
import semverGtr from 'semver/ranges/gtr';
import semverLtr from 'semver/ranges/ltr';


import semverIntersects from 'semver/ranges/intersects';

import { BTWNEAEB, BTWNIAEB, BTWNIAIB, EQ, GT, GTE, LT, LTE, OperatorsListValues } from '../../global-values/operators-list-values/operators-list-values';
import { IVersionData } from '../../data-types/versions-types';

// @todo
// check for TypeError: Invalid Version: 0,0,2
// validation !number

export const compareVersions = (versions: IVersionData[], { operator, minVersion, maxVersion }: IVersionData) => {
    const operationCallbacks = {
        [EQ]: () => {
            return versions.some((version) => {
                try {
                    return semverEq(maxVersion, version.maxVersion);

                } catch (e) {
                    console.log(e);
                    return true;
                }

            });
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