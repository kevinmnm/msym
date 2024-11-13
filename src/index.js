export * from './std-2525/std-2525-d';
export * from './std-2525/std-2525-c';
export var MilSTDEnum;
(function (MilSTDEnum) {
    MilSTDEnum["std2525c"] = "std2525c";
    MilSTDEnum["std2525d"] = "std2525d";
})(MilSTDEnum || (MilSTDEnum = {}));
export var PlotCategoryEnum;
(function (PlotCategoryEnum) {
    PlotCategoryEnum["hostile"] = "hostile";
    PlotCategoryEnum["friendly"] = "friendly";
    PlotCategoryEnum["neutral"] = "neutral";
    PlotCategoryEnum["unknown"] = "unknown";
})(PlotCategoryEnum || (PlotCategoryEnum = {}));
export const BASIC_SYMBOLS = {
    [PlotCategoryEnum.friendly]: {
        std2525c: {
            scheme: 'S',
            affiliation: 'F',
            dimension: 'G',
            status: 'P',
            functionid: 'U-----',
            modifier1: '-',
            modifier2: '-',
            sidc: 'SFGPU-------',
        },
        std2525d: {
            version: '10',
            frame: '0',
            affiliation: '3',
            symbolset: '10',
            status: '0',
            htd: '0',
            amplifier: '00',
            entity: '00',
            entityType: '00',
            entitySubtype: '00',
            modifier1: '00',
            modifier2: '00',
            soid: '000',
            soset: '0',
            socon: '000000',
            sidc: '10031000000000000000',
        },
    },
    [PlotCategoryEnum.hostile]: {
        std2525c: {
            scheme: 'S',
            affiliation: 'H',
            dimension: 'G',
            status: 'P',
            functionid: 'U-----',
            modifier1: '-',
            modifier2: '-',
            sidc: 'SHGPU-------',
        },
        std2525d: {
            version: '10',
            frame: '0',
            affiliation: '6',
            symbolset: '10',
            status: '0',
            htd: '0',
            amplifier: '00',
            entity: '00',
            entityType: '00',
            entitySubtype: '00',
            modifier1: '00',
            modifier2: '00',
            soid: '000',
            soset: '0',
            socon: '000000',
            sidc: '10061000000000000000',
        },
    },
    [PlotCategoryEnum.neutral]: {
        std2525c: {
            scheme: 'S',
            affiliation: 'N',
            dimension: 'G',
            status: 'P',
            functionid: 'U-----',
            modifier1: '-',
            modifier2: '-',
            sidc: 'SNGPU-------',
        },
        std2525d: {
            version: '10',
            frame: '0',
            affiliation: '4',
            symbolset: '10',
            status: '0',
            htd: '0',
            amplifier: '00',
            entity: '00',
            entityType: '00',
            entitySubtype: '00',
            modifier1: '00',
            modifier2: '00',
            soid: '000',
            soset: '0',
            socon: '000000',
            sidc: '10041000000000000000',
        },
    },
    [PlotCategoryEnum.unknown]: {
        std2525c: {
            scheme: 'S',
            affiliation: 'U',
            dimension: 'G',
            status: 'P',
            functionid: 'U-----',
            modifier1: '-',
            modifier2: '-',
            sidc: 'SUGPU-------',
        },
        std2525d: {
            version: '10',
            frame: '0',
            affiliation: '1',
            symbolset: '10',
            status: '0',
            htd: '0',
            amplifier: '00',
            entity: '00',
            entityType: '00',
            entitySubtype: '00',
            modifier1: '00',
            modifier2: '00',
            soid: '000',
            soset: '0',
            socon: '000000',
            sidc: '10011000000000000000',
        },
    },
};
