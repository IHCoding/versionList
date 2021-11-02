import { OperatorsListValues } from "../global-values/operators-list-values/operators-list-values";

export interface IVersionData {
    operator: keyof typeof OperatorsListValues;
    minVersion: string;
    maxVersion: string;
}

export interface IVersionForm {
    operator: string | null;
    minVersion: string | null;
    maxVersion: string | null;
}