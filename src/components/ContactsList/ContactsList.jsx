import PropTypes from 'prop-types';
import { Box, Btn, ListBox } from './ContactsList.styled';

export const ContactsList = ({ contacts, onClickDelBtn }) => {
  return (
    <ListBox>
      {contacts.map(({ id, name, number }) => {
        return (
          <Box key={id}>
            <p>{name}:</p>
            <p>{number}</p>
            <Btn onClick={() => onClickDelBtn(id)} type="button">
              Прощай контакт насовсем
            </Btn>
          </Box>
        );
      })}
    </ListBox>
  );
};

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
};
