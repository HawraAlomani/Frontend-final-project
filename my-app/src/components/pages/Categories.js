import React, { useState } from 'react';
import {
  MDBCard,
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';
import styled from 'styled-components';
import AllCat from '../AllCat';
import ToysCat from '../ToysCat';
import VideoCat from '../VideoCat';
import OudoorCat from '../OudoorCat';
import BoardCat from '../boardCat';

const Categories = () => {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };

  return (
    <Container>
      <MDBCard className='text-center'>
      <MDBTabs className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            All
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
          Toys
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
          Video games
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab4')} active={basicActive === 'tab4'}>
          Outdoor riding toys
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab5')} active={basicActive === 'tab5'}>
          board games
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab6')} active={basicActive === 'tab6'}>
          Others
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>
<Container2>
      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}><AllCat/></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}><ToysCat/></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'}><VideoCat/></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab4'}><OudoorCat/></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab5'}><BoardCat/></MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab6'}>No items yet !</MDBTabsPane>
      </MDBTabsContent>
      </Container2>
      </MDBCard>
    </Container>
  )
}

export default Categories;
const Container = styled.div`
margin: auto;
width: 75%;
padding: 10px;
padding-top: 50px;
`
const Container2 = styled.div`
padding-top: 100px;
padding-bottom: 150px;
padding-left: 20px;
padding-right: 20px;
`