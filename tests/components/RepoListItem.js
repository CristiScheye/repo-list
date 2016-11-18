import test from 'tape';
import React from 'react';
import { shallow, mount } from 'enzyme';
import RepoListItem from '../../src/components/RepoListItem/';

const defaultProps = {
  name: 'Hello World',
  description: 'testing testing 123',
  url: 'http://www.example.com',
  watchCount: 10,
  starCount: 123,
  forkCount: 9
}

test('RepoListItem', t => {
  const wrapper = shallow(<RepoListItem {...defaultProps} />)
  const componentInner = wrapper.find(`.${RepoListItem.name}`)

  t.equal(
    wrapper.type(),
    'li',
    'component tag is <li>'
  )

  t.ok(
    componentInner.is(`.${RepoListItem.name}`),
    'component css className matches component class name'
  )

  t.ok(
    wrapper.find(`a.${RepoListItem.name}-name`),
    'repo name is displayed as a link'
  )

  t.equal(
    wrapper.find(`a.${RepoListItem.name}-name`).props().href,
    defaultProps.url,
    'link href is the component prop "url"'
  )

  t.equal(
    wrapper.find(`a.${RepoListItem.name}-name`).text(),
    defaultProps.name,
    'link text is the component prop "name"'
  )

  t.equal(
    wrapper.find(`p.${RepoListItem.name}-description`).text(),
    defaultProps.description,
    'paragraph text of the component prop "description"'
  )

  t.equal(
    wrapper.find(`.${RepoListItem.name}-metrics`).children().length,
    3,
    'metrics section has three children'
  )

  const metricsDisplayProps = [
    {icon: 'eye', value: defaultProps.watchCount},
    {icon: 'star', value: defaultProps.starCount},
    {icon: 'fork', value: defaultProps.forkCount},
  ]
  metricsDisplayProps.forEach(propSet => {
    t.ok(
      wrapper.find(`MetricDisplay`).filterWhere(node => {
        return node.prop('icon') === propSet.icon && node.prop('value') === propSet.value
      }),
      `MetricDisplay passes correct props for ${propSet.icon} icon`
    )
  })

  t.end()
});
