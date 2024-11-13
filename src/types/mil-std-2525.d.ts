declare module 'mil-std-2525' {
   interface MS2525B {
      [key: string]: {
         name: string;
         [key: string]: any;
      };
   }

   interface MS2525C {
      [key: string]: {
         name: string;
         [key: string]: any;
      };
   }

   interface MS2525D {
      [key: string]: {
         name: string;
         symbolset: string;
         mainIcon: any[];
         modifier1: any[];
         modifier2: any[];
      };
   }

   const ms2525b: MS2525B;
   const ms2525c: MS2525C;
   const ms2525d: MS2525D;
}
