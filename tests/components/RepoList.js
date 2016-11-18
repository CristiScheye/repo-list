import test from 'tape';
import React from 'react';
import { shallow, mount } from 'enzyme';
import RepoList from '../../src/components/RepoList/';

const defaultProps = {}

test('RepoList', t => {
  const wrapper = shallow(<RepoList {...defaultProps} />)
  const componentInner = wrapper.find(`.${RepoList.name}`)

  t.equal(
    wrapper.type(),
    'ul',
    'component tag is <ul>'
  )

  t.ok(
    componentInner.is(`.${RepoList.name}`),
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
