import semverOutside from 'semver/ranges/outside';
import semverEq from 'semver/functions/eq';
import semverGt from 'semver/functions/gt';
import semverLt from 'semver/functions/lt';
import semverGte from 'semver/functions/gte';
import semverLte from 'semver/functions/lte';
import semverGtr from 'semver/ranges/gtr';
import semverLtr from 'semver/ranges/ltr';


import semverIntersects from 'semver/ranges/intersects';

import { BTWN, EQ, GT, GTE, LT, LTE, OperatorsListValues } from '../operators-list-values';
import { IVersionData } from '../data-types/versions-types';

// @todo
// check for TypeError: Invalid Version: 0,0,2
// validation !number

export const compareVersions = (versions: IVersionData[], { operator, minVersion, maxVersion }: IVersionData) => {
    const operationCallbacks = {
        [EQ]: () => {
            return versions.some((version) => {
                return semverEq(maxVersion, version.maxVersion);
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
        [BTWN]: () => {
            // supplied with 3 possiblities
            // a [1.2.3 - 1.3.0]  between, including 1.2.3 and 1.3.0
            // b ]2.3.4 - 2.4.0[  between, excluding 2.3.4 and 2.4.0
            // c  [1.2.3 - 1.3.0[  between, including 1.2.3 and excluding 1.3.0
            // if (a|b|c) intersects('minversion, maxversion', 'versions[0] version[last]')

            return semverIntersects(`>=${minVersion} <=${maxVersion}`, `>=${versions[0].maxVersion} <=${versions[versions.length - 1].maxVersion}`);
        },
    };

    // @ts-ignore
    return operationCallbacks[operator];
};