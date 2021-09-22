const fs = require("fs/promises");
const path = require("path");
const listContacts = require("./listContacts");

const removeContact = async (contactId) => {
  const contacts = await listContacts();
  const contactIndex = contacts.findIndex(
    (item) => item.id.toString() === contactId
  );
  if (contactIndex === -1) {
    return null;
  }
  contacts.splice(contactIndex, 1);
  const __dirname = path.resolve();
  const filePath = path.join(__dirname, "db/contacts.json");
  await fs.writeFile(filePath, JSON.stringify(contacts));

  return "Successfully removed";
};

module.exports = removeContact;
