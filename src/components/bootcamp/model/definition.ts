import { ModelDefinition } from "src/types/Model";

const bootcampSchemaDefinition: ModelDefinition = {
  name: "bootcamp",
  plural: "bootcamps",
  properties: {
    name: {
      type: "String",
      required: true,
      unique: true,
      trim: true
    },
    slug: { type: "String", required: false },
    description: {
      type: "String",
      required: true
    },
    website: {
      type: "String",
      required: false
    },
    address: {
      type: "String",
      required: true
    }
  }
};

export default bootcampSchemaDefinition;

// const bootcampModel:ModelDefinition = {
// 	name: 'bootcamp',
// 	plural: 'bootcamps',
// 	properties: {
// 		name: {
// 			type: "Array",
// 		}
// 	}
// }

// export default {
//   name: "bootcamp",
//   plural: "bootcamps",
//   options: {},
//   properties: {
// 		name: {
// 			type: ModelDataTypes.String,
// 			required
// 		}
// 	},
//   validations: [],
//   relations: {},
//   methods: {}
// };
