export const ContactsList = ({ contacts, onClickDelBtn }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => {
        return (
          <li key={id}>
            {name}:{number}
            <button onClick={() => onClickDelBtn(id)} type="button">
              Прощай контакт насовсем
            </button>
          </li>
        );
      })}
    </ul>
  );
};
