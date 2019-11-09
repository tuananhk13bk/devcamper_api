import { object, string, valid } from "@hapi/joi";

const bootcampValidationSchema = object({
  name: string()
    .max(50)
    .required(),
  description: string()
    .max(500)
    .required(),
  careers: string()
    .valid(
      "Web Development",
      "Mobile development",
      "UI/UX",
      "Data Science",
      "Business",
      "Other"
    )
    .required()
});

export default bootcampValidationSchema;
