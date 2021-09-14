const { v4 } = require("uuid");
const fs = require("fs/promises");
const path = require("path");
const listContacts = require("./listContacts");

const addContact = async (name, email, phone) => {
  const contacts = await listContacts();
  const newContact = { id: v4(), name, email, phone };
  contacts.push(newContact);
  const __dirname = path.resolve();
  const filePath = path.join(__dirname, "db/contacts.json");
  await fs.writeFile(filePath, JSON.stringify(contacts));

  return newContact;
};

module.exports = addContact;
