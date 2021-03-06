/**
 * Copyright (c) 2017 CA. All rights reserved.
 * This software may be modified and distributed under the terms
 * of the MIT license. See the LICENSE file for details.
 */

import { create as createJss } from 'jss';
import { create as createInjectSheet } from 'react-jss';
import preset from 'jss-preset-default';
import { create as createThemer } from 'ca-ui-themer';
import { create as createReactThemer } from 'ca-ui-react-themer';
import { createMiddleware as createReactThemerJssMiddleware } from 'ca-ui-react-themer-jss';

const jss = createJss(preset());
const injectSheet = createInjectSheet(jss);
const reactThemerJssMiddleware = createReactThemerJssMiddleware(injectSheet);
const themer = createThemer();
themer.setMiddleware(reactThemerJssMiddleware);

export default createReactThemer(themer);
