// after fetch is done, state is updated
// conversion method returns correct output


import test from 'tape';
import React from 'react';
import { shallow, mount } from 'enzyme';
import App from '../../src/components/App/';

const defaultProps = {}

test('App', t => {
  const wrapper = shallow(<App {...defaultProps} />)
  const componentInner = wrapper.find(`.${App.name}`)

  t.equal(
    wrapper.type(),
    'ul',
    'component tag is <ul>'
  )

  t.ok(
    componentInner.is(`.${App.name}`),
    'component css className matches component class name'
  )


  const propsWithData = {
    repoData: [{value: 'hi', value: 'happy thanksgiving!'}],
    ListCell: React.createClass({render: () => <li></li>})
  };

  wrapper.setProps(propsWithData);

  t.equal(
    wrapper.find('ul').children().length,
    wrapper.instance().props.repoData.length,
    'creates a child element for every item in "repoData" prop'
  )


  t.end()
});
