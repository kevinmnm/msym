import { Alphabet, DigitString } from './types/global';
import 'mil-sym/dist/assets/renderer.css';
// import ms from 'milsymbol';
// export const milsymbol = ms;

export * as ms from 'milsymbol';
export { armyc2 } from 'mil-sym';
export * from './std-2525/std-2525-d';
export * from './std-2525/std-2525-c';

export enum MilSTDEnum {
   std2525c = 'std2525c',
   std2525d = 'std2525d',
}

export enum BasicAffiliationEnum {
   hostile = 'hostile',
   friend = 'friend',
   neutral = 'neutral',
   unknown = 'unknown',
}

type STD2525CFieldValue<T extends string> = Uppercase<T>;

// Utility type to calculate the length of a string
type LengthOfString<
   S extends string,
   Acc extends any[] = [],
> = S extends `${infer _Rest}${infer Rest}` // If the string has characters
   ? LengthOfString<Rest, [any, ...Acc]> // Recurse, counting the length
   : Acc['length']; // Return the length once we've counted all characters

type STD2525DFieldValue<N extends number, S extends string> =
   LengthOfString<S> extends N // Check if the length of S matches N
      ? S // If true, return the string itself
      : never; // Otherwise, it results in a compile-time error

export type BasicSymbols = {
   [key: string]: {
      [MilSTDEnum.std2525c]: {
         scheme: STD2525CFieldValue<Alphabet>;
         affiliation: STD2525CFieldValue<Alphabet>;
         dimension: STD2525CFieldValue<Alphabet>;
         status: STD2525CFieldValue<Alphabet>;
         functionid: STD2525CFieldValue<string>;
         modifier1: STD2525CFieldValue<Alphabet | '-'>;
         modifier2: STD2525CFieldValue<Alphabet | '-'>;
         sidc: string;
      };
      [MilSTDEnum.std2525d]: {
         //>> Set A <<//
         version: STD2525DFieldValue<2, '10'>;
         frame: STD2525DFieldValue<1, '0'>;
         affiliation: STD2525DFieldValue<1, DigitString>;
         symbolset: STD2525DFieldValue<2, '10'>;
         status: STD2525DFieldValue<1, '0'>;
         htd: STD2525DFieldValue<1, '0'>;
         amplifier: STD2525DFieldValue<2, '00'>;

         //>> Set B <<//
         entity: STD2525DFieldValue<2, '00'>;
         entityType: STD2525DFieldValue<2, '00'>;
         entitySubtype: STD2525DFieldValue<2, '00'>;
         modifier1: STD2525DFieldValue<2, '00'>;
         modifier2: STD2525DFieldValue<2, '00'>;

         //>> Set C <<//
         soid: STD2525DFieldValue<3, '000'>;
         soset: STD2525DFieldValue<1, '0'>;
         socon: STD2525DFieldValue<6, '000000'>;
         sidc: string;
      };
   };
};

export const BASIC_SYMBOLS: BasicSymbols = {
   [BasicAffiliationEnum.friend]: {
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
   [BasicAffiliationEnum.hostile]: {
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
   [BasicAffiliationEnum.neutral]: {
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
   [BasicAffiliationEnum.unknown]: {
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
