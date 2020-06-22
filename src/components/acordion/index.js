import React from 'react';
import {
  Container,
  Header,
  Content,
  Icon,
  Accordion,
  Text,
  View,
} from 'native-base';

// Componnent
import Contents from './content';
import Headers from './header';

const Acordion = props => {
  const {edits, omodal, datas, deleteUser, edit, dataUser} = props;
  const dataArray = [
    {title: 'First Element', content: 'Lorem ipsum dolor sit amet'},
    {title: 'Second Element', content: 'Lorem ipsum dolor sit amet'},
    {title: 'Third Element', content: 'Lorem ipsum dolor sit amet'},
  ];
  // console.log('DAshboard', datas);

  return (
    <Accordion
      style={{borderColor: 'black'}}
      dataArray={datas}
      animation={true}
      expanded={false}
      renderHeader={(item, expanded) => (
        <Headers
          item={item}
          expanded={expanded}
          // edits={edits}
          omodal={omodal}
          edit={edit}
          dataUser={dataUser}
          deleteUser={deleteUser}
        />
      )}
      renderContent={item => <Contents item={item} />}
    />
  );
};

export default Acordion;
