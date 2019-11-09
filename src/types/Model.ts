enum ModelPrimaryDataTypes {
  String,
  Number,
  Date,
  Boolean,
  Array,
  Object
}

type GeoJSON = {};

enum ModelRelations {
  belongsTo,
  hasMany,
  hasOne,
  belongsToMany
}

type ModelProperties = {
  type: keyof typeof ModelPrimaryDataTypes;
  required: boolean;
  unique?: boolean;
  trim?: boolean;
  default?: string;
};

type ModelDefinition = {
  name: string;
  plural: string;
  options?: { [key: string]: string };
  properties: { [key: string]: ModelProperties };
  relations?: {
    type: keyof typeof ModelRelations;
    model: string;
    foreginKey: string;
  };
};

export { ModelPrimaryDataTypes, ModelDefinition };
