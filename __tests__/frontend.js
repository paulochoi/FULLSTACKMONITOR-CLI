/* eslint-disable */
import React from 'react';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import InteligentHeader from '../src/components/IntelligentHeader/IntelligentHeader.js'
import LogTable from '../src/components/LogTable/LogTable.js'
import LogDrawer from '../src/components/LogDrawer/LogDrawer.js'
import App from '../src/components/App.js'

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('App JS', () => {
    
  })

})