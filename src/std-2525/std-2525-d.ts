import { ms2525d } from 'mil-std-2525';

export const STD_2525_D = ms2525d;

interface STD2525DSectionValue {
   code: string;
   id: string;
   title: string;
   desc: string;
}

interface STD2525DSection {
   [key: string]: STD2525DSectionValue;
}

interface STD2525DData {
   [key: string]: STD2525DSection;
}

type STD2525DObject = STD2525DData;

type STD2525Array = STD2525DSectionValue[][];

export const STD_2525_D_DEFAULT: STD2525DData = {
   frame: {
      reality: {
         code: '0',
         id: 'reality',
         title: 'Reality',
         desc: '',
      },
      exercise: {
         code: '1',
         id: 'exercise',
         title: 'Exercise',
         desc: '',
      },
      simulation: {
         code: '2',
         id: 'simulation',
         title: 'Simulation',
         desc: '',
      },
   },
   affiliation: {
      pending: {
         code: '0',
         id: 'pending',
         title: 'Pending',
         desc: 'Tracks which have not been subject to the identification process but which are available for reporting may be reported with a status of pending.',
      },
      unknown: {
         code: '1',
         id: 'unknown',
         title: 'Unknown',
         desc: 'An evaluated track that has not been identified.',
      },
      assumed_friend: {
         code: '2',
         id: 'assumed_friend',
         title: 'Assumed Friend',
         desc: 'A track which is assumed to be a friend because of its characteristics, behavior, or origin',
      },
      friend: {
         code: '3',
         id: 'friend',
         title: 'Friend',
         desc: 'A track belonging to a declared, presumed or recognized friendly nation, faction or group.',
      },
      neutral: {
         code: '4',
         id: 'neutral',
         title: 'Neutral',
         desc: 'A track or contact whose characteristics, behaviour, origin, or nationality indicate that it is neither supporting nor opposing friendly forces.',
      },
      suspect: {
         code: '5',
         id: 'suspect',
         title: 'Suspect',
         desc: 'A track that is potentially hostile because of its characteristics, behavior, origin, or nationality.',
      },
      // joker: {
      //    code: '5',
      //    title: 'Joker',
      //    desc: 'A friendly track acting as a suspect for exercise purposes.',
      // },
      hostile: {
         code: '6',
         id: 'hostile',
         title: 'Hostile',
         desc: 'A track whose characteristics, behaviour or origin indicate that it is a threat to friendly forces. Designation as hostile does not necessarily imply clearance to engage. (STANAG 1241) In identification, the designation given to a track, object or entity whose characteristics, behaviour or origin indicate that it is a threat to friendly forces. Designation as hostile does not necessarily imply clearance to engage.',
      },
      // faker: {
      //    code: '6',
      //    title: 'Faker',
      //    desc: 'A friendly track acting as a hostile for exercise purposes.',
      // },
   },
   symbolset: (() => {
      const final: STD2525DSection = {};
      for (const symcode in ms2525d) {
         const obj = ms2525d[symcode];
         const id = obj.name.replaceAll(' ', '_').toLowerCase();
         final[id] = {
            id,
            code: symcode,
            title: obj.name,
            desc: obj.name,
         };
      }
      return final;
   })(),
   status: {
      present: {
         code: '0',
         id: 'present',
         title: 'Present',
         desc: '',
      },
      planned: {
         code: '1',
         id: 'planned',
         title: 'Planned/Anticipated/Suspect',
         desc: '',
      },
      fully_capable: {
         code: '2',
         id: 'fully_capable',
         title: 'Present/Fully capable',
         desc: '',
      },
      damaged: {
         code: '3',
         id: 'damaged',
         title: 'Present/Damaged',
         desc: '',
      },
      destroyed: {
         code: '4',
         id: 'destroyed',
         title: 'Present/Destroyed',
         desc: '',
      },
      full_to_capacity: {
         code: '5',
         id: 'full_to_capacity',
         title: 'Present/Full to capacity',
         desc: '',
      },
   },
   // HTFD: {
   //    not_applicable: {
   //       code: '0',
   //       id: 'not_applicable',
   //       title: 'Not Applicable',
   //       desc: '',
   //    },
   //    feint_dummy: {
   //       code: '1',
   //       id: 'feint_dummy',
   //       title: 'Feint/Dummy',
   //       desc: '',
   //    },
   //    headquarters: {
   //       code: '2',
   //       id: 'headquarters',
   //       title: 'Headquarters',
   //       desc: '',
   //    },
   //    feint_dummy_headquarters: {
   //       code: '3',
   //       id: 'feint_dummy_headquarters',
   //       title: 'Feint/Dummy Headquarters',
   //       desc: '',
   //    },
   //    task_force: {
   //       code: '4',
   //       id: 'task_force',
   //       title: 'Task Force',
   //       desc: '',
   //    },
   //    feint_dummy_task_force: {
   //       code: '5',
   //       id: 'feint_dummy_task_force',
   //       title: 'Feint/Dummy Task Force',
   //       desc: '',
   //    },
   //    task_force_headquarters: {
   //       code: '6',
   //       id: 'task_force_headquarters',
   //       title: 'Task Force Headquarters',
   //       desc: '',
   //    },
   //    feint_dummy_task_force_headquarters: {
   //       code: '7',
   //       id: 'feint_dummy_task_force_headquarters',
   //       title: 'Feint/Dummy Task Force Headquarters',
   //       desc: '',
   //    },
   // },
   // EMTA: {

   // }
};

function asObject(): STD2525DObject {
   return STD_2525_D_DEFAULT;
}

function asArray(): STD2525Array {
   const { frame, affiliation, symbolset, status } = asObject();

   const frameArray = Object.values(frame).sort((a, b) => +a.code - +b.code);
   const affiliationArray = Object.values(affiliation).sort(
      (a, b) => +a.code - +b.code,
   );
   const symbolsetArray = Object.values(symbolset).sort(
      (a, b) => +a.code - +b.code,
   );
   const statusArray = Object.values(status).sort((a, b) => +a.code - +b.code);

   //>> Make sure to keep order <<//
   const result = [frameArray, affiliationArray, symbolsetArray, statusArray];
   return result;
}

export class STD2525D {
   private readonly START_CODE: string = '10';
   private readonly CODE_LENGTH: number = 20;

   object: STD2525DObject;
   array: STD2525Array;

   constructor() {
      this.object = asObject();
      this.array = asArray();
   }
}
