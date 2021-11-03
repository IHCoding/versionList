import { OperatorsListValues } from "../global-values/operators-list-values/operators-list-values";

export interface IVersionData {
    operator: keyof typeof OperatorsListValues;
    minVersion: string;
    maxVersion: string;
    isConflicted?: boolean;
}

export interface IVersionForm {
    operator: keyof typeof OperatorsListValues;
    minVersion: string;
    maxVersion: string;
    errors: {
        operatorError: string | null,
        minVersionError: string | null,
        maxVersionError: string | null;
    };
}