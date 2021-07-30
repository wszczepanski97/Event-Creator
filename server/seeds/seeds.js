exports.seed = async (knex) => {
  await knex("events").del();
  await knex("events").insert([
    {
      id: 1,
      firstName: "Aldrich",
      lastName: "Halim",
      email: "aldrichhalim@event.com",
      eventDate: "2020-01-01",
    },
    {
      id: 2,
      firstName: "John",
      lastName: "Doe",
      email: "johndoe@event.com",
      eventDate: "2020-02-01",
    },
    {
      id: 3,
      firstName: "Jokowi",
      lastName: "Dodo",
      email: "jokowidodo@event.com",
      eventDate: "2020-03-01",
    },
  ]);
};
