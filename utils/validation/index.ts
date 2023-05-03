export const whichValiation = (name: string) => {
  if (name === "email")
    return {
      required: { value: true, message: `*${name} is required` },
      pattern: {
        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
        message: "*Email is invalid",
      },
    };
  if (name === "password")
    return {
      required: { value: true, message: `*${name} is required` },
      minLength: {
        value: 6,
        message: "*Password must be at least 6 characters",
      },
      maxLength: {
        value: 20,
        message: "*Password must be at most 20 characters",
      },
    };
  if (name === "name")
    return {
      required: { value: true, message: `*Name is required` },
      minLength: {
        value: 4,
        message: "*Name must be at least 4 characters",
      },
      maxLength: {
        value: 12,
        message: "*Name must be at most 12 characters",
      },
    };
  return { required: { value: true, message: `*${name} is required` } };
};
